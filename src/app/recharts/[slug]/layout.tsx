import ReCharts from '@/components/recharts/menu'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ReCharts 이용해서 React Chart Component 만들기',
  description: '다양한 ReCharts 라이브러리 사용'
}

export default function ReChartsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex size-full pt-4'>
      <aside className='h-full w-1/4 flex-auto overflow-y-auto rounded-small border-small border-default-200 px-1 py-2 dark:border-default-100'>
        <ReCharts />
      </aside>
      <section className='w-3/4'>{children}</section>
    </div>
  )
}
