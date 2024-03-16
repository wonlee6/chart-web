const dataBJ = [
  [1, 55, 9, 56, 0.46, 18, 6, "Moderate"],
  [2, 25, 11, 21, 0.65, 34, 9, "Excellent"],
  [3, 56, 7, 63, 0.3, 14, 5, "Moderate"],
  [4, 33, 7, 29, 0.33, 16, 6, "Excellent"],
  [5, 42, 24, 44, 0.76, 40, 16, "Excellent"],
  [6, 82, 58, 90, 1.77, 68, 33, "Moderate"],
  [7, 74, 49, 77, 1.46, 48, 27, "Moderate"],
  [8, 78, 55, 80, 1.29, 59, 29, "Moderate"],
  [9, 267, 216, 280, 4.8, 108, 64, "Severe Pollution"],
  [10, 185, 127, 216, 2.52, 61, 27, "Moderate Pollution"],
  [11, 39, 19, 38, 0.57, 31, 15, "Excellent"],
  [12, 41, 11, 40, 0.43, 21, 7, "Excellent"],
  [13, 64, 38, 74, 1.04, 46, 22, "Moderate"],
  [14, 108, 79, 120, 1.7, 75, 41, "Mild Pollution"],
  [15, 108, 63, 116, 1.48, 44, 26, "Mild Pollution"],
  [16, 33, 6, 29, 0.34, 13, 5, "Excellent"],
  [17, 94, 66, 110, 1.54, 62, 31, "Moderate"],
  [18, 186, 142, 192, 3.88, 93, 79, "Moderate Pollution"],
  [19, 57, 31, 54, 0.96, 32, 14, "Moderate"],
  [20, 22, 8, 17, 0.48, 23, 10, "Excellent"],
  [21, 39, 15, 36, 0.61, 29, 13, "Excellent"],
  [22, 94, 69, 114, 2.08, 73, 39, "Moderate"],
  [23, 99, 73, 110, 2.43, 76, 48, "Moderate"],
  [24, 31, 12, 30, 0.5, 32, 16, "Excellent"],
  [25, 42, 27, 43, 1, 53, 22, "Excellent"],
  [26, 154, 117, 157, 3.05, 92, 58, "Moderate Pollution"],
  [27, 234, 185, 230, 4.09, 123, 69, "Severe Pollution"],
  [28, 160, 120, 186, 2.77, 91, 50, "Moderate Pollution"],
  [29, 134, 96, 165, 2.76, 83, 41, "Mild Pollution"],
  [30, 52, 24, 60, 1.03, 50, 21, "Moderate"],
  [31, 46, 5, 49, 0.28, 10, 6, "Excellent"]
];
const dataGZ = [
  [1, 26, 37, 27, 1.163, 27, 13, "Excellent"],
  [2, 85, 62, 71, 1.195, 60, 8, "Moderate"],
  [3, 78, 38, 74, 1.363, 37, 7, "Moderate"],
  [4, 21, 21, 36, 0.634, 40, 9, "Excellent"],
  [5, 41, 42, 46, 0.915, 81, 13, "Excellent"],
  [6, 56, 52, 69, 1.067, 92, 16, "Moderate"],
  [7, 64, 30, 28, 0.924, 51, 2, "Moderate"],
  [8, 55, 48, 74, 1.236, 75, 26, "Moderate"],
  [9, 76, 85, 113, 1.237, 114, 27, "Moderate"],
  [10, 91, 81, 104, 1.041, 56, 40, "Moderate"],
  [11, 84, 39, 60, 0.964, 25, 11, "Moderate"],
  [12, 64, 51, 101, 0.862, 58, 23, "Moderate"],
  [13, 70, 69, 120, 1.198, 65, 36, "Moderate"],
  [14, 77, 105, 178, 2.549, 64, 16, "Moderate"],
  [15, 109, 68, 87, 0.996, 74, 29, "Mild Pollution"],
  [16, 73, 68, 97, 0.905, 51, 34, "Moderate"],
  [17, 54, 27, 47, 0.592, 53, 12, "Moderate"],
  [18, 51, 61, 97, 0.811, 65, 19, "Moderate"],
  [19, 91, 71, 121, 1.374, 43, 18, "Moderate"],
  [20, 73, 102, 182, 2.787, 44, 19, "Moderate"],
  [21, 73, 50, 76, 0.717, 31, 20, "Moderate"],
  [22, 84, 94, 140, 2.238, 68, 18, "Moderate"],
  [23, 93, 77, 104, 1.165, 53, 7, "Moderate"],
  [24, 99, 130, 227, 3.97, 55, 15, "Moderate"],
  [25, 146, 84, 139, 1.094, 40, 17, "Mild Pollution"],
  [26, 113, 108, 137, 1.481, 48, 15, "Mild Pollution"],
  [27, 81, 48, 62, 1.619, 26, 3, "Moderate"],
  [28, 56, 48, 68, 1.336, 37, 9, "Moderate"],
  [29, 82, 92, 174, 3.29, 0, 13, "Moderate"],
  [30, 106, 116, 188, 3.628, 101, 16, "Mild Pollution"],
  [31, 118, 50, 0, 1.383, 76, 11, "Mild Pollution"]
];
const dataSH = [
  [1, 91, 45, 125, 0.82, 34, 23, "Moderate"],
  [2, 65, 27, 78, 0.86, 45, 29, "Moderate"],
  [3, 83, 60, 84, 1.09, 73, 27, "Moderate"],
  [4, 109, 81, 121, 1.28, 68, 51, "Mild Pollution"],
  [5, 106, 77, 114, 1.07, 55, 51, "Mild Pollution"],
  [6, 109, 81, 121, 1.28, 68, 51, "Mild Pollution"],
  [7, 106, 77, 114, 1.07, 55, 51, "Mild Pollution"],
  [8, 89, 65, 78, 0.86, 51, 26, "Moderate"],
  [9, 53, 33, 47, 0.64, 50, 17, "Moderate"],
  [10, 80, 55, 80, 1.01, 75, 24, "Moderate"],
  [11, 117, 81, 124, 1.03, 45, 24, "Mild Pollution"],
  [12, 99, 71, 142, 1.1, 62, 42, "Moderate"],
  [13, 95, 69, 130, 1.28, 74, 50, "Moderate"],
  [14, 116, 87, 131, 1.47, 84, 40, "Mild Pollution"],
  [15, 108, 80, 121, 1.3, 85, 37, "Mild Pollution"],
  [16, 134, 83, 167, 1.16, 57, 43, "Mild Pollution"],
  [17, 79, 43, 107, 1.05, 59, 37, "Moderate"],
  [18, 71, 46, 89, 0.86, 64, 25, "Moderate"],
  [19, 97, 71, 113, 1.17, 88, 31, "Moderate"],
  [20, 84, 57, 91, 0.85, 55, 31, "Moderate"],
  [21, 87, 63, 101, 0.9, 56, 41, "Moderate"],
  [22, 104, 77, 119, 1.09, 73, 48, "Mild Pollution"],
  [23, 87, 62, 100, 1, 72, 28, "Moderate"],
  [24, 168, 128, 172, 1.49, 97, 56, "Moderate Pollution"],
  [25, 65, 45, 51, 0.74, 39, 17, "Moderate"],
  [26, 39, 24, 38, 0.61, 47, 17, "Excellent"],
  [27, 39, 24, 39, 0.59, 50, 19, "Excellent"],
  [28, 93, 68, 96, 1.05, 79, 29, "Moderate"],
  [29, 188, 143, 197, 1.66, 99, 51, "Moderate Pollution"],
  [30, 174, 131, 174, 1.55, 108, 50, "Moderate Pollution"],
  [31, 187, 143, 201, 1.39, 89, 53, "Moderate Pollution"]
];
const schema = [
  {name: "date", index: 0, text: "Day"},
  {name: "AQIindex", index: 1, text: "AQI Index"},
  {name: "PM25", index: 2, text: "PM2.5"},
  {name: "PM10", index: 3, text: "PM10"},
  {name: "CO", index: 4, text: "Carbon Monoxide (CO)"},
  {name: "NO2", index: 5, text: "Nitrogen Dioxide (NO2)"},
  {name: "SO2", index: 6, text: "Sulfur Dioxide (SO2)"}
];
const itemStyle = {
  opacity: 0.8,
  shadowBlur: 10,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "rgba(0,0,0,0.3)"
};
option = {
  color: ["#dd4444", "#fec42c", "#80F1BE"],
  legend: {
    top: 10,
    data: ["New York", "Paris", "London"],
    textStyle: {
      fontSize: 16
    }
  },
  grid: {
    left: "10%",
    right: 150,
    top: "18%",
    bottom: "10%"
  },
  tooltip: {
    backgroundColor: "rgba(255,255,255,0.7)",
    formatter: function (param) {
      let value = param.value;
      // prettier-ignore
      return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + param.seriesName + ' ' + value[0] + '日：'
                + value[7]
                + '</div>'
                + schema[1].text + '：' + value[1] + '<br>'
                + schema[2].text + '：' + value[2] + '<br>'
                + schema[3].text + '：' + value[3] + '<br>'
                + schema[4].text + '：' + value[4] + '<br>'
                + schema[5].text + '：' + value[5] + '<br>'
                + schema[6].text + '：' + value[6] + '<br>';
    }
  },
  xAxis: {
    type: "value",
    name: "Date",
    nameGap: 16,
    nameTextStyle: {
      fontSize: 16
    },
    max: 31,
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: "value",
    name: "Air Quality Index (AQI)",
    nameLocation: "end",
    nameGap: 20,
    nameTextStyle: {
      fontSize: 16
    },
    splitLine: {
      show: false
    }
  },
  visualMap: [
    {
      left: "right",
      top: "10%",
      dimension: 2,
      min: 0,
      max: 250,
      itemWidth: 30,
      itemHeight: 120,
      calculable: true,
      precision: 0.1,
      text: ["Circle Size：PM2.5"],
      textGap: 30,
      inRange: {
        symbolSize: [10, 70]
      },
      outOfRange: {
        symbolSize: [10, 70],
        color: ["rgba(255,255,255,0.4)"]
      },
      controller: {
        inRange: {
          color: ["#c23531"]
        },
        outOfRange: {
          color: ["#999"]
        }
      }
    },
    {
      left: "right",
      bottom: "5%",
      dimension: 6,
      min: 0,
      max: 50,
      itemHeight: 120,
      text: ["Brightness: Sulfur Dioxide (SO2)"],
      textGap: 30,
      inRange: {
        colorLightness: [0.9, 0.5]
      },
      outOfRange: {
        color: ["rgba(255,255,255,0.4)"]
      },
      controller: {
        inRange: {
          color: ["#c23531"]
        },
        outOfRange: {
          color: ["#999"]
        }
      }
    }
  ],
  series: [
    {
      name: "New York City",
      type: "scatter",
      itemStyle: itemStyle,
      data: dataBJ
    },
    {
      name: "Paris",
      type: "scatter",
      itemStyle: itemStyle,
      data: dataSH
    },
    {
      name: "London",
      type: "scatter",
      itemStyle: itemStyle,
      data: dataGZ
    }
  ]
};
