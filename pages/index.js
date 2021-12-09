import Calendar from '../components/calendar/calendar'
import { useState } from 'react'
import { Box, Container, Button } from '@chakra-ui/react'

const Page = ({ data }) => {
  const [date, setDate] = useState(new Date())

  const handleMonthPlus = () => {
    setDate(new Date(date.setMonth(date.getMonth() + 1)))
  }
  const handleMonthMinus = () => {
    setDate(new Date(date.setMonth(date.getMonth() - 1)))
  }

  return (
    <Box display="flex">
      <Container maxW="15%" bg="gray">
        Small Calendar
      </Container>
      <Container maxW="auto">
        <Button m={3} colorScheme="blue" onClick={handleMonthPlus}>
          {'<'}
        </Button>
        <Button m={3} colorScheme="blue" onClick={handleMonthMinus}>
          {'>'}
        </Button>
        <Box fontSize={20}>{date.toDateString()}</Box>
        {data
          .filter(
            item =>
              ('0' + new Date(item.start_time).getMonth() + 1).slice(-2) ===
                ('0' + date.getMonth() + 1).slice(-2) &&
              new Date(item.start_time).getFullYear() === date.getFullYear()
          )
          .map(item => (
            <div key={item.id}>
              {item.name}
              {item.start_time.split('T')[0]}
            </div>
          ))}
      </Container>
    </Box>
  )
}
export default Page

export async function getStaticProps() {
  const res = await fetch(
    `https://frontend-assignments.s3.ap-northeast-2.amazonaws.com/job_postings.json`
  )
  const data = await res.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { data } // will be passed to the page component as props
  }
}
