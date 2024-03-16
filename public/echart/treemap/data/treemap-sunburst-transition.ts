function ___bfChartRun(data) {
  const treemapOption: echarts.EChartsOption = {
    series: [
      {
        type: "treemap",
        id: "echarts-package-size",
        animationDurationUpdate: 1000,
        roam: false,
        nodeClick: undefined,
        data: data.children,
        universalTransition: true,
        label: {
          show: true
        },
        breadcrumb: {
          show: false
        }
      }
    ]
  };

  const sunburstOption: echarts.EChartsOption = {
    series: [
      {
        type: "sunburst",
        id: "echarts-package-size",
        radius: ["20%", "90%"],
        animationDurationUpdate: 1000,
        nodeClick: undefined,
        data: data.children,
        universalTransition: true,
        itemStyle: {
          borderWidth: 1,
          borderColor: "rgba(255,255,255,.5)"
        },
        label: {
          show: false
        }
      }
    ]
  };

  let currentOption = treemapOption;
  myChart.setOption(currentOption);
  setInterval(function () {
    currentOption = currentOption === treemapOption ? sunburstOption : treemapOption;
    myChart.setOption(currentOption);
  }, 3000);
}

export {};