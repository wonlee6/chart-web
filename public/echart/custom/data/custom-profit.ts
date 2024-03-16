const colorList = [
  "#4f81bd",
  "#c0504d",
  "#9bbb59",
  "#604a7b",
  "#948a54",
  "#e46c0b"
];

const data = [
  [10, 16, 3, "A"],
  [16, 18, 15, "B"],
  [18, 26, 12, "C"],
  [26, 32, 22, "D"],
  [32, 56, 7, "E"],
  [56, 62, 17, "F"]
].map(function (item, index) {
  return {
    value: item,
    itemStyle: {
      color: colorList[index]
    }
  };
});

option = {
  title: {
    text: "Profit",
    left: "center"
  },
  tooltip: {},
  xAxis: {
    scale: true
  },
  yAxis: {},
  series: [
    {
      type: "custom",
      renderItem: function (params, api) {
        let yValue = api.value(2);
        let start = api.coord([api.value(0), yValue]);
        let size = api.size!([
          (api.value(1) as number) - (api.value(0) as number),
          yValue
        ]) as number[];
        let style = api.style();

        return {
          type: "rect",
          shape: {
            x: start[0],
            y: start[1],
            width: size[0],
            height: size[1]
          },
          style: style
        };
      },
      label: {
        show: true,
        position: "top"
      },
      dimensions: ["from", "to", "profit"],
      encode: {
        x: [0, 1],
        y: 2,
        tooltip: [0, 1, 2],
        itemName: 3
      },
      data: data
    }
  ]
};

export {};