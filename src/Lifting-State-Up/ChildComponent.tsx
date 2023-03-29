interface Props {
    onReceiveData: (data: string) => void
}
const ChildComponent = ({ onReceiveData } : Props) => {
  return (
    <button onClick={() => onReceiveData('data gửi đến component cha')}>
      Gửi lại cho component cha
    </button>
  )
}

export default ChildComponent
