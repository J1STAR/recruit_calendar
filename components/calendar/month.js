const Month = ({ month }) => {
  const date = new Date(2021, month + 1, 0)

  return <div>{date.toString()}</div>
}
export default Month
