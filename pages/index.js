const Page = ({ data }) => {
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <table>
            <tbody>
              <tr>
                <td>{item.name}</td>
                <td>{item.start_time}</td>
                <td>{item.end_time}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
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
