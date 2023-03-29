import { AppContext } from '../AppContext'
const Language = () => {
  return (
    <AppContext.Consumer>
      {(context : any) => {
        console.log('context', context)
        return (
            <div className="haveMargin">
            <label className="labels">
              {context.state.localeObj && context.state.localeObj.languageLabel}
              :{" "}
            </label>
            <select
              value={context.state.localeObj && context.state.localeObj.locale}
              onChange={context.updateLocalCode}
            >
              <option value="en-US">English</option>
              <option value="fr-FR">French</option>
              <option value="es-ES">Spanish</option>
            </select>
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}

export default Language
