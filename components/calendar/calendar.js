import { Box, Button } from '@chakra-ui/react'
const Calendar = ({ data, date, setDate }) => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const lastMonthRes = new Date(date.getFullYear(), date.getMonth(), 0)
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

  return (
    <Box width="100%">
      <Box
        position="absolute"
        height="80px"
        left="0"
        right="0"
        textAlign="center"
        marginLeft="auto"
        marginRight="auto"
        width="300px"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Button m={3} colorScheme="blue" onClick={handleMonthMinus}>
          {'<'}
        </Button>
        <Box>
          {date.toLocaleString('default', { year: 'numeric', month: 'long' })}
        </Box>
        <Button m={3} colorScheme="blue" onClick={handleMonthPlus}>
          {'>'}
        </Button>
      </Box>

      <Box
        mt="80px"
        display="flex"
        flexDir="column"
        gridGap={1}
        width="100%"
        overflowY="scroll"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 'full'
        }}
      >
        <Box display="grid" gridTemplateColumns="repeat(7,1fr)" gridGap={1}>
          {['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'].map(day => (
            <Box
              justifyContent="center"
              alignItems="center"
              bgColor="grey"
              display="flex"
              width="auto"
              key={day}
            >
              {day}
            </Box>
          ))}
        </Box>
        <Box display="grid" gridTemplateColumns="repeat(7,1fr)" gridGap={1}>
          {lastMonthResidual.map(day => (
            <Box
              width="auto"
              overflowX="hidden"
              minHeight="150px"
              key={day}
              position="sticky"
              top="0"
            >
              <Box
                justifyContent="center"
                alignItems="center"
                display="flex"
                bgColor="lightgrey"
              >
                {day}
              </Box>
            </Box>
          ))}
          {[...Array(lastDay.getDate())].map((_, i) => (
            <Box
              width="auto"
              overflowX="hidden"
              minHeight="150px"
              key={i}
              position="sticky"
              top="0"
            >
              <Box
                justifyContent="center"
                alignItems="center"
                display="flex"
                bgColor="lightgrey"
              >
                {i + 1}
              </Box>
              {/* filter daily data */}
              {data
                .filter(item => item.start_time.slice(8, 10) == i + 1)
                .map(item => (
                  <Box key={item.id}>{item.name}</Box>
                ))}
            </Box>
          ))}
          {nextMonthResidual.map(day => (
            <Box
              width="auto"
              overflowX="hidden"
              minHeight="150px"
              key={day}
              position="sticky"
              top="0"
            >
              <Box
                justifyContent="center"
                alignItems="center"
                display="flex"
                bgColor="lightgrey"
              >
                {day}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Calendar
