import HighchartsReact from 'highcharts-react-official';
import React from 'react'
import Highcharts from "highcharts";

const DistrictLineChart = () => {

const options= {


  yAxis: {
   
  },

  xAxis: {
    accessibility: {
      rangeDescription: 'Range: 2010 to 2020'
    }
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        // connectorAllowed: false
      },
      pointStart: 2010
    }
  },

  series: [ {
    name: 'Operations & Maintenance',
    data: [null, null, null, null, null, null, null,
      null, 11164, 11218, 10077]
  }, {
    name: 'Other',
    data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
      17300, 13053, 11906, 10073]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }


}

  return (
    <div className="highcharts-figure">
  <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
  )
}

export default DistrictLineChart