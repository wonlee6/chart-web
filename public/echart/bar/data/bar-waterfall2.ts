option = {
  title: {
    text: "Accumulated Waterfall Chart"
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  legend: {
    data: ["Expenses", "Income"]
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: {
    type: "category",
    data: [
      "Nov 1",
      "Nov 2",
      "Nov 3",
      "Nov 4",
      "Nov 5",
      "Nov 6",
      "Nov 7",
      "Nov 8",
      "Nov 9",
      "Nov 10",
      "Nov 11"
    ]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      name: "Placeholder",
      type: "bar",
      stack: "Total",
      silent: true,
      itemStyle: {
        borderColor: "transparent",
        color: "transparent"
      },
      emphasis: {
        itemStyle: {
          borderColor: "transparent",
          color: "transparent"
        }
      },
      data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
    },
    {
      name: "Income",
      type: "bar",
      stack: "Total",
      label: {
        show: true,
        position: "top"
      },
      data: [900, 345, 393, "-", "-", 135, 178, 286, "-", "-", "-"]
    },
    {
      name: "Expenses",
      type: "bar",
      stack: "Total",
      label: {
        show: true,
        position: "bottom"
      },
      data: ["-", "-", "-", 108, 154, "-", "-", "-", 119, 361, 203]
    }
  ]
};

export {};