// prettier-ignore
let dataAxis = ["dot", "hit", "column", "child", "or", "person", "two", "finger", "at", "touch", "screen", "on", "slide", "move", "can", "enough", "self", "dynamic", "reduce", "expand"];
// prettier-ignore
let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
let yMax = 500;
let dataShadow = [];
for (let i = 0; i < data.length; i++) {
  dataShadow.push(yMax);
}
option = {
  title: {
    text: "Feature examples: Gradient color, shadow, click-to-zoom.",
    subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
  },
  xAxis: {
    data: dataAxis,
    axisLabel: {
      inside: true,
      color: "#fff"
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    z: 10
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: "#999"
    }
  },
  dataZoom: [
    {
      type: "inside"
    }
  ],
  series: [
    {
      type: "bar",
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {offset: 0, color: "#83bff6"},
          {offset: 0.5, color: "#188df0"},
          {offset: 1, color: "#188df0"}
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {offset: 0, color: "#2378f7"},
            {offset: 0.7, color: "#2378f7"},
            {offset: 1, color: "#83bff6"}
          ])
        }
      },
      data: data
    }
  ]
};
// Enable data zoom when user click bar.
const zoomSize = 6;
myChart.on("click", function (params) {
  console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
  myChart.dispatchAction({
    type: "dataZoom",
    startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
    endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
  });
});

export {};