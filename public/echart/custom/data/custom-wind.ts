function shuffle(array: any[]) {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

function run(windData) {
  let p = 0
  let maxMag = 0
  let minMag = Infinity
  let data = []
  for (let j = 0; j < windData.ny; j++) {
    for (let i = 0; i < windData.nx; i++, p++) {
      let vx = windData.data[p][0]
      let vy = windData.data[p][1]
      let mag = Math.sqrt(vx * vx + vy * vy)
      data.push([
        (i / windData.nx) * 360 - 180,
        (j / windData.ny) * 180 - 90,
        vx,
        vy,
        mag
      ])
      maxMag = Math.max(mag, maxMag)
      minMag = Math.min(mag, minMag)
    }
  }
  shuffle(data)

  myChart.setOption(
    (option = {
      backgroundColor: '#333',
      visualMap: {
        left: 'center',
        min: minMag,
        max: maxMag,
        dimension: 4,
        inRange: {
          // prettier-ignore
          color: ["#313695", "#4575b4", "#74add1", "#abd9e9", "#e0f3f8", "#ffffbf", "#fee090", "#fdae61", "#f46d43", "#d73027", "#a50026"]
        },
        calculable: true,
        textStyle: {
          color: '#fff'
        },
        orient: 'horizontal'
      },
      geo: {
        map: 'world',
        left: 0,
        right: 0,
        top: 0,
        zoom: 1,
        silent: true,
        roam: true,
        itemStyle: {
          areaColor: '#323c48',
          borderColor: '#111'
        }
      },
      series: {
        type: 'custom',
        coordinateSystem: 'geo',
        data: data,
        encode: {
          x: 0,
          y: 0
        },
        renderItem: function (params, api) {
          const x = api.value(0)
          const y = api.value(1)
          const dx = api.value(2)
          const dy = api.value(3)
          const start = api.coord([Math.max(x - dx / 5, -180), Math.max(y - dy / 5, -90)])
          const end = api.coord([Math.min(x + dx / 5, 180), Math.min(y + dy / 5, 90)])
          return {
            type: 'line',
            shape: {
              x1: start[0],
              y1: start[1],
              x2: end[0],
              y2: end[1]
            },
            style: {
              lineWidth: 0.5,
              stroke: api.visual('color')
            }
          }
        },
        progressive: 2000
      }
    })
  )
}

export {}
