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
import Switch from './Compound-Components-Pattern/Switch'
import { AuthProvider } from './Provider-Pattern/AuthenthiationContext/context/AuthProvider'
import AuthContent from './Provider-Pattern/AuthenthiationContext/AuthContent'
import FancyDiv from './JSX-Spead/FancyDiv'
import GirlFreindContent from './Render-Props/GirlFreindContent'
import CounterRenderProps from './Render-Props/Counter/Counter'
const App = () => {
  return (
    <CounterRenderProps
      render={(data: any) => {
        //Nhận giá trị trả vê từ Counter
        //qua props render.
        const { count, increment, decrement } = data
        return (
          <>
            <p>Giá trị {count}</p>
            <button onClick={increment}>Tăng</button>
            <button onClick={decrement}>Giảm</button>
          </>
        )
      }}
    />
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
  )
}

export default App
