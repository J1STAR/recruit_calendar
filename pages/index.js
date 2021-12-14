import Calendar from '../components/calendar/calendar'
import { useState } from 'react'

const Page = ({ data }) => {
  const [date, setDate] = useState(new Date())
  return (
    <div style={{ display: 'flex' }}>
      <Calendar data={data} date={date} setDate={setDate} />
    </div>
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
