function ___bfChartRun(data) {
  myChart.setOption(
    (option = {
      title: {
        text: "Node Align Right"
      },
      tooltip: {
        trigger: "item",
        triggerOn: "mousemove"
      },
      series: [
        {
          type: "sankey",
          emphasis: {
            focus: "adjacency"
          },
          nodeAlign: "left",
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

export {};