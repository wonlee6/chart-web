'use client'

import { useLayoutEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button
} from '@nextui-org/react'
import moon from '../../../public/moon.svg'
import sun from '../../../public/sun.svg'
import { usePathname } from 'next/navigation'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathName = usePathname()

  const { theme, setTheme } = useTheme()

  const handleTheme = (mode: 'light' | 'dark') => {
    setTheme(mode)
    if (mode === 'dark') {
      localStorage.setItem('theme', 'dark')
      return
    }
    localStorage.setItem('theme', 'light')
  }

  useLayoutEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setTheme('dark')
      return
    }
    setTheme('light')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const menuItems = ['Home', 'ECharts', 'ReCharts']

  return (
    <Navbar
      isBlurred
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      className='backdrop-blur-sm'>
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>

      <NavbarContent className='pr-3 sm:hidden' justify='center'>
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className='font-bold text-inherit'>Home</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
        {/* <NavbarBrand>
          <p className='font-bold text-inherit'>Brand</p>
        </NavbarBrand> */}
        <NavbarItem isActive={pathName === '/'}>
          <Button
            as={Link}
            variant='light'
            href='/'
            color={pathName === '/' ? 'primary' : 'default'}>
            Home
          </Button>
        </NavbarItem>
        <NavbarItem isActive={pathName === '/echarts'}>
          <Button
            as={Link}
            variant='light'
            href='/echarts'
            color={pathName === '/echarts' ? 'primary' : 'default'}>
            ECharts
          </Button>
        </NavbarItem>
        <NavbarItem isActive={pathName.includes('recharts')}>
          <Button
            as={Link}
            variant='light'
            href='/recharts/SimpleLineChart'
            color={pathName.includes('recharts') ? 'primary' : 'default'}>
            Recharts
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem className='flex'>
          {theme === 'dark' ? (
            <Button
              isIconOnly
              variant='light'
              aria-label='light'
              onClick={() => handleTheme('light')}>
              <Image src={sun} alt='sun' width={40} priority />
            </Button>
          ) : (
            <Button
              isIconOnly
              variant='light'
              aria-label='dark'
              onClick={() => handleTheme('dark')}>
              <Image src={moon} alt='moon' width={30} priority />
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item}>
            <Link className='w-full' color='primary' href={item.toLowerCase()}>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
