import HighchartsReact from "highcharts-react-official";
import React from "react";
import Highcharts from "highcharts";
import "../styles/component/DistrictsBarChart.scss";
const DistrictsBarChart = () => {
  const options = {
    chart: {
      type: "column",
      width:
        document.body.offsetWidth > 1350
          ? 1150
          : document.body.offsetWidth > 1190
          ? 950
          : document.body.offsetWidth > 890
          ? 710
          : document.body.offsetWidth > 600
          ? 472
          : document.body.offsetWidth > 460
          ? 373
          : document.body.offsetWidth > 344
          ? 272
          : 250,
      height:
        document.body.offsetWidth > 1350
          ? 400
          : document.body.offsetWidth > 1100
          ? 350
          : document.body.offsetWidth > 400
          ? 300
          : 260,
      animation: true,
    },
    credits: false,

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
      ],
      legend: {
        enabled: false,
      },

      crosshair: true,
    },
    title: {
      text: "",
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span>',
      pointFormat: `<table>
      <tr>
      <td style='color:{series.color}; padding:0}">{series.name}: </td>
      <td style="padding:1"><b>{point.y:.1f} District</b></td>
      </tr>
      <tr>
      <td style='color:{series.color}; padding:0}">{series.name}: </td>
      <td style="padding:1"><b>{point.y:.1f} District</b></td>
      </tr>
      </table>
       `,

      shared: true,
      useHTML: true,
    },
    legend: {
      verticalAlign: "top",
      align: "left",
      x: -20,
    },
    plotOptions: {
      series: {
        pointWidth:
          document.body.offsetWidth > 1350
            ? 32
            : document.body.offsetWidth > 1100
            ? 20
            : document.body.offsetWidth > 460
            ? 10
            : document.body.offsetWidth > 344
            ? 7
            : 6,
      },
      column: {
        pointPadding: 0,
      },
    },

    series: [
      {
        name: "2020-21",
        data: [0, 4, 149, 258, 213, 77, 21, 6, 12, 1],
        color: "rgb(56, 56, 118)",
      },
      {
        name: "2019-20",
        data: [0, 3, 85, 274, 241, 86, 40, 3, 1, 0],
        color: "rgb(217, 65, 72)",
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default DistrictsBarChart;
