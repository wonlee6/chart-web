import {
  barChartImages,
  boxplotChartImages,
  calendarChartImages,
  candlestickChartImages,
  customChartImages,
  dataZoomChartImages,
  datasetChartImages,
  funnelChartImages,
  gaugeChartImages,
  geo_mapChartImages,
  graphChartImages,
  heatmapChartImages,
  lineChartImages,
  parallelChartImages,
  pictorialBarChartImages,
  pieChartImages,
  radarChartImages,
  sankeyChartImages,
  scatterChartImages,
  sunburstChartImages,
  themeRiverChartImages,
  treeChartImages,
  treemapChartImages
} from '@/lib/echarts/echart_data'
import { ChartTypeModel } from '@/model/echart'

export const echartHelper = {
  getChartImgList(chartType: ChartTypeModel) {
    switch (chartType) {
      case ChartTypeModel.Line:
        return lineChartImages
      case ChartTypeModel.Bar:
        return barChartImages
      case ChartTypeModel.Pie:
        return pieChartImages
      case ChartTypeModel.Boxplot:
        return boxplotChartImages
      case ChartTypeModel.Calendar:
        return calendarChartImages
      case ChartTypeModel.CandleStick:
        return candlestickChartImages
      case ChartTypeModel.Custom:
        return customChartImages
      case ChartTypeModel.DataZoom:
        return dataZoomChartImages
      case ChartTypeModel.Dataset:
        return datasetChartImages
      case ChartTypeModel.Funnel:
        return funnelChartImages
      case ChartTypeModel.GEO_Map:
        return geo_mapChartImages
      case ChartTypeModel.Gauge:
        return gaugeChartImages
      case ChartTypeModel.Graph:
        return graphChartImages
      case ChartTypeModel.Graphic:
        return graphChartImages
      case ChartTypeModel.Heatmap:
        return heatmapChartImages
      case ChartTypeModel.Parallel:
        return parallelChartImages
      case ChartTypeModel.Tree:
        return treeChartImages
      case ChartTypeModel.Treemap:
        return treemapChartImages
      case ChartTypeModel.PictorialBar:
        return pictorialBarChartImages
      case ChartTypeModel.Radar:
        return radarChartImages
      case ChartTypeModel.Sankey:
        return sankeyChartImages
      case ChartTypeModel.Scatter:
        return scatterChartImages
      case ChartTypeModel.Sunburst:
        return sunburstChartImages
      case ChartTypeModel.ThemeRiver:
        return themeRiverChartImages
      default:
        return []
    }
  },

  async getChartCode(imgUrl: string, type: ChartTypeModel) {
    const regUrl = imgUrl.split('img/')[1].replace(/\.(?:.*)/, '')
    const url = `/echart/${type}/data/${regUrl}.ts`

    try {
      const responseChartCode = await fetch(url)
      return await responseChartCode.text()
    } catch {
      return ''
    }
  },
  async getChartJsonData(imgUrl: string, type: ChartTypeModel) {
    const regUrl = imgUrl.split('img/')[1].replace(/\.(?:.*)/, '')
    const url = `/echart/${type}/data/${regUrl}.json`

    try {
      const responseChartData = await fetch(url)
      return await responseChartData.json()
    } catch {
      return null
    }
  }
}
