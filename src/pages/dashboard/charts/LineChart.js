import React, { PureComponent } from 'react';
import {
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  ResponsiveContainer
} from 'recharts';

class SimpleLineChart extends PureComponent {
	render () {
  	return (
      <ResponsiveContainer height={300} width='100%'>
        <LineChart 
          data={this.props.data}
          margin={{top: 20, left: -10}}
        >
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Line type="monotone" dataKey={this.props.keyName} stroke="#5d80f9" activeDot={{r: 8}}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default SimpleLineChart;
