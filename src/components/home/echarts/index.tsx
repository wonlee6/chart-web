'use client'

import echartLogo from '../../../../public/echart-logo.png'
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Divider,
  Link
} from '@nextui-org/react'
import { FaGithub } from 'react-icons/fa6'
import EchartLogo from './echartLogo'

export default function EChartCard() {
  return (
    <Card className='py-4 h-[40vh]' isHoverable isFooterBlurred>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start relative'>
        <div className='z-20'>
          <Link href='https://echarts.apache.org/en/index.html' target='_blank'>
            <Image
              className='object-cover rounded-xl'
              src={echartLogo.src}
              alt='Card background'
              width={270}
            />
          </Link>
          <h4 className='mt-3 font-semibold text-medium'>
            An Open Source JavaScript Visualization Library
          </h4>
          <h4 className='mt-3 font-semibold text-medium'>
            A Declarative Framework for Rapid Construction of Web-based Visualization
          </h4>
        </div>
        <div className='absolute top-10 right-5 z-10'>
          <EchartLogo />
        </div>
      </CardHeader>
      <Divider className='my-4' />
      <CardBody className='overflow-visible pt-2 z-20'>
        <div className='max-w-xs w-full'>
          <h2 className='pl-4 font-extrabold text-2xl'>Features</h2>
          <div className='mt-4 pl-1 flex flex-col items-baseline justify-center'>
            <p className='mb-1 font-semibold border-b-1 max-sm:bg-gray-400/10 rounded-md border-none'>
              Flexible Chart Types
            </p>
            <p className='mb-1 font-semibold border-b-1 max-sm:bg-gray-400/10 rounded-md border-none'>
              Powerful Rendering Engine
            </p>
            <p className='mb-1 font-semibold border-b-1 max-sm:bg-gray-400/10 rounded-md border-none'>
              Professional Data Analysis
            </p>
            <p className='mb-1 font-semibold border-b-1 max-sm:bg-gray-400/10 rounded-md border-none'>
              Elegant Visual Design
            </p>
            <p className='mb-1 font-semibold border-b-1 max-sm:bg-gray-400/10 rounded-md border-none'>
              A Healthy Community
            </p>
            <p className='font-semibold border-b-1 max-sm:bg-gray-400/10 rounded-md border-none'>
              Accessibility Friendly
            </p>
          </div>
        </div>
      </CardBody>
      <CardFooter className='justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-30'>
        <Link href='https://github.com/nextui-org/nextui' target='_blank'>
          Visit source code on GitHub.
          <FaGithub style={{ fontSize: '1.5rem', color: 'black' }} />
        </Link>
      </CardFooter>
    </Card>
  )
}
