import React, {Component} from 'react';
import cx from 'classnames';
import {NavLink} from 'react-router-dom';

import Icon from '../../Icon/Icon';

import s from './LinksGroup.module.scss';

class LinksGroup extends Component {

  static defaultProps = {
    headerLink: null,
    childrenLinks: null,
    className: '',
    glyph: null,
  };

  render() {
    const {className, headerLink, header, glyph} = this.props;
    return (
        <li className={cx(s.headerLink, className)}>
          <NavLink
              to={headerLink}
              activeClassName={s.headerLinkActive}
              exact
          >
            <div>
              {glyph && <Icon glyph={glyph}/>}
              <span>{header}</span>
            </div>
          </NavLink>
        </li>
    );
  }
}

export default LinksGroup;
