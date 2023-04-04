import Toggle from './prop-drilling/prop-drilling-refactor-two/components/Toggle/Toggle'
import Theme from './Provider-Pattern/Theme/Theme'
import './styles/style.css'
import Language from './Provider-Pattern/Language/Language'
import AppProvider from './Provider-Pattern/AppProvider/AppProvider'
import Content from './Provider-Pattern/Content/Content'
import ParentComponent from './Lifting-State-Up/ParentComponent'
import Counter from './Provider-Pattern/useReducer/Counter'
import CounterProvider from './Provider-Pattern/useReducer/CounterProvider'
import TvShowsContainer from './Presentational-and-Container-Pattern/TvShowsContainer'
import { AuthProvider } from './Provider-Pattern/AuthenthiationContext/context/AuthProvider'
import AuthContent from './Provider-Pattern/AuthenthiationContext/AuthContent'
import FancyDiv from './JSX-Spead/FancyDiv'
import GirlFreindContent from './Render-Props/GirlFreindContent'
import CounterRenderProps from './Render-Props/Counter/Counter'
import {
  ImageWithHoverOpacity1,
  ImageWithHoverOpacity2,
} from './Higher-Order-Function-Components/Components/Image/Image'
import DisplayDataWithLoader from './Higher-Order-Function-Components/Components/Image/DisplayData/DisplayData'
import Listings from './Hook-Pattern/custemHook/Listings'
import { Card } from './Compoud-Component/Card/Card'
const App = () => {
  const onThisClick = e => {
    console.log(e.target)
    alert('You just clicked me!')
  }
  return (
    <>
      {/* <ImageWithHoverOpacity1 />
      <ImageWithHoverOpacity2 /> */}
      {/* <Listings /> */}
      <Card>
        <Card.Title>Hello There!</Card.Title>
        <Card.Text>This is some text</Card.Text>
        <Card.Body>
          This card was created with the compound component pattern
        </Card.Body>
        <Card.ButtonContainer>
          <Card.Button onClick={onThisClick}>This is a button</Card.Button>
        </Card.ButtonContainer>
      </Card>
      {/* <DisplayDataWithLoader url="https://jsonplaceholder.typicode.com/posts" /> */}
    </>
  )
  // <CounterRenderProps
  //   render={(data: any) => {
  //     //Nhận giá trị trả vê từ Counter
  //     //qua props render.
  //     const { count, increment, decrement } = data
  //     return (
  //       <>
  //         <p>Giá trị {count}</p>
  //         <button onClick={increment}>Tăng</button>
  //         <button onClick={decrement}>Giảm</button>
  //       </>
  //     )
  //   }}
  // />
  // <GirlFreindContent />
  // <FancyDiv data-id="my-fancy-div" className="fancy-div" />
  // <AuthProvider>
  //   <AuthContent />
  // </AuthProvider>
  // <div className="App">
  //   <div className="light">
  //     <AppProvider>
  //       <Theme />
  //       <Language />
  //       <Content />
  //     </AppProvider>
  //   </div>
  // </div>

  // <TvShowsContainer />
  // <Switch />
  // <CounterProvider>
  //   <Counter />
  // </CounterProvider>
  // <ParentComponent />
  // <Toggle />
}

export default App
