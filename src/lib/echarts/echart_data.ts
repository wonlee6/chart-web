import { ChartTypeModel } from '@/model/echart'

const LINE_IMG_URL = `/echart/line/img`
const BAR_IMG_URL = `/echart/bar/img`
const PIE_IMG_URL = `/echart/pie/img`
const SCATTER_IMG_URL = `/echart/scatter/img`
const GEO_MAP_IMG_URL = `/echart/geo_map/img`
const CANDLESTICK_IMG_URL = `/echart/candlestick/img`
const RADAR_IMG_URL = `/echart/radar/img`
const BOXPLOT_IMG_URL = `/echart/boxplot/img`
const HEATMAP_IMG_URL = `/echart/heatmap/img`
const GRAPH_IMG_URL = `/echart/graph/img`
const TREE_IMG_URL = `/echart/tree/img`
const TREEMAP_IMG_URL = `/echart/treemap/img`
const SUNBURST_IMG_URL = `/echart/sunburst/img`
const PARALLEL_IMG_URL = `/echart/parallel/img`
const SANKEY_IMG_URL = `/echart/sankey/img`
const FUNNEL_IMG_URL = `/echart/funnel/img`
const GAUGE_IMG_URL = `/echart/gauge/img`
const PICTORIALBAR_IMG_URL = `/echart/pictorialbar/img`
const THEMERIVER_IMG_URL = `/echart/themeriver/img`
const CALENDAR_IMG_URL = `/echart/calendar/img`
const CUSTOM_IMG_URL = `/echart/custom/img`
const DATASET_IMG_URL = `/echart/dataset/img`
const DATAZOOM_IMG_URL = `/echart/datazoom/img`
const GRAPHIC_IMG_URL = `/echart/graphic/img`

export const lineChartImages = [
  {
    title: 'Basic Line Chart',
    img: `${LINE_IMG_URL}/line-simple.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Smoothed Line Chart',
    img: `${LINE_IMG_URL}/line-smooth.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Basic area chart',
    img: `${LINE_IMG_URL}/area-basic.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Stacked Line Chart',
    img: `${LINE_IMG_URL}/line-stack.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Stacked Area Chart',
    img: `${LINE_IMG_URL}/area-stack.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Gradient Stacked Area Chart',
    img: `${LINE_IMG_URL}/area-stack-gradient.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Bump Chart (Ranking)',
    img: `${LINE_IMG_URL}/bump-chart.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Temperature Change in the Coming Week',
    img: `${LINE_IMG_URL}/line-marker.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Area Pieces',
    img: `${LINE_IMG_URL}/area-pieces.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Data Transform Filter',
    img: `${LINE_IMG_URL}/data-transform-filter.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Line Gradient',
    img: `${LINE_IMG_URL}/line-gradient.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Distribution of Electricity',
    img: `${LINE_IMG_URL}/line-sections.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Large scale area chart',
    img: `${LINE_IMG_URL}/area-simple.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Confidence Band',
    img: `${LINE_IMG_URL}/confidence-band.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Rainfall vs Evaporation',
    img: `${LINE_IMG_URL}/grid-multiple.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Multiple X Axes',
    img: `${LINE_IMG_URL}/multiple-x-axis.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Rainfall',
    img: `${LINE_IMG_URL}/area-rainfall.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Area Chart with Time Axis',
    img: `${LINE_IMG_URL}/area-time-axis.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Dynamic Data + Time Axis',
    img: `${LINE_IMG_URL}/dynamic-data2.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Function Plot',
    img: `${LINE_IMG_URL}/line-function.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Line Race',
    img: `${LINE_IMG_URL}/line-race.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Line with Mark lines',
    img: `${LINE_IMG_URL}/line-markline.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Line Style and Item Style',
    img: `${LINE_IMG_URL}/line-style.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Line Chart in Cartesian coordinate system',
    img: `${LINE_IMG_URL}/line-in-cartesian-coordinate-system.webp`,
    type: ChartTypeModel.Line
  },
  { title: 'Log Axis', img: `${LINE_IMG_URL}/line-log.webp`, type: ChartTypeModel.Line },
  {
    title: 'Step Line',
    img: `${LINE_IMG_URL}/line-step.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Line Easing Visualizing',
    img: `${LINE_IMG_URL}/line-easing.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Line Y Category',
    img: `${LINE_IMG_URL}/line-y-category.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Custom Graphic Component',
    img: `${LINE_IMG_URL}/line-graphic.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Click to Add Points',
    img: `${LINE_IMG_URL}/line-pen.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Two Value-Axes in Polar',
    img: `${LINE_IMG_URL}/line-polar.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Two Value-Axes in Polar',
    img: `${LINE_IMG_URL}/line-polar2.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Tooltip and DataZoom on Mobile',
    img: `${LINE_IMG_URL}/line-tooltip-touch.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Draggable Points',
    img: `${LINE_IMG_URL}/line-draggable.webp`,
    type: ChartTypeModel.Line
  },
  {
    title: 'Share Dataset',
    img: `${LINE_IMG_URL}/dataset-link.webp`,
    type: ChartTypeModel.Line
  }
]

export const barChartImages = [
  {
    title: 'Bar with Background',
    img: `${BAR_IMG_URL}/bar-background.webp`,
    type: ChartTypeModel.Bar
  },
  { title: 'Basic Bar', img: `${BAR_IMG_URL}/bar-simple.webp`, type: ChartTypeModel.Bar },
  {
    title: 'Axis Align with Tick',
    img: `${BAR_IMG_URL}/bar-tick-align.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Set Style of Single Bar',
    img: `${BAR_IMG_URL}/bar-background.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Waterfall Chart',
    img: `${BAR_IMG_URL}/bar-waterfall.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Bar Chart with Negative Value',
    img: `${BAR_IMG_URL}/bar-negative2.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Radial Polar Bar Label Position',
    img: `${BAR_IMG_URL}/bar-polar-label-radial.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Tangential Polar Bar Label Position',
    img: `${BAR_IMG_URL}/bar-polar-label-tangential.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'World Population',
    img: `${BAR_IMG_URL}/bar-y-category.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Clickable Column Chart with Gradient',
    img: `${BAR_IMG_URL}/bar-gradient.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Stacked Column Chart',
    img: `${BAR_IMG_URL}/bar-stack.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Stacked Bar with borderRadius',
    img: `${BAR_IMG_URL}/bar-stack-borderRadius.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Stacked Bar Normalization and variation',
    img: `${BAR_IMG_URL}/bar-stack-normalization-and-variation.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Waterfall Chart',
    img: `${BAR_IMG_URL}/bar-waterfall2.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Stacked Horizontal Bar',
    img: `${BAR_IMG_URL}/bar-y-category-stack.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Brush Select on Column Chart',
    img: `${BAR_IMG_URL}/bar-brush.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Bar Chart with Negative Value',
    img: `${BAR_IMG_URL}/bar-negative.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Rainfall vs Evaporation',
    img: `${BAR_IMG_URL}/bar1.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Mixed Line and Bar',
    img: `${BAR_IMG_URL}/mix-line-bar.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Mix Zoom On Value',
    img: `${BAR_IMG_URL}/mix-zoom-on-value.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Multiple Y Axes',
    img: `${BAR_IMG_URL}/multiple-y-axis.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Animation Delay',
    img: `${BAR_IMG_URL}/bar-animation-delay.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Bar Chart Drilldown Animation',
    img: `${BAR_IMG_URL}/bar-drilldown.webp`,
    type: ChartTypeModel.Bar
  },
  { title: 'Bar Race', img: `${BAR_IMG_URL}/bar-race.webp`, type: ChartTypeModel.Bar },
  {
    title: 'Dynamic Data',
    img: `${BAR_IMG_URL}/dynamic-data.webp`,
    type: ChartTypeModel.Bar
  },
  { title: 'Watermark', img: `${BAR_IMG_URL}/watermark.webp`, type: ChartTypeModel.Bar },
  {
    title: 'Bar Chart on Polar',
    img: `${BAR_IMG_URL}/bar-polar-real-estate.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Stacked Bar Chart on Polar',
    img: `${BAR_IMG_URL}/bar-polar-stack.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Stacked Bar Chart on Polar(Radial)',
    img: `${BAR_IMG_URL}/bar-polar-stack-radial.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Rounded Bar on Polar',
    img: `${BAR_IMG_URL}/polar-roundCap.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Sort Data in Bar Chart',
    img: `${BAR_IMG_URL}/data-transform-sort-bar.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Simple Encode',
    img: `${BAR_IMG_URL}/dataset-encode0.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Series Layout By Column or Row',
    img: `${BAR_IMG_URL}/dataset-series-layout-by.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Simple Example of Dataset',
    img: `${BAR_IMG_URL}/dataset-simple0.webp`,
    type: ChartTypeModel.Bar
  },
  {
    title: 'Dataset in Object Array',
    img: `${BAR_IMG_URL}/dataset-simple1.webp`,
    type: ChartTypeModel.Bar
  }
]

export const pieChartImages = [
  {
    title: 'Referer of a Website',
    img: `${PIE_IMG_URL}/pie-simple.webp`,
    type: ChartTypeModel.Pie
  },
  {
    title: 'Doughnut Chart with Rounded Corner',
    img: `${PIE_IMG_URL}/pie-borderRadius.webp`,
    type: ChartTypeModel.Pie
  },
  {
    title: 'Doughnut Chart',
    img: `${PIE_IMG_URL}/pie-doughnut.webp`,
    type: ChartTypeModel.Pie
  },
  {
    title: 'Half Doughnut Chart',
    img: `${PIE_IMG_URL}/pie-half-donut.webp`,
    type: ChartTypeModel.Pie
  },
  {
    title: 'Customized Pie',
    img: `${PIE_IMG_URL}/pie-custom.webp`,
    type: ChartTypeModel.Pie
  },
  {
    title: 'Nightingale Chart',
    img: `${PIE_IMG_URL}/pie-roseType.webp`,
    type: ChartTypeModel.Pie
  },
  {
    title: 'Nightingale Chart (simple)',
    img: `${PIE_IMG_URL}/pie-roseType-simple.webp`,
    type: ChartTypeModel.Pie
  },
  {
    title: 'Pie Label Align',
    img: `${PIE_IMG_URL}/pie-alignTo.webp`,
    type: ChartTypeModel.Pie
  },
  {
    title: 'Label Line Adjust',
    img: `${PIE_IMG_URL}/pie-labelLine-adjust.webp`,
    type: ChartTypeModel.Pie
  },
  { title: 'Nested Pies', img: `${PIE_IMG_URL}/pie-nest.webp`, type: ChartTypeModel.Pie },
  {
    title: 'Partition Data to Pies',
    img: `${PIE_IMG_URL}/data-transform-multiple-pie.webp`,
    type: ChartTypeModel.Pie
  },
  {
    title: 'Default arrangement',
    img: `${PIE_IMG_URL}/dataset-default.webp`,
    type: ChartTypeModel.Pie
  },
  {
    title: 'Calendar Pie',
    img: `${PIE_IMG_URL}/calendar-pie.webp`,
    type: ChartTypeModel.Pie
  },
  {
    title: 'Pie Charts on GEO Map',
    img: `${PIE_IMG_URL}/map-usa-pie.webp`,
    type: ChartTypeModel.Pie
  },
  {
    title: 'Share Dataset',
    img: `${PIE_IMG_URL}/dataset-link.webp`,
    type: ChartTypeModel.Pie
  }
]

export const scatterChartImages = [
  {
    title: 'Basic Scatter Chart',
    img: `${SCATTER_IMG_URL}/scatter-simple.webp`,
    type: ChartTypeModel.Scatter
  },
  {
    title: "Anscomb's quartet",
    img: `${SCATTER_IMG_URL}/scatter-anscombe-quartet.webp`,
    type: ChartTypeModel.Scatter
  },
  {
    title: 'Effect Scatter Chart',
    img: `${SCATTER_IMG_URL}/scatter-effect.webp`,
    type: ChartTypeModel.Scatter
  },
  {
    title: 'Punch Card of Github',
    img: `${SCATTER_IMG_URL}/scatter-punchCard.webp`,
    type: ChartTypeModel.Scatter
  },
  {
    title: 'Scatter on Single Axis',
    img: `${SCATTER_IMG_URL}/scatter-single-axis.webp`,
    type: ChartTypeModel.Scatter
  },
  {
    title: 'Distribution of Height and Weight',
    img: `${SCATTER_IMG_URL}/scatter-weight.webp`,
    type: ChartTypeModel.Scatter
  },
  {
    title: 'Aggregate Scatter to Bar',
    img: `${SCATTER_IMG_URL}/scatter-aggregate-bar.webp`,
    type: ChartTypeModel.Scatter
  },
  {
    title: 'Align Label on the Top',
    img: `${SCATTER_IMG_URL}/scatter-label-align-right.webp`,
    type: ChartTypeModel.Scatter
  },
  {
    title: 'Align Label on the Top',
    img: `${SCATTER_IMG_URL}/scatter-label-align-top.webp`,
    type: ChartTypeModel.Scatter
  },
  {
    title: 'Symbol Shape Morph',
    img: `${SCATTER_IMG_URL}/scatter-symbol-morph.webp`,
    type: ChartTypeModel.Scatter
  },
  {
    title: 'Bubble Chart',
    img: `${SCATTER_IMG_URL}/bubble-gradient.webp`,
    type: ChartTypeModel.Scatter
  },
  {
    title: 'Life Expectancy and GDP',
    img: `${SCATTER_IMG_URL}/scatter-life-expectancy-timeline.webp`,
    type: ChartTypeModel.Scatter
  },
  {
    title: 'Master Painter Color Choices Throughout History',
    img: `${SCATTER_IMG_URL}/scatter-painter-choice.webp`,
    type: ChartTypeModel.Scatter
  },
  {
    title: 'Calendar Charts',
    img: `${SCATTER_IMG_URL}/calendar-charts.webp`,
    type: ChartTypeModel.Scatter
  }
]

export const geo_mapChartImages = [
  {
    title: 'GEO Beef Cuts',
    img: `${GEO_MAP_IMG_URL}/geo-beef-cuts.webp`,
    type: ChartTypeModel.GEO_Map
  },
  {
    title: 'Organ Data with SVG',
    img: `${GEO_MAP_IMG_URL}/geo-organ.webp`,
    type: ChartTypeModel.GEO_Map
  },
  {
    title: 'Flight Seatmap with SVG',
    img: `${GEO_MAP_IMG_URL}/geo-seatmap-flight.webp`,
    type: ChartTypeModel.GEO_Map
  },
  {
    title: 'GEO SVG Lines',
    img: `${GEO_MAP_IMG_URL}/geo-svg-lines.webp`,
    type: ChartTypeModel.GEO_Map
  },
  {
    title: 'GEO SVG Map',
    img: `${GEO_MAP_IMG_URL}/geo-svg-map.webp`,
    type: ChartTypeModel.GEO_Map
  },
  {
    title: 'GEO SVG Scatter',
    img: `${GEO_MAP_IMG_URL}/geo-svg-scatter-simple.webp`,
    type: ChartTypeModel.GEO_Map
  },
  {
    title: 'GEO SVG Traffic',
    img: `${GEO_MAP_IMG_URL}/geo-svg-traffic.webp`,
    type: ChartTypeModel.GEO_Map
  },
  {
    title: 'Morphing between Map and Bar',
    img: `${GEO_MAP_IMG_URL}/map-bar-morph.webp`,
    type: ChartTypeModel.GEO_Map
  },
  {
    title: 'USA Population Estimates (2012)',
    img: `${GEO_MAP_IMG_URL}/map-usa.webp`,
    type: ChartTypeModel.GEO_Map
  },
  {
    title: 'Pie Charts on GEO Map',
    img: `${GEO_MAP_IMG_URL}/map-usa-pie.webp`,
    type: ChartTypeModel.GEO_Map
  }
]

export const candlestickChartImages = [
  {
    title: 'Basic Candlestick',
    img: `${CANDLESTICK_IMG_URL}/candlestick-simple.webp`,
    type: ChartTypeModel.CandleStick
  },
  {
    title: 'OHLC Chart',
    img: `${CANDLESTICK_IMG_URL}/custom-ohlc.webp`,
    type: ChartTypeModel.CandleStick
  },
  {
    title: 'Large Scale Candlestick',
    img: `${CANDLESTICK_IMG_URL}/candlestick-large.webp`,
    type: ChartTypeModel.CandleStick
  },
  {
    title: 'Axis Pointer Link and Touch',
    img: `${CANDLESTICK_IMG_URL}/candlestick-touch.webp`,
    type: ChartTypeModel.CandleStick
  },
  {
    title: 'Candlestick Brush',
    img: `${CANDLESTICK_IMG_URL}/candlestick-brush.webp`,
    type: ChartTypeModel.CandleStick
  },
  {
    title: 'Stock Index 1',
    img: `${CANDLESTICK_IMG_URL}/candlestick-stock1.webp`,
    type: ChartTypeModel.CandleStick
  },
  {
    title: 'Stock Index 2',
    img: `${CANDLESTICK_IMG_URL}/candlestick-stock2.webp`,
    type: ChartTypeModel.CandleStick
  }
]

export const radarChartImages = [
  {
    title: 'Basic Radar Chart',
    img: `${RADAR_IMG_URL}/radar.webp`,
    type: ChartTypeModel.Radar
  },
  {
    title: 'AQI - Radar Chart',
    img: `${RADAR_IMG_URL}/radar-aqi.webp`,
    type: ChartTypeModel.Radar
  },
  {
    title: 'Customized Radar Chart',
    img: `${RADAR_IMG_URL}/radar.webp`,
    type: ChartTypeModel.Radar
  },
  {
    title: 'Proportion of Browsers',
    img: `${RADAR_IMG_URL}/radar.webp`,
    type: ChartTypeModel.Radar
  },
  {
    title: 'Multiple Radar',
    img: `${RADAR_IMG_URL}/radar.webp`,
    type: ChartTypeModel.Radar
  }
]

export const boxplotChartImages = [
  {
    title: 'Boxplot Light Velocity',
    img: `${BOXPLOT_IMG_URL}/boxplot-light-velocity.webp`,
    type: ChartTypeModel.Boxplot
  },
  {
    title: 'Boxplot Light Velocity2',
    img: `${BOXPLOT_IMG_URL}/boxplot-light-velocity2.webp`,
    type: ChartTypeModel.Boxplot
  },
  {
    title: 'Multiple Categories',
    img: `${BOXPLOT_IMG_URL}/boxplot-multi.webp`,
    type: ChartTypeModel.Boxplot
  }
]

export const heatmapChartImages = [
  {
    title: 'Heatmap on Cartesian',
    img: `${HEATMAP_IMG_URL}/heatmap-cartesian.webp`,
    type: ChartTypeModel.Heatmap
  },
  {
    title: 'Heatmap - 20K data',
    img: `${HEATMAP_IMG_URL}/heatmap-large.webp`,
    type: ChartTypeModel.Heatmap
  },
  {
    title: 'Heatmap - Discrete Mapping of Color',
    img: `${HEATMAP_IMG_URL}/heatmap-large-piecewise.webp`,
    type: ChartTypeModel.Heatmap
  },
  {
    title: 'Calendar Heatmap',
    img: `${HEATMAP_IMG_URL}/calendar-heatmap.webp`,
    type: ChartTypeModel.Heatmap
  },
  {
    title: 'Calendar Heatmap Vertical',
    img: `${HEATMAP_IMG_URL}/calendar-vertical.webp`,
    type: ChartTypeModel.Heatmap
  }
]

export const graphChartImages = [
  {
    title: 'Force Layout',
    img: `${GRAPH_IMG_URL}/graph-force2.webp`,
    type: ChartTypeModel.Graph
  },
  {
    title: 'Graph on Cartesian',
    img: `${GRAPH_IMG_URL}/graph-grid.webp`,
    type: ChartTypeModel.Graph
  },
  {
    title: 'Force Layout',
    img: `${GRAPH_IMG_URL}/graph-force.webp`,
    type: ChartTypeModel.Graph
  },
  {
    title: 'Hide Overlapped Label',
    img: `${GRAPH_IMG_URL}/graph-label-overlap.webp`,
    type: ChartTypeModel.Graph
  },
  {
    title: 'Les Miserables',
    img: `${GRAPH_IMG_URL}/graph.webp`,
    type: ChartTypeModel.Graph
  },
  {
    title: 'Les Miserables',
    img: `${GRAPH_IMG_URL}/graph-circular-layout.webp`,
    type: ChartTypeModel.Graph
  },
  {
    title: 'Graph Dynamic',
    img: `${GRAPH_IMG_URL}/graph-force-dynamic.webp`,
    type: ChartTypeModel.Graph
  },
  {
    title: 'Graph Life Expectancy',
    img: `${GRAPH_IMG_URL}/graph-life-expectancy.webp`,
    type: ChartTypeModel.Graph
  },
  {
    title: 'Graph Webkit Dep',
    img: `${GRAPH_IMG_URL}/graph-webkit-dep.webp`,
    type: ChartTypeModel.Graph
  },
  {
    title: 'NPM Dependencies',
    img: `${GRAPH_IMG_URL}/graph-npm.webp`,
    type: ChartTypeModel.Graph
  }
]

export const treeChartImages = [
  {
    title: 'From Left to Right Tree',
    img: `${TREE_IMG_URL}/tree-basic.webp`,
    type: ChartTypeModel.Tree
  },
  {
    title: 'Multiple Trees',
    img: `${TREE_IMG_URL}/tree-legend.webp`,
    type: ChartTypeModel.Tree
  },
  {
    title: 'From Bottom to Top Tree',
    img: `${TREE_IMG_URL}/tree-orient-bottom-top.webp`,
    type: ChartTypeModel.Tree
  },
  {
    title: 'From Right to Left Tree',
    img: `${TREE_IMG_URL}/tree-orient-right-left.webp`,
    type: ChartTypeModel.Tree
  },
  {
    title: 'Tree with Polyline Edge',
    img: `${TREE_IMG_URL}/tree-polyline.webp`,
    type: ChartTypeModel.Tree
  },
  {
    title: 'Radial Tree',
    img: `${TREE_IMG_URL}/tree-radial.webp`,
    type: ChartTypeModel.Tree
  },
  {
    title: 'From Top to Bottom Tree',
    img: `${TREE_IMG_URL}/tree-vertical.webp`,
    type: ChartTypeModel.Tree
  }
]

export const treemapChartImages = [
  {
    title: 'Transition between Treemap and Sunburst',
    img: `${TREEMAP_IMG_URL}/treemap-sunburst-transition.webp`,
    type: ChartTypeModel.Treemap
  },
  {
    title: 'Disk Usage',
    img: `${TREEMAP_IMG_URL}/treemap-disk.webp`,
    type: ChartTypeModel.Treemap
  },
  {
    title: 'ECharts Option Query',
    img: `${TREEMAP_IMG_URL}/treemap-drill-down.webp`,
    type: ChartTypeModel.Treemap
  },
  {
    title: 'How $3.7 Trillion is Spent',
    img: `${TREEMAP_IMG_URL}/treemap-obama.webp`,
    type: ChartTypeModel.Treemap
  },
  {
    title: 'Show Parent Labels',
    img: `${TREEMAP_IMG_URL}/treemap-show-parent.webp`,
    type: ChartTypeModel.Treemap
  },
  {
    title: 'Basic Treemap',
    img: `${TREEMAP_IMG_URL}/treemap-simple.webp`,
    type: ChartTypeModel.Treemap
  },
  {
    title: 'Gradient Mapping',
    img: `${TREEMAP_IMG_URL}/treemap-visual.webp`,
    type: ChartTypeModel.Treemap
  }
]

export const sunburstChartImages = [
  {
    title: 'Basic Sunburst',
    img: `${SUNBURST_IMG_URL}/sunburst-simple.webp`,
    type: ChartTypeModel.Sunburst
  },
  {
    title: 'Sunburst with Rounded Corner',
    img: `${SUNBURST_IMG_URL}/sunburst-borderRadius.webp`,
    type: ChartTypeModel.Sunburst
  },
  {
    title: 'Sunburst Label Rotate',
    img: `${SUNBURST_IMG_URL}/sunburst-label-rotate.webp`,
    type: ChartTypeModel.Sunburst
  },
  {
    title: 'Monochrome Sunburst',
    img: `${SUNBURST_IMG_URL}/sunburst-monochrome.webp`,
    type: ChartTypeModel.Sunburst
  },
  {
    title: 'Sunburst VisualMap',
    img: `${SUNBURST_IMG_URL}/sunburst-visualMap.webp`,
    type: ChartTypeModel.Sunburst
  },
  {
    title: 'Drink Flavors',
    img: `${SUNBURST_IMG_URL}/sunburst-drink.webp`,
    type: ChartTypeModel.Sunburst
  },
  {
    title: 'Book Records',
    img: `${SUNBURST_IMG_URL}/sunburst-book.webp`,
    type: ChartTypeModel.Sunburst
  }
]

export const parallelChartImages = [
  {
    title: 'Basic Parallel',
    img: `${PARALLEL_IMG_URL}/parallel-simple.webp`,
    type: ChartTypeModel.Parallel
  },
  {
    title: 'Parallel Nutrients',
    img: `${PARALLEL_IMG_URL}/parallel-nutrients.webp`,
    type: ChartTypeModel.Parallel
  }
]

export const sankeyChartImages = [
  {
    title: 'Basic Sankey',
    img: `${SANKEY_IMG_URL}/sankey-simple.webp`,
    type: ChartTypeModel.Sankey
  },
  {
    title: 'Sankey Orient Vertical',
    img: `${SANKEY_IMG_URL}/sankey-vertical.webp`,
    type: ChartTypeModel.Sankey
  },
  {
    title: 'Specify ItemStyle for Each Node in Sankey',
    img: `${SANKEY_IMG_URL}/sankey-itemstyle.webp`,
    type: ChartTypeModel.Sankey
  },
  {
    title: 'Sankey with Levels Setting',
    img: `${SANKEY_IMG_URL}/sankey-levels.webp`,
    type: ChartTypeModel.Sankey
  },
  {
    title: 'Gradient Edge',
    img: `${SANKEY_IMG_URL}/sankey-energy.webp`,
    type: ChartTypeModel.Sankey
  },
  {
    title: 'Node Align Left in Sankey',
    img: `${SANKEY_IMG_URL}/sankey-nodeAlign-left.webp`,
    type: ChartTypeModel.Sankey
  },
  {
    title: 'Node Align Right in Sankey',
    img: `${SANKEY_IMG_URL}/sankey-nodeAlign-right.webp`,
    type: ChartTypeModel.Sankey
  }
]

export const funnelChartImages = [
  {
    title: 'Funnel Chart',
    img: `${FUNNEL_IMG_URL}/funnel.webp`,
    type: ChartTypeModel.Funnel
  },
  {
    title: 'Funnel Compare',
    img: `${FUNNEL_IMG_URL}/funnel-align.webp`,
    type: ChartTypeModel.Funnel
  },
  {
    title: 'Customized Funnel',
    img: `${FUNNEL_IMG_URL}/funnel-customize.webp`,
    type: ChartTypeModel.Funnel
  },
  {
    title: 'Multiple Funnels',
    img: `${FUNNEL_IMG_URL}/funnel-mutiple.webp`,
    type: ChartTypeModel.Funnel
  }
]

export const gaugeChartImages = [
  {
    title: 'Gauge Basic chart',
    img: `${GAUGE_IMG_URL}/gauge.webp`,
    type: ChartTypeModel.Gauge
  },
  {
    title: 'Simple Gauge',
    img: `${GAUGE_IMG_URL}/gauge-simple.webp`,
    type: ChartTypeModel.Gauge
  },
  {
    title: 'Speed Gauge',
    img: `${GAUGE_IMG_URL}/gauge-speed.webp`,
    type: ChartTypeModel.Gauge
  },
  {
    title: 'Progress Gauge',
    img: `${GAUGE_IMG_URL}/gauge-progress.webp`,
    type: ChartTypeModel.Gauge
  },
  {
    title: 'Stage Speed Gauge',
    img: `${GAUGE_IMG_URL}/gauge-stage.webp`,
    type: ChartTypeModel.Gauge
  },
  {
    title: 'Multi Title Gauge',
    img: `${GAUGE_IMG_URL}/gauge-multi-title.webp`,
    type: ChartTypeModel.Gauge
  },
  {
    title: 'Temperature Gauge chart',
    img: `${GAUGE_IMG_URL}/gauge-temperature.webp`,
    type: ChartTypeModel.Gauge
  },
  {
    title: 'Ring Gauge',
    img: `${GAUGE_IMG_URL}/gauge-ring.webp`,
    type: ChartTypeModel.Gauge
  },
  {
    title: 'Gauge Barometer chart',
    img: `${GAUGE_IMG_URL}/gauge-barometer.webp`,
    type: ChartTypeModel.Gauge
  },
  { title: 'Clock', img: `${GAUGE_IMG_URL}/gauge-clock.webp`, type: ChartTypeModel.Gauge }
  // {title: "Gauge Car", img: `${GAUGE_IMG_URL}/gauge-car.webp`, type: ChartTypeModel.Gauge}
]

export const pictorialBarChartImages = [
  {
    title: 'Transition between pictorialBar and Bar',
    img: `${PICTORIALBAR_IMG_URL}/pictorialBar-bar-transition.webp`,
    type: ChartTypeModel.PictorialBar
  },
  {
    title: 'Water Content',
    img: `${PICTORIALBAR_IMG_URL}/pictorialBar-body-fill.webp`,
    type: ChartTypeModel.PictorialBar
  },
  {
    title: 'Dotted bar',
    img: `${PICTORIALBAR_IMG_URL}/pictorialBar-dotted.webp`,
    type: ChartTypeModel.PictorialBar
  },
  {
    title: 'Expansion of forest',
    img: `${PICTORIALBAR_IMG_URL}/pictorialBar-forest.webp`,
    type: ChartTypeModel.PictorialBar
  },
  {
    title: 'Spirits',
    img: `${PICTORIALBAR_IMG_URL}/pictorialBar-spirit.webp`,
    type: ChartTypeModel.PictorialBar
  },
  {
    title: 'Vehicles',
    img: `${PICTORIALBAR_IMG_URL}/pictorialBar-vehicle.webp`,
    type: ChartTypeModel.PictorialBar
  },
  {
    title: 'Velocity of Christmas Reindeers',
    img: `${PICTORIALBAR_IMG_URL}/pictorialBar-velocity.webp`,
    type: ChartTypeModel.PictorialBar
  }
]

export const themeRiverChartImages = [
  {
    title: 'ThemeRiver',
    img: `${THEMERIVER_IMG_URL}/themeRiver-basic.webp`,
    type: ChartTypeModel.ThemeRiver
  },
  {
    title: 'ThemeRiver Lastfm',
    img: `${THEMERIVER_IMG_URL}/themeRiver-lastfm.webp`,
    type: ChartTypeModel.ThemeRiver
  }
]

export const calendarChartImages = [
  {
    title: 'Simple Calendar',
    img: `${CALENDAR_IMG_URL}/calendar-simple.webp`,
    type: ChartTypeModel.Calendar
  },
  {
    title: 'Calendar Heatmap',
    img: `${CALENDAR_IMG_URL}/calendar-heatmap.webp`,
    type: ChartTypeModel.Calendar
  },
  {
    title: 'Calendar Heatmap Vertical',
    img: `${CALENDAR_IMG_URL}/calendar-vertical.webp`,
    type: ChartTypeModel.Calendar
  },
  {
    title: 'Calendar Heatmap Horizontal',
    img: `${CALENDAR_IMG_URL}/calendar-horizontal.webp`,
    type: ChartTypeModel.Calendar
  },
  {
    title: 'Calendar Pie',
    img: `${CALENDAR_IMG_URL}/calendar-pie.webp`,
    type: ChartTypeModel.Calendar
  },
  {
    title: 'Simple Calendar',
    img: `${CALENDAR_IMG_URL}/calendar-charts.webp`,
    type: ChartTypeModel.Calendar
  },
  {
    title: 'Custom Calendar Icon',
    img: `${CALENDAR_IMG_URL}/custom-calendar-icon.webp`,
    type: ChartTypeModel.Calendar
  }
]

export const customChartImages = [
  {
    title: 'Empty',
    img: `${CUSTOM_IMG_URL}/custom-empty.webp`,
    type: ChartTypeModel.Custom
  },
  {
    title: 'Profit',
    img: `${CUSTOM_IMG_URL}/custom-profit.webp`,
    type: ChartTypeModel.Custom
  },
  {
    title: 'Error Scatter on Catesian',
    img: `${CUSTOM_IMG_URL}/custom-error-scatter.webp`,
    type: ChartTypeModel.Custom
  },
  {
    title: 'Custom Bar Trend',
    img: `${CUSTOM_IMG_URL}/custom-bar-trend.webp`,
    type: ChartTypeModel.Custom
  },
  {
    title: 'Custom Cartesian Polygon',
    img: `${CUSTOM_IMG_URL}/custom-cartesian-polygon.webp`,
    type: ChartTypeModel.Custom
  },
  {
    title: 'Error Bar on Catesian',
    img: `${CUSTOM_IMG_URL}/custom-error-bar.webp`,
    type: ChartTypeModel.Custom
  },
  {
    title: 'Profile',
    img: `${CUSTOM_IMG_URL}/custom-profile.webp`,
    type: ChartTypeModel.Custom
  },
  {
    title: 'Cycle Plot',
    img: `${CUSTOM_IMG_URL}/cycle-plot.webp`,
    type: ChartTypeModel.Custom
  },
  {
    title: 'Gantt Chart of Airport Flights',
    img: `${CUSTOM_IMG_URL}/custom-gantt-flight.webp`,
    type: ChartTypeModel.Custom
  },
  {
    title: 'Polar Heatmap',
    img: `${CUSTOM_IMG_URL}/custom-polar-heatmap.webp`,
    type: ChartTypeModel.Custom
  },
  {
    title: 'Flame graph',
    img: `${CUSTOM_IMG_URL}/flame-graph.webp`,
    type: ChartTypeModel.Custom
  },
  {
    title: 'Custom Calendar Icon',
    img: `${CUSTOM_IMG_URL}/custom-calendar-icon.webp`,
    type: ChartTypeModel.Custom
  },
  {
    title: 'Use custom series to draw wind vectors',
    img: `${CUSTOM_IMG_URL}/custom-wind.webp`,
    type: ChartTypeModel.Custom
  },
  {
    title: 'Transition of Parliament and Pie Chart',
    img: `${CUSTOM_IMG_URL}/pie-parliament-transition.webp`,
    type: ChartTypeModel.Custom
  },
  {
    title: 'Custom Spiral Race',
    img: `${CUSTOM_IMG_URL}/custom-spiral-race.webp`,
    type: ChartTypeModel.Custom
  }
]

export const datasetChartImages = [
  {
    title: 'Sort Data in Bar Chart',
    img: `${DATASET_IMG_URL}/data-transform-sort-bar.webp`,
    type: ChartTypeModel.Dataset
  },
  {
    title: 'Simple Encode',
    img: `${DATASET_IMG_URL}/dataset-encode0.webp`,
    type: ChartTypeModel.Dataset
  },
  {
    title: 'Partition Data to Pies',
    img: `${DATASET_IMG_URL}/data-transform-multiple-pie.webp`,
    type: ChartTypeModel.Dataset
  },
  {
    title: 'Default arrangement',
    img: `${DATASET_IMG_URL}/dataset-default.webp`,
    type: ChartTypeModel.Dataset
  },
  {
    title: 'Encode and Matrix',
    img: `${DATASET_IMG_URL}/dataset-encode1.webp`,
    type: ChartTypeModel.Dataset
  },
  {
    title: 'Share Dataset',
    img: `${DATASET_IMG_URL}/dataset-link.webp`,
    type: ChartTypeModel.Dataset
  },
  {
    title: 'Series Layout By Column or Row',
    img: `${DATASET_IMG_URL}/dataset-series-layout-by.webp`,
    type: ChartTypeModel.Dataset
  },
  {
    title: 'Simple Example of Dataset',
    img: `${DATASET_IMG_URL}/dataset-simple0.webp`,
    type: ChartTypeModel.Dataset
  },
  {
    title: 'Dataset in Object Array',
    img: `${DATASET_IMG_URL}/dataset-simple1.webp`,
    type: ChartTypeModel.Dataset
  }
]

export const dataZoomChartImages = [
  {
    title: 'Error Scatter on Catesian',
    img: `${DATAZOOM_IMG_URL}/custom-error-scatter.webp`,
    type: ChartTypeModel.DataZoom
  },
  {
    title: 'Large scale area chart',
    img: `${DATAZOOM_IMG_URL}/area-simple.webp`,
    type: ChartTypeModel.DataZoom
  },
  {
    title: 'Tooltip and DataZoom on Mobile',
    img: `${DATAZOOM_IMG_URL}/line-tooltip-touch.webp`,
    type: ChartTypeModel.DataZoom
  }
]

export const graphicChartImages = [
  {
    title: 'AppDev Charts',
    img: `${GRAPHIC_IMG_URL}/graphic-stroke-animation.webp`,
    type: ChartTypeModel.Graphic
  },
  {
    title: 'Customized Loading Animation',
    img: `${GRAPHIC_IMG_URL}/graphic-loading.webp`,
    type: ChartTypeModel.Graphic
  },
  {
    title: 'Custom Graphic Component',
    img: `${GRAPHIC_IMG_URL}/line-graphic.webp`,
    type: ChartTypeModel.Graphic
  },
  {
    title: 'Draggable Points',
    img: `${GRAPHIC_IMG_URL}/line-draggable.webp`,
    type: ChartTypeModel.Graphic
  }
]
