let categoryData = [];
let errorData = [];
let barData = [];
let dataCount = 100;
for (let i = 0; i < dataCount; i++) {
  let val = Math.random() * 1000;
  categoryData.push("category" + i);
  errorData.push([
    i,
    echarts.number.round(Math.max(0, val - Math.random() * 100)),
    echarts.number.round(val + Math.random() * 80)
  ]);
  barData.push(echarts.number.round(val, 2));
}

option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  title: {
    text: "Error bar chart"
  },
  legend: {
    data: ["bar", "error"]
  },
  dataZoom: [
    {
      type: "slider",
      start: 50,
      end: 70
    },
    {
      type: "inside",
      start: 50,
      end: 70
    }
  ],
  xAxis: {
    data: categoryData
  },
  yAxis: {},
  series: [
    {
      type: "bar",
      name: "bar",
      data: barData,
      itemStyle: {
        color: "#77bef7"
      }
    },
    {
      type: "custom",
      name: "error",
      itemStyle: {
        borderWidth: 1.5
      },
      renderItem: function (params, api) {
        let xValue = api.value(0);
        let highPoint = api.coord([xValue, api.value(1)]);
        let lowPoint = api.coord([xValue, api.value(2)]);
        let halfWidth = (api.size!([1, 0]) as number[])[0] * 0.1;
        let style = api.style({
          stroke: api.visual("color") as string,
          fill: undefined
        });

        return {
          type: "group",
          children: [
            {
              type: "line",
              transition: ["shape"],
              shape: {
                x1: highPoint[0] - halfWidth,
                y1: highPoint[1],
                x2: highPoint[0] + halfWidth,
                y2: highPoint[1]
              },
              style: style
            },
            {
              type: "line",
              transition: ["shape"],
              shape: {
                x1: highPoint[0],
                y1: highPoint[1],
                x2: lowPoint[0],
                y2: lowPoint[1]
              },
              style: style
            },
            {
              type: "line",
              transition: ["shape"],
              shape: {
                x1: lowPoint[0] - halfWidth,
                y1: lowPoint[1],
                x2: lowPoint[0] + halfWidth,
                y2: lowPoint[1]
              },
              style: style
            }
          ]
        };
      },
      encode: {
        x: 0,
        y: [1, 2]
      },
      data: errorData,
      z: 100
    }
  ]
};

export {};