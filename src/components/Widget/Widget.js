import React from 'react';
import cx from 'classnames';

import s from './Widget.module.scss';

class Widget extends React.Component {
  static defaultProps = {
    title: null,
    className: '',
    children: [],
  };

  render() {
    return (
      <section className={cx(s.widget, this.props.className)}>
        {this.props.title &&
        (typeof this.props.title === 'string' ? (
          <h5 className={s.title}>{this.props.title}</h5>
        ) : (
          <header className={s.title}>{this.props.title}</header>
        ))}
        <div>{this.props.children}</div>
      </section>
    );
  }
}

export default Widget;
