interface Props {
    on: boolean,
    onToggle: () => void
}

const Switch = ({ on, onToggle } : Props) => {
  return (
    <div>
      <div>The button is {on ? "on" : "off"} </div>
      <button onClick={onToggle}>Toggle</button>
    </div>
  )
}

export default Switch
