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
const App = () => {
  return (
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
    <Switch />
  // <CounterProvider>
  //   <Counter />
  // </CounterProvider>
    // <ParentComponent />
    // <Toggle />
  )
}

export default App
