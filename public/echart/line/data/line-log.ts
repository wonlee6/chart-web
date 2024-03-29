option = {
  title: {
    text: 'Log Axis',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}'
  },
  legend: {
    left: 'left'
  },
  xAxis: {
    type: 'category',
    name: 'x',
    splitLine: {
      show: false
    },
    data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  yAxis: {
    type: 'log',
    name: 'y',
    minorSplitLine: {
      show: true
    }
  },
  series: [
    {
      name: 'Log2',
      type: 'line',
      data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
    },
    {
      name: 'Log3',
      type: 'line',
      data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
    },
    {
      name: 'Log1/2',
      type: 'line',
      data: [
        0.5, 0.25, 0.125, 0.0625, 0.03125, 0.015625, 0.0078125, 0.00390625, 0.001953125
      ]
    }
  ]
}

export {}
