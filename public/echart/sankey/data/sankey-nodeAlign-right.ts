function ___bfChartRun(data) {
  myChart.setOption(
    (option = {
      title: {
        text: "Node Align Left"
      },
      tooltip: {
        trigger: "item",
        triggerOn: "mousemove"
      },
      animation: false,
      series: [
        {
          type: "sankey",
          emphasis: {
            focus: "adjacency"
          },
          nodeAlign: "right",
          data: data.nodes,
          links: data.links,
          lineStyle: {
            color: "source",
            curveness: 0.5
          }
        }
      ]
    })
  );
}
