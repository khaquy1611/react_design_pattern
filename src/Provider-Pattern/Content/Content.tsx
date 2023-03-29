import { AppContext } from '../AppContext';

const Content = () => {
    return (
        <AppContext.Consumer>
          {(context : any) => {
            return (
             <h2>{context.state.localeObj && context.state.localeObj.content}</h2>     
            ) 
          }}
        </AppContext.Consumer>
      );
}

export default Content
