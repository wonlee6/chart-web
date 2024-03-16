const data: NonNullable<echarts.GraphSeriesOption["data"]> = [
  {
    fixed: true,
    x: myChart.getWidth() / 2,
    y: myChart.getHeight() / 2,
    symbolSize: 20,
    id: "-1"
  }
];

const edges: NonNullable<echarts.GraphSeriesOption["edges"]> = [];

option = {
  series: [
    {
      type: "graph",
      layout: "force",
      animation: false,
      data: data,
      force: {
        // initLayout: 'circular'
        // gravity: 0
        repulsion: 100,
        edgeLength: 5
      },
      edges: edges
    }
  ]
};
setInterval(function () {
  data.push({
    id: data.length + ""
  });
  let source = Math.round((data.length - 1) * Math.random());
  let target = Math.round((data.length - 1) * Math.random());
  if (source !== target) {
    edges.push({
      source: source,
      target: target
    });
  }
  myChart.setOption({
    series: [
      {
        roam: true,
        data: data,
        edges: edges
      }
    ]
  });
}, 200);

export {};