import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ReCharts 이용해서 React Chart Component 만들기',
  description: '다양한 ReCharts 라이브러리 사용'
}

export default function ChartsLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return <div className='pt-4 w-full max-w-screen-2xl h-full mx-auto'>{children}</div>
}
