import {
  Modal,
  Box,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

const ItemModal = ({ isOpen, onClose, item_data }) => {
  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)
  const [diffY, setDiffY] = useState(null)
  const [diffM, setDiffM] = useState(null)
  const [diffD, setDiffD] = useState(null)
  const [diffH, setDiffH] = useState(null)
  const [inputs, setInputs] = useState({
    years: null,
    months: null,
    days: null,
    hours: null
  })
  const { years, months, days, hours } = inputs

  useEffect(() => {
    if (typeof window !== 'object') return
    if (!item_data) return

    htmlContent(item_data)

    const a = new Date(item_data['start_time'])
    const b = new Date(item_data['end_time'])

    function interval(date1, date2) {
      if (date1 > date2) {
        // swap
        var result = interval(date2, date1)
        result.years = -result.years
        result.months = -result.months
        result.days = -result.days
        result.hours = -result.hours
        return result
      }
      result = {
        years: date2.getYear() - date1.getYear(),
        months: date2.getMonth() - date1.getMonth(),
        days: date2.getDate() - date1.getDate(),
        hours: date2.getHours() - date1.getHours()
      }
      if (result.hours < 0) {
        result.days--
        result.hours += 24
      }
      if (result.days < 0) {
        result.months--
        // days = days left in date1's month,
        //   plus days that have passed in date2's month
        var copy1 = new Date(date1.getTime())
        copy1.setDate(32)
        result.days = 32 - date1.getDate() - copy1.getDate() + date2.getDate()
      }
      if (result.months < 0) {
        result.years--
        result.months += 12
      }
      setInputs(result)
      return result
    }
    setStart(a.toLocaleString())
    setEnd(b.toLocaleString())
    interval(a, new Date())
  }, [item_data])

  const htmlContent = item_data => {
    return { __html: item_data['content'] }
  }

  useEffect(() => {
    if (!item_data) return
  }, [item_data])
  console.log(inputs)
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          {item_data && (
            <>
              <Duration>
                <Box>{start}</Box>
                <Box>~</Box>
                <Box>{end}</Box>

                <ResTime>
                  {inputs['years'] != 0 && <Box>{inputs['years']}년</Box>}
                  {inputs['months'] != 0 && <Box>{inputs['months']}개월</Box>}
                  {inputs['days'] != 0 && <Box>{inputs['days']}일</Box>}
                  {inputs['hours'] != 0 && <Box>{inputs['hours']}시간</Box>}
                  남음!
                </ResTime>
              </Duration>
              <ModalBody>
                <div dangerouslySetInnerHTML={htmlContent(item_data)}></div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
export default ItemModal

const Duration = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
const ResTime = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: red;
`
