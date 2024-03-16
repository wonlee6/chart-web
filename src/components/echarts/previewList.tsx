'use client'

import { ChartPrivewList } from '@/model/echart'
import { Image } from '@nextui-org/react'

function PreviewListContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className='w-full border-small border-default-200 border-spacing-1 rounded-md dark:border-default-100'>
      <div className='flex justify-start flex-wrap gap-3'>{children}</div>
    </section>
  )
}

function PreviewList({
  previewList,
  onSelectChart
}: {
  previewList: ChartPrivewList[]
  onSelectChart: (chart: ChartPrivewList) => void
}) {
  return (
    <>
      {previewList.map((item, index) => (
        <div
          key={item.title + String(index)}
          className='p-4 d-flex flex-column'
          style={{ width: '19rem' }}>
          <div className='cursor-pointer shadow-md hover:scale-110 transition-all'>
            <Image
              onClick={() => onSelectChart(item)}
              className='object-cover'
              src={item.img}
              alt={item.title}
              width={400}
              height={400}
              loading='lazy'
            />
          </div>
          <div className='mt-1 flex justify-center truncate'>
            <span title={item.title} style={{ fontSize: '1.2rem' }}>
              {item.title}
            </span>
          </div>
        </div>
      ))}
    </>
  )
}

PreviewListContainer.PreviewList = PreviewList
export default PreviewListContainer
