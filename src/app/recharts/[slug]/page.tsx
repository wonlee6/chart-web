import ChartViewer from '@/components/recharts/chart'
import CodeViewer from '@/components/recharts/code'

export default function page() {
  return (
    <div className='flex h-full w-full'>
      <div className='w-1/2'>
        <ChartViewer />
      </div>
      <div className='w-1/2'>
        <CodeViewer />
      </div>
    </div>
  )
}
