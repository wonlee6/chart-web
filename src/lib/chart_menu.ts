import { ChartNameModel, ChartTypeModel } from "@/model/echart";


export const chartMenuList: Array<{name: ChartNameModel; value: ChartTypeModel}> = [
    {name: ChartNameModel.Line, value: ChartTypeModel.Line},
    {name: ChartNameModel.Bar, value: ChartTypeModel.Bar},
    {name: ChartNameModel.Pie, value: ChartTypeModel.Pie},
    {name: ChartNameModel.Scatter, value: ChartTypeModel.Scatter},
    {name: ChartNameModel.GEO_Map, value: ChartTypeModel.GEO_Map},
    {name: ChartNameModel.CandleStick, value: ChartTypeModel.CandleStick},
    {name: ChartNameModel.Radar, value: ChartTypeModel.Radar},
    {name: ChartNameModel.Boxplot, value: ChartTypeModel.Boxplot},
    {name: ChartNameModel.Heatmap, value: ChartTypeModel.Heatmap},
    {name: ChartNameModel.Graph, value: ChartTypeModel.Graph},
    {name: ChartNameModel.Tree, value: ChartTypeModel.Tree},
    {name: ChartNameModel.Treemap, value: ChartTypeModel.Treemap},
    {name: ChartNameModel.Sunburst, value: ChartTypeModel.Sunburst},
    {name: ChartNameModel.Parallel, value: ChartTypeModel.Parallel},
    {name: ChartNameModel.Sankey, value: ChartTypeModel.Sankey},
    {name: ChartNameModel.Funnel, value: ChartTypeModel.Funnel},
    {name: ChartNameModel.Gauge, value: ChartTypeModel.Gauge},
    {name: ChartNameModel.PictorialBar, value: ChartTypeModel.PictorialBar},
    {name: ChartNameModel.ThemeRiver, value: ChartTypeModel.ThemeRiver},
    {name: ChartNameModel.Calendar, value: ChartTypeModel.Calendar},
    {name: ChartNameModel.Custom, value: ChartTypeModel.Custom},
    {name: ChartNameModel.Dataset, value: ChartTypeModel.Dataset},
    {name: ChartNameModel.DataZoom, value: ChartTypeModel.DataZoom},
    {name: ChartNameModel.Graphic, value: ChartTypeModel.Graphic}
]