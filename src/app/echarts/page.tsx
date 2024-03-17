import ECharts from '@/components/echarts'

const fetchChartType = async () => {
  try {
    const response = await fetch(
      'https://cdn.jsdelivr.net/npm/echarts@5.5.0/types/dist/echarts.d.ts'
    )
    return await response.text()
  } catch (e) {
    console.error(e)
    return ''
  }
}

export default async function page() {
  const fetchEchartType = await fetchChartType()
  return (
    <div className='flex px-4'>
      <ECharts fetchEchartType={fetchEchartType} />
    </div>
  )
}
