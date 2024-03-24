import { ReChartAreaData, ReChartLineData } from '@/lib/recharts/menu-data'
import { ReChartMenu } from '@/model/rechart'

export const rechartHelper = {
  chartMenuList(): { name: string; type: ReChartMenu; children: { name: string }[] }[] {
    return [
      { name: 'LineChart', type: ReChartMenu.Line, children: ReChartLineData },
      { name: 'AreaChart', type: ReChartMenu.Area, children: ReChartAreaData },
      { name: 'BarChart', type: ReChartMenu.Bar, children: [] },
      { name: 'ComposedChart', type: ReChartMenu.Composed, children: [] },
      { name: 'ScatterChart', type: ReChartMenu.Scatter, children: [] },
      { name: 'PieChart', type: ReChartMenu.Pie, children: [] },
      { name: 'RadarChart', type: ReChartMenu.Radar, children: [] },
      { name: 'RadialBarChart', type: ReChartMenu.RadialBar, children: [] },
      { name: 'Treemap', type: ReChartMenu.Treemap, children: [] }
    ]
  }
}
