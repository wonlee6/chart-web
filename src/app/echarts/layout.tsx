import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Echarts 이용해서 React Chart Component 만들기',
  description: 'React에서 Monaco Editor Echarts 라이브러리 사용'
}

export default function ChartsLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className='mx-auto size-full max-w-screen-2xl pt-4'>
      {children}
      <Script
        src='https://cdn.jsdelivr.net/npm/echarts@5.5.0/dist/echarts.min.js'
        async
      />
    </div>
  )
}
