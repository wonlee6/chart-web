'use client'
import { chartMenuList } from '@/lib/chart_menu'
import { Listbox, ListboxItem } from '@nextui-org/react'
import { useMemo, useState } from 'react'
import ChartSVGIcon from './icons/ChartSVGIcon'

export default function ECharts() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(['text']))

  return (
    <div className='flex px-4'>
      <aside className='w-auto flex flex-col gap-2 sticky'>
        <div className='w-[200px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100'>
          <Listbox
            aria-label='Single selection example'
            variant='flat'
            disallowEmptySelection
            selectionMode='single'
            selectedKeys={selectedKeys}
            onSelectionChange={(key) =>
              setSelectedKeys(new Set([Array.from(key).join('')]))
            }>
            {chartMenuList.map((item) => (
              <ListboxItem
                key={item.value}
                startContent={<ChartSVGIcon chartType={item.value} />}>
                {item.name}
              </ListboxItem>
            ))}
          </Listbox>
        </div>
      </aside>
      <section className='w-full border border-spacing-1 rounded-md'></section>
    </div>
  )
}
