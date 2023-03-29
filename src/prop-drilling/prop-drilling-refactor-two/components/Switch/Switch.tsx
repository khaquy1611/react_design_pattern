import SwitchButton from "../SwitchButton/SwitchButton"
import SwitchMessage from "../SwitchMessage/SwitchMessage"

interface Props {
    on: boolean,
    onToggle: () => void
}

const Switch = ({ on, onToggle } : Props) => {
  return (
    <div>
      <SwitchMessage on={on} />
      <SwitchButton onToggle={onToggle} />
    </div>
  )
}

export default Switch
