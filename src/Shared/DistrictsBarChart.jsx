import HighchartsReact from 'highcharts-react-official';
import React from 'react'
import Highcharts from "highcharts";
import "../styles/component/DistrictsBarChart.scss"
const DistrictsBarChart = () => {
     const options ={
  chart: {
    type: 'column'
  },
 
  xAxis: {
    categories: [
    "Daksh",
        "Utkarsh",
        "Ati-Uttam",
        "Uttam",
        "Prachesta-1",
        "Prachesta-2",
        "Prachesta-3",
        "Akanshi-1",
        "Akanshi-2",
        "Akanshi-3",
      
    ],  legend: {
      enabled: false,
    },
  
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'District'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:black;padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} District</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  colors:["rgb(56, 56, 118)","rgb(217, 65, 72)"],
  
      plotOptions: {
       series: {
         pointWidth: 36,
        
       }
     },
     
  series: [{
    name: '2020-21',
    data: [0, 4, 149, 258, 213, 77, 21, 6, 12,1]
    

  }, {
    name: '2019-20',
    data: [0, 3, 85, 274, 241, 86, 40, 3, 1, 0]

  } ,]
};
  return (
    <div className="highcharts-figure">
  <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
  )
}

export default DistrictsBarChart