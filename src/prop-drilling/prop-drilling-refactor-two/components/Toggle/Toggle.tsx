import { useState } from 'react'
import Switch from '../Switch/Switch'

const Toggle = () => {
  const [on, setOn] = useState(false)
  const toggle = () => setOn(o => !o)
  return (
    <Switch on={on} onToggle={toggle}/>
  )
}

export default Toggle
