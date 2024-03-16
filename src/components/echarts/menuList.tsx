'use client'

import { useState } from 'react'
import { Listbox, ListboxItem } from '@nextui-org/react'
import { ChartTypeModel } from '@/model/echart'
import { chartMenuList } from '@/lib/chart_menu'
import ChartSVGIcon from './icons/ChartSVGIcon'

function MenuContainer({ children }: { children: React.ReactNode }) {
  return (
    <aside className='w-auto flex flex-col gap-2'>
      <div className='w-[200px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100 sticky top-0 inset-x-0'>
        {children}
      </div>
    </aside>
  )
}

type Props = {
  onSelectMenu: (type: ChartTypeModel) => void
}

function MenuList({ onSelectMenu }: Props) {
  const [selectedKeys, setSelectedKeys] = useState(new Set(['line']))

  return (
    <Listbox
      aria-label='Single selection example'
      variant='flat'
      disallowEmptySelection
      selectionMode='single'
      selectedKeys={selectedKeys}
      onSelectionChange={(key) => setSelectedKeys(new Set([Array.from(key).join('')]))}>
      {chartMenuList.map((item) => (
        <ListboxItem
          key={item.value}
          startContent={<ChartSVGIcon chartType={item.value} />}
          onClick={() => onSelectMenu(item.value)}>
          {item.name}
        </ListboxItem>
      ))}
    </Listbox>
  )
}

MenuContainer.MenuList = MenuList
export default MenuContainer
