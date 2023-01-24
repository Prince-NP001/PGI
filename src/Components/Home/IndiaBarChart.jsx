import React from "react";
import "../../styles/IndiaMap.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { fontWeight } from "@mui/system";

export default function IndiaBarChart() {
  const options = {
    chart: {
      type: "column",
      width: document.body.offsetWidth > 650 ? 515 : 300,
      height: document.body.offsetWidth > 650 ? 550 : 320,
      animation: true,
    },
    title: {
      text: "",
    },

    xAxis: {
      type: "category",
      margin: 4,
    },
    yAxis: {
      title: {
        text: "",
      },
      min: 0,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 20,
        pointWidth: 40,
        dataLabels: {
          enabled: false,
        },
      },
    },

    series: [
      {
        name: "PGI-District Grading",
        colorByPoint: true,
        cursor: "pointer",
        data: [
          {
            name: "Daksh",
            y: 15,
          },
          {
            name: "Utkarsh",
            y: 5,
          },
          {
            name: "Ati-Uttam",
            y: 148,
          },
          {
            name: "Uttam",
            y: 256,
          },
          {
            name: "Prachesta-1",
            y: 213,
          },
          {
            name: "Prachesta-2",
            y: 77,
          },
          {
            name: "Prachesta-3",
            y: 21,
          },
          {
            name: "Akanshi-1",
            y: 9,
          },
          {
            name: "Akanshi-2",
            y: 22,
          },
          {
            name: "Akanshi-3",
            y: 20,
          },
        ],
        tooltip: {
          headerFormat: "",
          pointFormat:
            "<span><b>{point.name}</b></span><br /> District: <b>{point.y:.2f}</b><br/>",
        },
      },
    ],
  };

  return (
    <div className="bar-chart-india">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
