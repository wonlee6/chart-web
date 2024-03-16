const data = [
  [5000, 10000, 6785.71],
  [4000, 10000, 6825],
  [3000, 6500, 4463.33],
  [2500, 5600, 3793.83],
  [2000, 4000, 3060],
  [2000, 4000, 3222.33],
  [2500, 4000, 3133.33],
  [1800, 4000, 3100],
  [2000, 3500, 2750],
  [2000, 3000, 2500],
  [1800, 3000, 2433.33],
  [2000, 2700, 2375],
  [1500, 2800, 2150],
  [1500, 2300, 2100],
  [1600, 3500, 2057.14],
  [1500, 2600, 2037.5],
  [1500, 2417.54, 1905.85],
  [1500, 2000, 1775],
  [1500, 1800, 1650]
];
// prettier-ignore
const cities = ["New York City", "Paris", "London", "Tokyo", "Rome", "Seoul", "Berlin", "Beijing", "Istanbul", "Delhi", "Moscow", "Sao Paulo", "Mumbai", "Cairo", "Lahore", "Sydney", "Las Vegas", "Athens", "Kuala Lumpur"];
const barHeight = 50;
option = {
  title: {
    text: "Bar Chart on Polar",
    subtext: "Data from https://www.numbeo.com"
  },
  legend: {
    show: true,
    top: "bottom",
    data: ["Range", "Average"]
  },
  grid: {
    top: 100
  },
  angleAxis: {
    type: "category",
    data: cities
  },
  tooltip: {
    show: true,
    formatter: function (params: any) {
      const id = params.dataIndex;
      return cities[id] + "<br>Lowest：" + data[id][0] + "<br>Highest：" + data[id][1] + "<br>Average：" + data[id][2];
    }
  },
  radiusAxis: {},
  polar: {},
  series: [
    {
      type: "bar",
      itemStyle: {
        color: "transparent"
      },
      data: data.map(function (d) {
        return d[0];
      }),
      coordinateSystem: "polar",
      stack: "Min Max",
      silent: true
    },
    {
      type: "bar",
      data: data.map(function (d) {
        return d[1] - d[0];
      }),
      coordinateSystem: "polar",
      name: "Range",
      stack: "Min Max"
    },
    {
      type: "bar",
      itemStyle: {
        color: "transparent"
      },
      data: data.map(function (d) {
        return d[2] - barHeight;
      }),
      coordinateSystem: "polar",
      stack: "Average",
      silent: true,
      z: 10
    },
    {
      type: "bar",
      data: data.map(function (d) {
        return barHeight * 2;
      }),
      coordinateSystem: "polar",
      name: "Average",
      stack: "Average",
      barGap: "-100%",
      z: 10
    }
  ]
};

export {};