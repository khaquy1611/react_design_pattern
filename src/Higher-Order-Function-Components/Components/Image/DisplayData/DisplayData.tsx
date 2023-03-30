import WithLoader from '@/Higher-Order-Function-Components/WithLoader'

const DisplayData = ({ data }: any) => {
  return (
    <div>
      <h2>Data: </h2>
      {data.length > 0 &&
        data.map((item: any) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
    </div>
  )
}
const DisplayDataWithLoader = WithLoader(DisplayData)
export default DisplayDataWithLoader
