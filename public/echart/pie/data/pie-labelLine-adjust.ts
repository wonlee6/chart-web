const datas = [
  [
    {name: "Saint Petersburg Guests", value: 5.6},
    {name: "The Complete Works of Dostoevsky", value: 1},
    {name: "The Historical Records (6 Volumes)", value: 0.8},
    {name: `Gardner's Art Through the Ages`, value: 0.5},
    {name: "Phenomenon and Essence", value: 0.5},
    {name: "Others", value: 3.8}
  ],
  [
    {name: "Foundation: The Galactic Empire, Book 5", value: 3.8},
    {name: `Jun Yu's Product Methodology`, value: 2.3},
    {name: "The Fugitive Art", value: 2.2},
    {name: "Memoirs of World War I (5 Volumes)", value: 1.3},
    {name: "Scrum Essence", value: 1.2},
    {name: "Others", value: 5.7}
  ],
  [
    {name: "Klein Bottle", value: 3.5},
    {name: "The Most Important Thing: Investing", value: 2.8},
    {name: "A Brief History of China", value: 1.7},
    {name: "Fly Like a Bird Towards Your Mountain", value: 1.4},
    {name: "Phenomenon and Essence", value: 0.5},
    {name: "Others", value: 3.8}
  ]
];

option = {
  title: {
    text: "Distribution of Reading Books",
    left: "center",
    textStyle: {
      color: "#999",
      fontWeight: "normal",
      fontSize: 14
    }
  },
  series: datas.map(function (data, idx) {
    let top = idx * 33.3;
    return {
      type: "pie",
      radius: [20, 60],
      top: top + "%",
      height: "33.33%",
      left: "center",
      width: 400,
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 1
      },
      label: {
        alignTo: "edge",
        formatter: "{name|{b}}\n{time|{c} hour}",
        minMargin: 5,
        edgeDistance: 10,
        lineHeight: 15,
        rich: {
          time: {
            fontSize: 10,
            color: "#999"
          }
        }
      },
      labelLine: {
        length: 15,
        length2: 0,
        maxSurfaceAngle: 80
      },
      labelLayout: function (params) {
        const isLeft = params.labelRect.x < myChart.getWidth() / 2;
        const points = params.labelLinePoints as number[][];
        // Update the end point.
        points[2][0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width;
        return {
          labelLinePoints: points
        };
      },
      data: data
    };
  })
};

export {};
