'use client'

import { useCallback, useMemo, useState } from 'react'
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

export default function ECharts() {
  const [selectedMenu, setSelectedMenu] = useState<ChartTypeModel>(ChartTypeModel.Line)
  const [selectedChart, setSelectedChart] = useState<ChartPrivewList | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSelectChart = useCallback((chart: ChartPrivewList) => {
    setSelectedChart(chart)
    onOpen()
  }, [])

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
      <Modal size='5xl' isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>Modal Title</ModalHeader>
              <ModalBody>
                <p>
                  {selectedChart?.title}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
                  risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
                  risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
                  risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
                  risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat
                  elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum
                  quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor
                  eiusmod.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>
                <Button color='primary' onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
