export const enum ChartNameModel {
    Line = "Line",
    Bar = "Bar",
    Pie = "Pie",
    Heatmap = "Heatmap",
    Treemap = "Treemap",
    Sunburst = "Sunburst",
    Parallel = "Parallel",
    Funnel = "Funnel",
    Gauge = "Gauge",
    Dataset = "Dataset",
    Scatter = "Scatter",
    GEO_Map = "Geo/Map",
    CandleStick = "CandleStick",
    Radar = "Radar",
    Boxplot = "Boxplot",
    Graph = "Graph",
    Lines = "Lines",
    Tree = "Tree",
    Sankey = "Sankey",
    PictorialBar = "PictorialBar",
    ThemeRiver = "ThemeRiver",
    Calendar = "Calendar",
    Custom = "Custom",
    DataZoom = "DataZoom",
    Graphic = "Graphic"
}

export const enum ChartTypeModel {
    Line = "line",
    Bar = "bar",
    Pie = "pie",
    Heatmap = "heatmap",
    Treemap = "treemap",
    Sunburst = "sunburst",
    Parallel = "parallel",
    Funnel = "funnel",
    Gauge = "gauge",
    Dataset = "dataset",
    Scatter = "scatter",
    GEO_Map = "geo_map",
    CandleStick = "candlestick",
    Radar = "radar",
    Boxplot = "boxplot",
    Graph = "graph",
    Lines = "lines",
    Tree = "tree",
    Sankey = "sankey",
    PictorialBar = "pictorialBar",
    ThemeRiver = "themeRiver",
    Calendar = "calendar",
    Custom = "custom",
    DataZoom = "dataZoom",
    Graphic = "graphic"
}

export type MenuListModel = {
    name: ChartNameModel
    value: ChartTypeModel
}

export type ChartPrivewList = { 
    title: string
    img: string
    type: ChartTypeModel
}