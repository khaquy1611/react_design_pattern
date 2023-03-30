import { useState } from 'react'

const WithHoverOpacity = (ImageComponent: React.ElementType) => {
  return (props: any) => {
    const [opacity, setOpacity] = useState(1)

    const onMouseEnter = () => {
      setOpacity(0.5)
    }

    const onMouseLeave = () => {
      setOpacity(1)
    }

    return (
      <div
        style={{ opacity: opacity }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <ImageComponent />
      </div>
    )
  }
}

export default WithHoverOpacity
