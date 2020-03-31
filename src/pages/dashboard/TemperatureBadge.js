import React, { Component } from 'react';
import cx from 'classnames';
import s from './Charts.module.scss';
import {Badge} from 'reactstrap';

class TemperatureBadge extends Component {
  render() {
    switch (this.props.temperature) {
      case "good/green":
        return <Badge className={cx("ml-xl", s.badge)} color="success">Good</Badge>;
      case "warning/orange":
        return <Badge className={cx("ml-xl", s.badge)} color="warning">Warning</Badge>;
      case "fatal/red":
        return <Badge className={cx("ml-xl", s.badge)} color="danger">Fatal</Badge>;
      default:
        return <Badge className={cx("ml-xl", s.badge)} color="secondary">Unknown</Badge>;
    }
  }
}

export default TemperatureBadge;