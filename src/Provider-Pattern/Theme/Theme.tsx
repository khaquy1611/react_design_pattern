import { AppContext } from '../AppContext'
import '../../styles/toggle.css'
const Theme = () => {
  return (
    <AppContext.Consumer>
      {(context : any) => {
        console.log('context', context)
        return (
          <div className="haveMargin">
            <label className="labels">
              {context.state.localeObj && context.state.localeObj.themeLabel}:{' '}
            </label>
            {context.state.theme === 'light' ? (
              <span>
                {context.state.localeObj && context.state.localeObj.light}
              </span>
            ) : (
              <span>
                {context.state.localeObj && context.state.localeObj.dark}
              </span>
            )}
            <label className="switch">
              <input type="checkbox" onChange={context.updateTheme} />
              <span className="slider round" />
            </label>
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}

export default Theme
