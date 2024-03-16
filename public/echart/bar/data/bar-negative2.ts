option = {
  title: {
    text: "Bar Chart with Negative Value"
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  grid: {
    top: 80,
    bottom: 30
  },
  xAxis: {
    type: "value",
    position: "top",
    splitLine: {
      lineStyle: {
        type: "dashed"
      }
    }
  },
  yAxis: {
    type: "category",
    axisLine: {show: false},
    axisLabel: {show: false},
    axisTick: {show: false},
    splitLine: {show: false},
    data: ["ten", "nine", "eight", "seven", "six", "five", "four", "three", "two", "one"]
  },
  series: [
    {
      name: "Cost",
      type: "bar",
      stack: "Total",
      label: {
        show: true,
        formatter: "{b}"
      },
      data: [
        {value: -0.07, label: {position: "right"}},
        {value: -0.09, label: {position: "right"}},
        0.2,
        0.44,
        {value: -0.23, label: {position: "right"}},
        0.08,
        {value: -0.17, label: {position: "right"}},
        0.47,
        {value: -0.36, label: {position: "right"}},
        0.18
      ]
    }
  ]
};

export {};