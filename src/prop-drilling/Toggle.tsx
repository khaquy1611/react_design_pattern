import { useState } from 'react'

const Toggle = () => {
  const [on, setOn] = useState(false)
  const toggle = () => setOn(o => !0)
  return (
    <div>
      <div>The button is {on ? 'on' : 'off'}</div>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default Toggle
