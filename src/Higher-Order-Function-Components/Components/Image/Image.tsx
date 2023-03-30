import WithHoverOpacity from '@/Higher-Order-Function-Components/WithHoverOpacity'

const Image1 = (props: any) => {
  return (
    <img
      src="https://kenh14cdn.com/2019/9/14/hoatran-4707-15683944054141741331721.jpg"
      alt="beautiful-girl"
    />
  )
}

const Image2 = (props: any) => {
  return (
    <img
      src="https://i.pinimg.com/originals/08/9c/5f/089c5f473142d929d5ab6840a7156021.png"
      alt="beautiful-girl"
    />
  )
}

const ImageWithHoverOpacity1 = WithHoverOpacity(Image1)
const ImageWithHoverOpacity2 = WithHoverOpacity(Image2)

export { ImageWithHoverOpacity1, ImageWithHoverOpacity2 }
