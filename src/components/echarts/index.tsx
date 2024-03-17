'use client'

import { useCallback, useMemo, useRef, useState } from 'react'
import { echartHelper } from '@/helper/echartHelper'
import { ChartPrivewList, ChartTypeModel } from '@/model/echart'
import MenuContainer from './menuList'
import PreviewListContainer from './previewList'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from '@nextui-org/react'
import MonacoEditor from './modal/monacoEditor'
import MonacoEditorContainer from './modal'

export default function ECharts({ fetchEchartType }: { fetchEchartType: string }) {
  const [selectedMenu, setSelectedMenu] = useState<ChartTypeModel>(ChartTypeModel.Line)
  const [selectedChart, setSelectedChart] = useState<ChartPrivewList | null>(null)
  const [monacoValue, setMonacoValue] = useState<string>('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const echartJsonData = useRef(null)
  const handleSelectChart = useCallback(
    async (chart: ChartPrivewList) => {
      const chartCode = await echartHelper.getChartCode(chart.img, chart.type)
      const jsonData = await echartHelper.getChartJsonData(chart.img, chart.type)
      echartJsonData.current = jsonData
      setMonacoValue(chartCode)
      setSelectedChart(chart)
      onOpen()
    },
    [onOpen]
  )

  const handleSelectMenu = useCallback(
    (type: ChartTypeModel) => setSelectedMenu(type),
    []
  )

  const filteredChartList = useMemo(() => {
    return echartHelper.getChartImgList(selectedMenu)
  }, [selectedMenu])

  return (
    <>
      <MenuContainer>
        <MenuContainer.MenuList onSelectMenu={handleSelectMenu} />
      </MenuContainer>
      <PreviewListContainer>
        <PreviewListContainer.PreviewList
          previewList={filteredChartList}
          onSelectChart={handleSelectChart}
        />
      </PreviewListContainer>
      <Modal size='full' isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) =>
            selectedChart && monacoValue ? (
              <>
                <ModalHeader className='flex flex-col gap-1'>
                  {selectedChart.title}
                </ModalHeader>
                <ModalBody>
                  <MonacoEditorContainer>
                    <MonacoEditor
                      fetchData={echartJsonData.current}
                      value={monacoValue}
                      fetchType={fetchEchartType}
                    />
                  </MonacoEditorContainer>
                </ModalBody>
                <ModalFooter>
                  <Button color='danger' variant='flat' onPress={onClose}>
                    Close
                  </Button>
                  {/* <Button color='primary' onPress={onClose}>
                    Action
                  </Button> */}
                </ModalFooter>
              </>
            ) : null
          }
        </ModalContent>
      </Modal>
    </>
  )
}
