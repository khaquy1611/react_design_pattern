import React, { useState } from 'react'

const Counter = ({ render }: any) => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <div>
      {
        //Trả về giá trị cho props render.
        render({
          count: count,
          increment: increment,
          decrement: decrement,
        })
      }
    </div>
  )
}

export default Counter
