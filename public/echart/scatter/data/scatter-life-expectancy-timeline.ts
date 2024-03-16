let itemStyle = {
  opacity: 0.8
};
let sizeFunction = function (x) {
  let y = Math.sqrt(x / 5e8) + 0.1;
  return y * 80;
};
const schema = [
  {name: "Income", index: 0, text: "Per Capita Income", unit: "USD"},
  {name: "LifeExpectancy", index: 1, text: "Life Expectancy", unit: "years"},
  {name: "Population", index: 2, text: "Total Population", unit: ""},
  {name: "Country", index: 3, text: "Country", unit: ""}
];

function ___bfChartRun(data) {
  option = {
    baseOption: {
      timeline: {
        axisType: "category",
        orient: "vertical",
        autoPlay: true,
        inverse: true,
        playInterval: 1000,
        left: null,
        right: 0,
        top: 20,
        bottom: 20,
        width: 55,
        height: null,
        symbol: "none",
        checkpointStyle: {
          borderWidth: 2
        },
        controlStyle: {
          showNextBtn: false,
          showPrevBtn: false
        },
        data: []
      },
      title: [
        {
          text: data.timeline[0],
          textAlign: "center",
          left: "63%",
          top: "55%",
          textStyle: {
            fontSize: 100
          }
        },
        {
          text: "Evolution of Per Capita Life Expectancy and GDP by Country",
          left: "center",
          top: 10,
          textStyle: {
            fontWeight: "normal",
            fontSize: 20
          }
        }
      ],
      tooltip: {
        padding: 5,
        borderWidth: 1,
        formatter: function (obj) {
          let value = obj.value;
          return (
            schema[3].text +
            ": " +
            value[3] +
            "<br>" +
            schema[1].text +
            ": " +
            value[1] +
            " " +
            schema[1].unit +
            "<br>" +
            schema[0].text +
            ": " +
            value[0] +
            " " +
            schema[0].unit +
            "<br>" +
            schema[2].text +
            ": " +
            value[2] +
            "<br>"
          );
        }
      },
      grid: {
        top: 100,
        containLabel: true,
        left: 30,
        right: "110"
      },
      xAxis: {
        type: "log",
        name: "Per Capita Income",
        max: 100000,
        min: 300,
        nameGap: 25,
        nameLocation: "middle",
        nameTextStyle: {
          fontSize: 18
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: "{value} $"
        }
      },
      yAxis: {
        type: "value",
        name: "year",
        max: 100,
        nameTextStyle: {
          fontSize: 18
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: "{value} years"
        }
      },
      visualMap: [
        {
          show: false,
          dimension: 3,
          categories: data.counties,
          inRange: {
            color: (function () {
              let colors = ["#51689b", "#ce5c5c", "#fbc357", "#8fbf8f", "#659d84", "#fb8e6a", "#c77288", "#786090", "#91c4c5", "#6890ba"];
              return colors.concat(colors);
            })()
          }
        }
      ],
      series: [
        {
          type: "scatter",
          itemStyle: itemStyle,
          data: data.series[0],
          symbolSize: function (val) {
            return sizeFunction(val[2]);
          }
        }
      ],
      animationDurationUpdate: 1000,
      animationEasingUpdate: "quinticInOut"
    },
    options: []
  };
  for (let n = 0; n < data.timeline.length; n++) {
    option.baseOption.timeline.data.push(data.timeline[n]);
    option.options.push({
      title: {
        show: true,
        text: data.timeline[n] + ""
      },
      series: {
        name: data.timeline[n],
        type: "scatter",
        itemStyle: itemStyle,
        data: data.series[n],
        symbolSize: function (val) {
          return sizeFunction(val[2]);
        }
      }
    });
  }
  myChart.setOption(option);
}

export {};