'use client'

import { Card, CardBody, CardFooter, CardHeader, Divider, Link } from '@nextui-org/react'
import { FaGithub } from 'react-icons/fa6'
import { SlPuzzle, SlLayers } from 'react-icons/sl'
import { AiOutlineThunderbolt } from 'react-icons/ai'

export default function ReChartCard() {
  return (
    <Card key='recharts' className='py-4 h-1/2' isHoverable isFooterBlurred>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <div className='z-20'>
          <Link href='https://recharts.org/en-US' target='_blank'>
            <p className='text-[#22b5bf] text-5xl'>ReCharts</p>
          </Link>
          <h4 className='font-semibold text-medium'>
            A composable charting library built on React components
          </h4>
        </div>
      </CardHeader>
      <Divider className='my-2' />
      <CardBody className='overflow-visible z-20'>
        <div className='mb-5 h-full w-full'>
          <h2 className='pl-4 font-extrabold text-2xl text-center'>Features</h2>
          <div className='mt-1 px-1 pb-4 w-full h-full grid grid-cols-3 gap-4'>
            <div className='p-2 flex flex-col items-center'>
              <SlPuzzle style={{ fontSize: '3rem' }} />
              <h6 className='mb-1 font-semibold'>Composable</h6>
              <span className='w-full text-center max-sm:truncate'>
                Quickly build your charts with decoupled, reusable React components.
              </span>
            </div>
            <div className='p-2 flex flex-col items-center'>
              <SlLayers style={{ fontSize: '3rem' }} />
              <h6 className='mb-1 font-semibold'>Reliable</h6>
              <span className='w-full text-center max-sm:truncate'>
                Built on top of SVG elements with a lightweight dependency on D3
                submodules.
              </span>
            </div>
            <div className='p-2 flex flex-col items-center'>
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
      <CardFooter className='justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-30'>
        <Link href='https://github.com/recharts/recharts' target='_blank'>
          Visit source code on GitHub.
          <FaGithub style={{ fontSize: '1.5rem', color: 'black' }} />
        </Link>
      </CardFooter>
    </Card>
  )
}
