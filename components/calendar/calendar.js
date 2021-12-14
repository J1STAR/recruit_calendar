import { Link, Box, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import styled from '@emotion/styled'
import Start from './start'
import End from './end'
import ItemModal from './item-modal'
const Calendar = ({ data, date, setDate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [item, setItem] = useState(null)
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const lastMonthResidual = [
    ...Array(
      new Date(date.getFullYear(), date.getMonth() - 1, 0).getDate()
    ).keys()
  ]
    .slice(-firstDay.getDay() - 1, -1)
    .map(i => i + 1)

  const nextMonthResidual = [
    ...Array(
      new Date(date.getFullYear(), date.getMonth() + 2, 0).getDate()
    ).keys()
  ]
    .slice(0, 7 - lastDay.getDay() - 1)
    .map(i => i + 1)

  const handleMonthPlus = () => {
    setDate(new Date(date.setMonth(date.getMonth() + 1)))
  }
  const handleMonthMinus = () => {
    setDate(new Date(date.setMonth(date.getMonth() - 1)))
  }

  const handleItemModal = e => {
    const item_data = data.filter(item => item.id == e.target.id)[0]
    setItem(item_data)
    onOpen()
  }

  return (
    <Wrapper>
      <ItemModal isOpen={isOpen} onClose={onClose} item_data={item} />
      <MonthController>
        <DateArrow onClick={handleMonthMinus}>
          <span>{'<'}</span>
        </DateArrow>
        <DateViewer>
          {date.toLocaleString('default', { year: 'numeric', month: 'long' })}
        </DateViewer>
        <DateArrow onClick={handleMonthPlus}>
          <span>{'>'}</span>
        </DateArrow>
      </MonthController>

      <GridWrapper>
        <GridContainer>
          {['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'].map(day => (
            <GridItemWeek key={day}>{day}</GridItemWeek>
          ))}
        </GridContainer>
        <GridContainer>
          {lastMonthResidual.map(day => (
            <GridItemContainer key={day}>
              <Box
                justifyContent="center"
                alignItems="center"
                display="flex"
                bgColor="lightgrey"
              >
                {day}
              </Box>
              {/* filter daily data */}
              {data &&
                data
                  .filter(
                    item =>
                      item.start_time.slice(0, 4) == date.getFullYear() &&
                      item.start_time.slice(5, 7) == date.getMonth() &&
                      item.start_time.slice(8, 10) == day
                  )
                  .map(item => (
                    <Box key={item.id} id={item.id} onClick={handleItemModal}>
                      <Start />
                      {item.name}
                    </Box>
                  ))}
              {data &&
                data
                  .filter(
                    item =>
                      item.end_time.slice(0, 4) == date.getFullYear() &&
                      item.end_time.slice(5, 7) == date.getMonth() &&
                      item.end_time.slice(8, 10) == day
                  )
                  .map(item => (
                    <Box key={item.id} id={item.id} onClick={handleItemModal}>
                      <End />

                      {item.name}
                    </Box>
                  ))}
            </GridItemContainer>
          ))}
          {[...Array(lastDay.getDate())].map((_, i) => (
            <span key={i}>
              <GridItemContainer>
                <Box
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  bgColor="lightgrey"
                >
                  {i + 1}
                </Box>
                {/* filter daily data */}
                {data &&
                  data
                    .filter(
                      item =>
                        item.start_time.slice(0, 4) == date.getFullYear() &&
                        item.start_time.slice(5, 7) == date.getMonth() + 1 &&
                        item.start_time.slice(8, 10) == i + 1
                    )
                    .map(item => (
                      <Box key={item.id} id={item.id} onClick={handleItemModal}>
                        <Start />
                        {item.name}
                      </Box>
                    ))}
                {data &&
                  data
                    .filter(
                      item =>
                        item.end_time.slice(0, 4) == date.getFullYear() &&
                        item.end_time.slice(5, 7) == date.getMonth() + 1 &&
                        item.end_time.slice(8, 10) == i + 1
                    )
                    .map(item => (
                      <Box key={item.id} id={item.id} onClick={handleItemModal}>
                        <End />

                        {item.name}
                      </Box>
                    ))}
              </GridItemContainer>
            </span>
          ))}
          {nextMonthResidual.map(day => (
            <GridItemContainer key={day}>
              <Box
                justifyContent="center"
                alignItems="center"
                display="flex"
                bgColor="lightgrey"
                position="sticky"
                top="0"
              >
                {day}
              </Box>
              {data &&
                data
                  .filter(
                    item =>
                      item.start_time.slice(0, 4) == date.getFullYear() &&
                      item.start_time.slice(5, 7) == date.getMonth() + 2 &&
                      item.start_time.slice(8, 10) == day
                  )
                  .map(item => (
                    <Box key={item.id} id={item.id} onClick={handleItemModal}>
                      <Start />
                      {item.name}
                    </Box>
                  ))}
              {data &&
                data
                  .filter(
                    item =>
                      item.end_time.slice(0, 4) == date.getFullYear() &&
                      item.end_time.slice(5, 7) == date.getMonth() + 2 &&
                      item.end_time.slice(8, 10) == day
                  )
                  .map(item => (
                    <Box key={item.id} id={item.id} onClick={handleItemModal}>
                      <End />

                      {item.name}
                    </Box>
                  ))}
            </GridItemContainer>
          ))}
        </GridContainer>
      </GridWrapper>
    </Wrapper>
  )
}

export default Calendar

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 100px 0 100px;
`
const MonthController = styled.div`
  position: absolute;
  height: 80px;
  left: 0;
  right: 0;
  /* text-align: center; */
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-contents: center;
  align-items: center;
`

const DateArrow = styled(Link)`
  padding: 3;
  font-size: 25px;
  font-weight: bold;
  color: gray;
  &:hover {
    text-decoration: none;
  }
`

const DateViewer = styled(Box)`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 30px;
  color: #ff6813;
  font-weight: bold;
`

const GridWrapper = styled(Box)`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  grid-gap: 1px;
  width: 100%;
  height: 80vh;
  overflow-y: scroll;
  flex-direction: column;
`

const GridContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
`

const GridItemWeek = styled(Box)`
  display: flex;
  width: auto;
  background: grey;
  align-items: center;
  justify-content: center;
`

const GridItemContainer = styled(Box)`
  width: auto;
  overflow-x: hidden;
  min-height: 150px;
`
const GridItemDay = styled(Box)``
