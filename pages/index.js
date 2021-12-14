import Calendar from '../components/calendar/calendar'
import { useState } from 'react'
import { Box, Container, Button } from '@chakra-ui/react'

const Page = ({ data }) => {
  const [date, setDate] = useState(new Date())
  const monthly_data = data.filter(
    item =>
      ('0' + new Date(item.start_time).getMonth() + 1).slice(-2) ===
        ('0' + date.getMonth() + 1).slice(-2) &&
      new Date(item.start_time).getFullYear() === date.getFullYear()
  )
  return (
    <Box display="flex" height="100%">
      <Calendar data={monthly_data} date={date} setDate={setDate} />
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
