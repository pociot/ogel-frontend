import React, {Component} from 'react';

class OeeInfo extends Component {
  render() {
    let { performance, availability, quality, oee } = this.props.oee;
    let performancePercent = parseFloat(performance) * 100;
    let availabilityPercent = parseFloat(availability) * 100;
    let qualityPercent = parseFloat(quality) * 100;
    let oeePercent = parseFloat(oee) * 100;
    return (
        <div>
          <p>Performance: {performancePercent.toFixed(2)}%</p>
          <p>Availability: {availabilityPercent.toFixed(2)}%</p>
          <p>Quality: {qualityPercent.toFixed(2)}%</p>
          <p>OEE: {oeePercent.toFixed(2)}%</p>
        </div>
    )
  }
}

export default OeeInfo;