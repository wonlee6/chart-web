'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Accordion, AccordionItem, Listbox, ListboxItem } from '@nextui-org/react'
import { rechartHelper } from '@/helper/rechartHelper'

export default function ReCharts() {
  const router = useRouter()
  const pathName = usePathname()
  const [selectedKeys, setSelectedKeys] = useState(
    new Set([pathName.split('/').at(-1) ?? ''])
  )

  return (
    <Accordion variant='splitted' selectionMode='multiple' selectedKeys='all' isCompact>
      {rechartHelper.chartMenuList().map((item) => (
        <AccordionItem key={item.type} aria-label={item.name} title={item.name}>
          {item.children.map((v) => (
            <Listbox
              key={v.name}
              aria-label='select rechart'
              variant='flat'
              disallowEmptySelection
              selectionMode='single'
              selectedKeys={selectedKeys}
              onSelectionChange={(key) =>
                setSelectedKeys(new Set([Array.from(key).join('')]))
              }>
              <ListboxItem
                key={v.name}
                onClick={() => router.push(`/recharts/${v.name}`)}>
                {v.name}
              </ListboxItem>
            </Listbox>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  )
}
