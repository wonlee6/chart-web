'use client'

import EChartCard from './echarts'
import ReChartCard from './recharts'

export default function HomePage() {
  return (
    <div className='w-full h-full py-4 flex flex-col gap-4'>
      <EChartCard />
      <ReChartCard />
    </div>
  )
}
