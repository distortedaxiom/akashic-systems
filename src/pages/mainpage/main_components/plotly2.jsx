import React from 'react';
import Plot from 'react-plotly.js';

export default class Plotly2 extends React.Component {

  componentDidMount() {
    const csv_url = "https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv";
    var Papa = require('papaparse')

    let results

    Papa.parse(csv_url, {
      dynamicTyping: true,
      download: true,
      header: true,
      comments: "*=",
      complete: function(data) {
        console.log(data)
      }
});
  }

  render() {

    var trace1 = {
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: [20, 14, 23],
      name: 'SF Zoo',
      type: 'bar'
    };
    
    var trace2 = {
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: [12, 18, 29],
      name: 'LA Zoo',
      type: 'bar'
    };
    
    var data = [trace1, trace2];
    
    var layout = {barmode: 'group'};


    return (
      <Plot
        data = {data}
        layout = {layout}
      />

      
    );
  }
}