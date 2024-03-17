'use client'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable-panel-group'
import useDebounce from '@/hooks/useDebounce'
import { useResizeObserver } from '@/hooks/useResizeObserver'

export default function MonacoEditorContainer({
  children
}: {
  children: React.ReactNode
}) {
  const ref = useResizeObserver<HTMLDivElement>((entry) => {
    const { width, height } = entry.contentRect
    handleResize(width, height)
  })

  const handleResize = useDebounce((width: number, height: number) => {
    const nod = `
      const chartDom = document.getElementById('chart');
      const chartInstance = echarts.getInstanceByDom(chartDom)
      chartInstance?.resize({
        width: ${width},
        height: ${height}
      })
      `
    Function(nod)()
  }, 200)

  return (
    <ResizablePanelGroup direction='horizontal'>
      <ResizablePanel
        className='mr-2 border-small rounded-small border-default-200 dark:border-default-100'
        defaultSize={40}>
        {children}
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel
        className='ml-2 p-2 border-small rounded-small border-default-200 dark:border-default-100'
        defaultSize={60}>
        <div ref={ref} id='chart' className='w-full h-full' />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
