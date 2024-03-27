'use client'

import NextImage from 'next/image'
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
import { GrLineChart } from 'react-icons/gr'
import { GoPaperAirplane } from 'react-icons/go'
import { SiAzuredataexplorer } from 'react-icons/si'
import {
  MdOutlineDesignServices,
  MdOutlineHealthAndSafety,
  MdOutlineSwitchAccessShortcut
} from 'react-icons/md'

export default function EChartCard() {
  return (
    <Card key='echarts' className='h-1/2 py-4' isHoverable isFooterBlurred>
      <CardHeader className='relative flex-col items-start px-4 pb-0 pt-2'>
        <div className='z-20 flex w-full justify-around max-md:flex-wrap'>
          <Link href='https://echarts.apache.org/en/index.html' target='_blank'>
            <Image
              as={NextImage}
              src={echartLogo.src}
              alt='Card background'
              width={270}
              height={270}
              priority
            />
          </Link>
          <div>
            <h4 className='text-medium font-semibold'>
              An Open Source JavaScript Visualization Library
            </h4>
            <h4 className='text-medium font-semibold'>
              A Declarative Framework for Rapid Construction of Web-based Visualization
            </h4>
          </div>
        </div>
        <div className='absolute right-5 top-3 z-10'>
          <EchartLogo />
        </div>
      </CardHeader>
      <Divider className='my-2' />
      <CardBody className='z-20 overflow-visible max-sm:overflow-y-auto'>
        <div className='size-full'>
          <h2 className='pl-4 text-center text-2xl font-extrabold'>Features</h2>
          <div className='grid h-[calc(100%_-_3rem)] grid-cols-3 gap-2'>
            <div className='flex flex-col items-center'>
              <GrLineChart style={{ fontSize: '2rem' }} />
              <h6 className='text-center font-semibold'>Flexible Chart Types</h6>
              <p
                className='w-full truncate'
                title='Apache ECharts provides more than 20 chart types available out of the box,
                along with a dozen components, and each of them can be arbitrarily
                combined to use.'>
                Apache ECharts provides more than 20 chart types available out of the box,
                along with a dozen components, and each of them can be arbitrarily
                combined to use.
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <GoPaperAirplane style={{ fontSize: '2rem' }} />
              <h6 className='text-center font-semibold'>Powerful Rendering Engine</h6>
              <p
                className='w-full truncate'
                title='Easily switch between Canvas and SVG rendering. Progressive rendering and
                stream loading make it possible to render 10 million data in realtime.'>
                Easily switch between Canvas and SVG rendering. Progressive rendering and
                stream loading make it possible to render 10 million data in realtime.
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <SiAzuredataexplorer style={{ fontSize: '2rem' }} />
              <h6 className='text-center font-semibold'>Professional Data Analysis</h6>
              <p
                className='w-full truncate'
                title='Manage data through datasets, which support data transforms like
                filtering, clustering, and regression to help analyze multi-dimensional
                analysis of the same data.'>
                Manage data through datasets, which support data transforms like
                filtering, clustering, and regression to help analyze multi-dimensional
                analysis of the same data.
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <MdOutlineDesignServices style={{ fontSize: '2rem' }} />
              <h6 className='text-center font-semibold'>Elegant Visual Design</h6>
              <p
                className='w-full truncate'
                title='The default design follows visualization principles, supports responsive
                design. Flexible configurations make it easy to customize.'>
                The default design follows visualization principles, supports responsive
                design. Flexible configurations make it easy to customize.
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <MdOutlineHealthAndSafety style={{ fontSize: '2rem' }} />
              <h6 className='text-center font-semibold'>A Healthy Community</h6>
              <p
                className='w-full truncate'
                title='The active open source community ensures the healthy development of the
                project and contributes a wealth of third-party extensions.'>
                The active open source community ensures the healthy development of the
                project and contributes a wealth of third-party extensions.
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <MdOutlineSwitchAccessShortcut style={{ fontSize: '2rem' }} />
              <h6 className='text-center font-semibold'>Accessibility-Friendly</h6>
              <p
                className='w-full truncate'
                title='Automatically generated chart descriptions and decal patterns help users
                with disabilities understand the content and the stories behind the
                charts.'>
                Automatically generated chart descriptions and decal patterns help users
                with disabilities understand the content and the stories behind the
                charts.
              </p>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className='absolute bottom-1 z-30 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10'>
        <Link href='https://github.com/apache/echarts' target='_blank'>
          Visit source code on GitHub.
          <FaGithub style={{ fontSize: '1.5rem', color: 'black' }} />
        </Link>
      </CardFooter>
    </Card>
  )
}
