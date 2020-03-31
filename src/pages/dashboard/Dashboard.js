import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import {connect} from 'react-redux';

import Widget from '../../components/Widget/Widget';
import LineChart from './charts/LineChart';

import {fetchReports} from '../../actions/report';
import {fetchTemperatures} from '../../actions/temperature';
import {fetchOee} from '../../actions/oee';
import ProductionInfo from './ProductionInfo';
import TemperatureBadge from './TemperatureBadge';
import OeeInfo from './OeeInfo';

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchReports());
    this.props.dispatch(fetchTemperatures());
    this.props.dispatch(fetchOee());
  }

  render() {
    let {reports, temperatures, oee} = this.props;
    return (
        <div>
          <h1 className="page-title mb-lg"><span
              className="fw-semi-bold">Dashboard</span></h1>
          <Row>
            <Col>
              {
                reports && Object.keys(reports).map((key1, index) => {
                  let netProduction = reports[key1].netProductionByHour;
                  return (
                      <Widget key={key1}>
                        <Row>
                          <Col>
                            <ProductionInfo report={reports[key1]} name={key1}/>
                          </Col>
                          <Col>
                            {oee && <OeeInfo oee={oee[key1]}/>}
                          </Col>
                          <Col>
                            {temperatures && <TemperatureBadge
                                temperature={temperatures[key1]}/>}
                          </Col>
                        </Row>
                        <LineChart data={this.mapToArray(netProduction, key1)}
                                   keyName={key1}/>
                      </Widget>
                  )
                })
              }
            </Col>
          </Row>
        </div>
    )
  }

  mapToArray(netProduction, key1) {
    return Object.keys(netProduction)
    .map(value => {
      return {
        name: value,
        [key1]: netProduction[value]
      };
    });
  }
}

function mapStateToProps(state) {
  return {
    areReportsFetching: state.reports.isFetching,
    reports: state.reports.reports,
    areTemperatureFetching: state.temperatures.isFetching,
    temperatures: state.temperatures.temperatures,
    areOeeFetching: state.oee.isFetching,
    oee: state.oee.oee
  };
}

export default connect(mapStateToProps)(Dashboard);