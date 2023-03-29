interface Props {
  on: boolean
}
const SwitchMessage = ({ on }: Props) => {
  return <div>The button is {on ? 'on' : 'off'}</div>
}

export default SwitchMessage
