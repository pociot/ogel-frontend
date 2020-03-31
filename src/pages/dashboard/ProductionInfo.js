import React, {Component} from 'react';

class ProductionInfo extends Component {
  render() {
    let { netProduction, scrapPercentage, downtime } = this.props.report;
    let scrapPercent = parseFloat(scrapPercentage) * 100;
    let downtimePercent = parseFloat(downtime) * 100;
    return (
        <div>
          <h5><span
              className="fw-semi-bold">{this.props.name}</span></h5>
          <p>Total
            production: {netProduction}</p>
          <p>Scrap
            percentage: {scrapPercent.toFixed(2)}%</p>
          <p>Downtime: {downtimePercent.toFixed(2)}%</p>
        </div>
    )
  }
}

export default ProductionInfo;