interface Props {
  onToggle: () => void
}
const SwitchButton = ({ onToggle }: Props) => {
  return <button onClick={onToggle}>Toggle</button>
}

export default SwitchButton
