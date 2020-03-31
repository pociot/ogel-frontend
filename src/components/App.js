import React from 'react';
import {Switch, Route, Redirect} from 'react-router';
import {HashRouter} from 'react-router-dom';

import '../styles/theme.scss';
import LayoutComponent from '../components/Layout/Layout';

const PrivateRoute = ({dispatch, component, ...rest}) => {
  return ( // eslint-disable-line
      <Route {...rest}
             render={props => (React.createElement(component, props))}/>
  );
};

class App extends React.PureComponent {
  render() {
    return (
        <div>
          <HashRouter>
            <Switch>
              <Route path="/" exact render={() => <Redirect to="/app/dashboard"/>}/>
              <Route path="/app" exact
                     render={() => <Redirect to="/app/dashboard"/>}/>
              <PrivateRoute path="/app" dispatch={this.props.dispatch}
                            component={LayoutComponent}/>
            </Switch>
          </HashRouter>
        </div>

    );
  }
}

export default App;
