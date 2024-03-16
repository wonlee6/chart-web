function ___bfChartRun(data) {
  myChart.setOption(
    (option = {
      title: {
        text: "Sankey Diagram"
      },
      tooltip: {
        trigger: "item",
        triggerOn: "mousemove"
      },
      series: [
        {
          type: "sankey",
          data: data.nodes,
          links: data.links,
          emphasis: {
            focus: "adjacency"
          },
          lineStyle: {
            color: "gradient",
            curveness: 0.5
          }
        }
      ]
    })
  );
}

export {};