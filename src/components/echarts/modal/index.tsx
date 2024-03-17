'use client'

import React, { useCallback, useEffect, useRef } from 'react'
import { Splitter } from '@/components/common/Splitter'
import * as echarts from 'echarts'
import useDebounce from '@/hooks/useDebounce'

export default function MonacoEditorContainer({
  children
}: {
  children: React.ReactNode
}) {
  const chartContainerRef = useRef<HTMLDivElement | null>(null)
  const resizeObserverRef = useRef(
    new ResizeObserver((entries) => {
      if (!Array.isArray(entries)) return
      const { width, height } = entries[0].contentRect
      handleResizeChart(width, height)
    })
  )

  const handleResizeChart = useDebounce(
    useCallback((width: number, height: number) => {
      if (!chartContainerRef.current) return
      const eChartsInstance = echarts.getInstanceByDom(chartContainerRef.current)

      if (eChartsInstance) {
        eChartsInstance.resize({
          width,
          height
        })
      }
    }, []),
    200
  )

  useEffect(() => {
    const ref = resizeObserverRef.current
    const cref = chartContainerRef.current
    if (cref) {
      ref.observe(cref)
    }
    return () => {
      if (cref) {
        ref.unobserve(cref)
      }
    }
  }, [])

  return (
    <Splitter>
      <Splitter.Left>{children}</Splitter.Left>
      <Splitter.Right>
        <div ref={chartContainerRef} id='chart' className='w-full h-full' />
      </Splitter.Right>
    </Splitter>
  )
}
