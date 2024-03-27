'use client'

import { Card, CardBody, CardFooter, CardHeader, Divider, Link } from '@nextui-org/react'
import { FaGithub } from 'react-icons/fa6'
import { SlPuzzle, SlLayers } from 'react-icons/sl'
import { AiOutlineThunderbolt } from 'react-icons/ai'

export default function ReChartCard() {
  return (
    <Card key='recharts' className='h-1/2 py-4' isHoverable isFooterBlurred>
      <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
        <div className='z-20'>
          <Link href='https://recharts.org/en-US' target='_blank'>
            <p className='text-5xl text-[#22b5bf]'>ReCharts</p>
          </Link>
          <h4 className='text-medium font-semibold'>
            A composable charting library built on React components
          </h4>
        </div>
      </CardHeader>
      <Divider className='my-2' />
      <CardBody className='z-20 overflow-visible'>
        <div className='mb-5 size-full'>
          <h2 className='pl-4 text-center text-2xl font-extrabold'>Features</h2>
          <div className='mt-1 grid size-full grid-cols-3 gap-4 px-1 pb-4'>
            <div className='flex flex-col items-center p-2'>
              <SlPuzzle style={{ fontSize: '3rem' }} />
              <h6 className='mb-1 font-semibold'>Composable</h6>
              <span className='w-full text-center max-sm:truncate'>
                Quickly build your charts with decoupled, reusable React components.
              </span>
            </div>
            <div className='flex flex-col items-center p-2'>
              <SlLayers style={{ fontSize: '3rem' }} />
              <h6 className='mb-1 font-semibold'>Reliable</h6>
              <span className='w-full text-center max-sm:truncate'>
                Built on top of SVG elements with a lightweight dependency on D3
                submodules.
              </span>
            </div>
            <div className='flex flex-col items-center p-2'>
              <AiOutlineThunderbolt style={{ fontSize: '3rem' }} />
              <h6 className='mb-1 font-semibold'>Powerful</h6>
              <span className='w-full text-center max-sm:truncate'>
                Customize your chart by tweaking component props and passing in custom
                components.
              </span>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className='absolute bottom-1 z-30 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10'>
        <Link href='https://github.com/recharts/recharts' target='_blank'>
          Visit source code on GitHub.
          <FaGithub style={{ fontSize: '1.5rem', color: 'black' }} />
        </Link>
      </CardFooter>
    </Card>
  )
}
