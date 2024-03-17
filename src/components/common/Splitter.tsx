import React from 'react'

function SplitterMain({ children }: { children: React.ReactNode }) {
  const gutterRef = React.useRef<HTMLDivElement | null>(null)
  const parentRef = React.useRef<HTMLDivElement | null>(null)

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()

    const shiftX = event.clientX - gutterRef.current!.getBoundingClientRect().left

    function onMouseMove(this: Document, ev: MouseEvent) {
      let newLeft = ev.clientX - shiftX - parentRef.current!.getBoundingClientRect().left
      if (newLeft < 300) {
        newLeft = 300
      }

      const rightEdge = parentRef.current!.offsetWidth - gutterRef.current!.offsetWidth

      if (newLeft > rightEdge - 300) {
        newLeft = rightEdge - 300
      }

      const leftPanel = document.querySelector(
        '#splitter-left-panel'
      ) as HTMLDivElement | null
      if (leftPanel) {
        leftPanel.style.width = newLeft.toFixed(0) + 'px'
      }

      const rightPanel = document.querySelector(
        '#splitter-right-panel'
      ) as HTMLDivElement | null
      if (rightPanel) {
        rightPanel.style.width =
          (parentRef.current!.offsetWidth - newLeft).toFixed(0) + 'px'
      }
    }

    const onMouseUp = () => {
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mousemove', onMouseMove)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  const leftPanelComponent = React.Children.toArray(children)[0]
  const rightPanelComponent = React.Children.toArray(children)[1]

  return (
    <div
      ref={parentRef}
      className='flex w-full h-full'
      style={{
        border: '1px solid #dee2e6',
        backgroundColor: '#ffffff',
        borderRadius: '6px',
        color: '#495057'
      }}>
      {leftPanelComponent}
      <div
        ref={gutterRef}
        onMouseDown={handleMouseDown}
        onDragStart={() => false}
        className='h-full'
        style={{
          width: '8px',
          cursor: 'col-resize',
          backgroundColor: '#f8f9fa',
          transition: 'background-color 0.2s, color 0.2s, box-shadow 0.2s',
          //
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 0,
          flexShrink: 0
        }}
        role='presentation'>
        <div
          style={{
            height: '24px',
            width: '100%',
            backgroundColor: '#b2cde5'
          }}
        />
      </div>
      {rightPanelComponent}
    </div>
  )
}

type Panel = {
  children: React.ReactNode
  style?: React.CSSProperties
}

function LeftPanel(props: Panel) {
  const { style, children } = props
  return (
    <div
      id='splitter-left-panel'
      className='h-full overflow-hidden'
      style={{ width: '50%', ...style }}>
      {children}
    </div>
  )
}

function RightPanel(props: Panel) {
  const { style, children } = props
  return (
    <div
      id='splitter-left-panel'
      className='h-full overflow-hidden'
      style={{ width: '50%', ...style }}>
      {children}
    </div>
  )
}

export const Splitter = Object.assign(SplitterMain, {
  Left: LeftPanel,
  Right: RightPanel
})
