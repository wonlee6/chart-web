let _animationDuration = 5000;
let _animationDurationUpdate = 7000;
let _animationEasingUpdate = "linear";
// prettier-ignore
let _radianLabels = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpius", "Sagittarius", "Capricornus", "Aquarius", "Pisces"];
let _valOnRoundRadian = _radianLabels.length;
let _radianStep = Math.PI / 45;
let _barWidthValue = 0.4;
let _valOnRadiusStep = 4;
// angleAxis.startAngle is 90 by default.
let _startRadian = Math.PI / 2;
// prettier-ignore
let _colors = [
    { fill: "#5470c6", text: "#2747a5" },
    { fill: "#91cc75", text: "#447f27" },
    { fill: "#fac858", text: "#a0761c" }
];
let _currentDataIndex = 0;
// prettier-ignore
let _datasourceList = [
    [[1, 3], [2, 6], [3, 9]],
    [[1, 12], [2, 16], [3, 14]],
    [[1, 17], [2, 22], [3, 19]],
    [[1, 19], [2, 33], [3, 24]],
    [[1, 24], [2, 42], [3, 29]],
    [[1, 27], [2, 47], [3, 41]],
    [[1, 36], [2, 52], [3, 52]],
    [[1, 46], [2, 59], [3, 63]],
    [[1, 60], [2, 63], [3, 69]],
];
let _barNamesByOrdinal = {1: "A", 2: "B", 3: "C"};
function getMaxRadius() {
  let radius = 0;
  let datasource = _datasourceList[_currentDataIndex];
  for (let j = 0; j < datasource.length; j++) {
    let dataItem = datasource[j];
    radius = Math.max(radius, getSpiralValueOnRadius(dataItem[0], dataItem[1]));
  }
  return Math.ceil(radius * 1.2);
}
function getSpiralValueOnRadius(valOnStartRadius, valOnEndAngle) {
  return valOnStartRadius + _valOnRadiusStep * (valOnEndAngle / _valOnRoundRadian);
}
function getSpiralRadius(startRadius, endRadian, radiusStep) {
  return startRadius + radiusStep * ((_startRadian - endRadian) / (Math.PI * 2));
}
function renderItem(params, api) {
  let children = [];
  let dataIdx = params.dataIndex;
  addShapes(params, api, children, api.value(0), api.value(1), _colors[dataIdx]);
  return {
    type: "group",
    children: children
  };
}
function addShapes(params, api, children, valOnStartRadius, valOnEndRadian, color) {
  let coords = api.coord([valOnStartRadius, valOnEndRadian]);
  let startRadius = coords[2];
  let endRadian = coords[3];
  let widthRadius = api.coord([_barWidthValue, 0])[2];
  addPolygon(params, children, widthRadius, startRadius, endRadian, color);
  addLabel(params, children, widthRadius, startRadius, endRadian, color);
}
function addPolygon(params, children, widthRadius, startRadius, endRadian, color) {
  children.push({
    type: "polygon",
    shape: {
      points: makeShapePoints(params, widthRadius, startRadius, endRadian)
    },
    extra: {
      widthRadius: widthRadius,
      startRadius: startRadius,
      endRadian: endRadian,
      transition: ["widthRadius", "startRadius", "endRadian"]
    },
    style: {
      fill: color.fill
    },
    during: function (apiDuring) {
      apiDuring.setShape(
        "points",
        makeShapePoints(params, apiDuring.getExtra("widthRadius"), apiDuring.getExtra("startRadius"), apiDuring.getExtra("endRadian"))
      );
    }
  });
}
function makeShapePoints(params, widthRadius, startRadius, endRadian) {
  let points = [];
  let radiusStep = getRadiusStepByWidth(widthRadius);
  // angleAxis.clockwise is true by default. So when rotate clickwisely, radian decreases.
  for (let iRadian = _startRadian, end = endRadian - _radianStep; iRadian > end; iRadian -= _radianStep) {
    iRadian < endRadian && (iRadian = endRadian);
    let iRadius = getSpiralRadius(startRadius - widthRadius, iRadian, radiusStep);
    points.push(convertToPolarPoint(params, iRadius, iRadian));
  }
  for (let iRadian = endRadian; iRadian < _startRadian + _radianStep; iRadian += _radianStep) {
    iRadian > _startRadian && (iRadian = _startRadian);
    let iRadius = getSpiralRadius(startRadius + widthRadius, iRadian, radiusStep);
    points.push(convertToPolarPoint(params, iRadius, iRadian));
  }
  return points;
}
function getRadiusStepByWidth(widthRadius) {
  return (widthRadius / _barWidthValue) * _valOnRadiusStep;
}
function addLabel(params, children, widthRadius, startRadius, endRadian, color) {
  let point = makeLabelPosition(params, widthRadius, startRadius, endRadian);
  children.push({
    type: "text",
    x: point[0],
    y: point[1],
    transition: [],
    extra: {
      startRadius: startRadius,
      endRadian: endRadian,
      widthRadius: widthRadius,
      transition: ["startRadius", "endRadian", "widthRadius"]
    },
    style: {
      text: makeText(endRadian),
      fill: color.text,
      stroke: "#fff",
      lineWidth: 3,
      fontSize: 16,
      align: "center",
      verticalAlign: "middle",
      rich: {
        round: {fontSize: 24},
        percent: {fontSize: 18}
      }
    },
    z2: 50,
    during: function (apiDuring) {
      let endRadian = apiDuring.getExtra("endRadian");
      let point = makeLabelPosition(params, apiDuring.getExtra("widthRadius"), apiDuring.getExtra("startRadius"), endRadian);
      apiDuring.setTransform("x", point[0]).setTransform("y", point[1]);
      apiDuring.setStyle("text", makeText(endRadian));
    }
  });
  function makeText(endRadian) {
    let radian = _startRadian - endRadian;
    let PI2 = Math.PI * 2;
    let round = Math.floor(radian / PI2);
    let percent = (((radian / PI2) % 1) * 100).toFixed(1) + "%";
    return "Round {round|" + round + "}\n{percent|" + percent + "}";
  }
}
function makeLabelPosition(params, widthRadius, startRadius, endRadian) {
  let radiusStep = getRadiusStepByWidth(widthRadius);
  let iRadius = getSpiralRadius(startRadius, endRadian, radiusStep);
  return convertToPolarPoint(params, iRadius, endRadian - 10 / iRadius);
}
function convertToPolarPoint(renderItemParams, radius, radian) {
  return [Math.cos(radian) * radius + renderItemParams.coordSys.cx, -Math.sin(radian) * radius + renderItemParams.coordSys.cy];
}
option = {
  animationDuration: _animationDuration,
  animationDurationUpdate: _animationDurationUpdate,
  animationEasingUpdate: _animationEasingUpdate,
  dataset: {
    source: _datasourceList[_currentDataIndex]
  },
  tooltip: {},
  angleAxis: {
    type: "value",
    splitArea: {show: true},
    axisLabel: {
      formatter: function (val) {
        return _radianLabels[val];
      },
      color: "rgba(0,0,0,0.2)"
    },
    axisLine: {lineStyle: {color: "rgba(0,0,0,0.2)"}},
    min: 0,
    max: _valOnRoundRadian
  },
  radiusAxis: {
    type: "value",
    interval: 1,
    splitLine: {show: false},
    axisLabel: {
      color: "rgba(0,0,0,0.6)",
      formatter: function (value) {
        return _barNamesByOrdinal[value] || "";
      }
    },
    axisTick: {show: false},
    axisLine: {lineStyle: {color: "rgba(0,0,0,0.2)"}},
    min: 0,
    max: getMaxRadius()
  },
  polar: {},
  series: [
    {
      type: "custom",
      coordinateSystem: "polar",
      renderItem: renderItem
    }
  ]
};
function next() {
  ++_currentDataIndex;
  myChart.setOption({
    dataset: {
      source: _datasourceList[_currentDataIndex]
    },
    radiusAxis: {
      max: getMaxRadius()
    }
  });
  if (_currentDataIndex < _datasourceList.length - 1) {
    setTimeout(next, _animationDurationUpdate);
  }
}
setTimeout(next, 1000);

export {};