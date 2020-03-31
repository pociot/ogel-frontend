import React from 'react';
import {withRouter, Link} from 'react-router-dom';

import Icon from '../Icon/Icon';
import LinksGroup from './LinksGroup/LinksGroup';

import s from './Sidebar.module.scss';

const Sidebar = () => (
  <nav className={s.root}>
    <header className={s.logo}>
      <Link to="/app/dashboard">
        <Icon glyph="logo" />
      </Link>
    </header>
    <ul className={s.nav}>
      <LinksGroup
        header="Dashboard"
        headerLink="/app/dashboard"
        glyph="chart"
      />
    </ul>
  </nav>
);

export default withRouter(Sidebar);
