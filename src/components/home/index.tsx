'use client'

import EChartCard from './echarts'
import ReChartCard from './recharts'

export default function HomePage() {
  return (
    <div className='flex size-full flex-col gap-4 py-4'>
      <EChartCard />
      <ReChartCard />
    </div>
  )
}
