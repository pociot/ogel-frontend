import React from 'react';
import cx from 'classnames';
import { Switch, Route, withRouter } from 'react-router';

import s from './Layout.module.scss';
import Sidebar from '../Sidebar/Sidebar';

import Charts from '../../pages/dashboard/Dashboard'

class Layout extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <Sidebar />
        <div
          className={cx(s.wrap, {[s.sidebarOpen]: true})}
        >
          <main className={s.content}>
            <Switch>
              <Route path="/app/dashboard" exact component={Charts} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(Layout);
