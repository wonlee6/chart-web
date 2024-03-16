'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export default function Provider({ children }: { children: React.ReactNode }) {
  const [isMount, setIsMount] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsMount(true)
  }, [])

  if (!isMount) {
    return null
  }

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute='class' defaultTheme='dark'>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
