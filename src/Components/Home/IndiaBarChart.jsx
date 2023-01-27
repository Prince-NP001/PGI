import React from "react";
import "../../styles/IndiaMap.scss";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function IndiaBarChart() {
  const options = {
    chart: {
      type: "column",
      width: document.body.offsetWidth > 650 ? 515 : 300,
      height: document.body.offsetWidth > 650 ? 550 : 320,
      animation: true,
    },
    accessibility: {
      description: "Showing India Detail in bar",
    },
    title: {
      text: "",
    },

    xAxis: {
      type: "category",
      margin: 4,
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
    },
    credits: {
      enabled: false,
    },
    yAxis: {
      title: {
        text: "",
      },
    },

    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 2,
        pointWidth: 25,
        dataLabels: {
          enabled: false,
        },
      },
    },

    series: [
      {
        name: "PGI-District Grading",
        cursor: "pointer",
        data: data,
        states: {
          hover: {
            backgroundColor: "red",
          },
        },
        tooltip: {
          headerFormat: "",
          pointFormat:
            "<span><b>{point.name}</b></span><br /> District: <b>{point.y}</b><br/>",
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

var data = [
  {
    y: 0,
    name: "Daksh",
    color: "#0000ff",
  },
  {
    y: 4,
    name: "Utkarsh",
    color: "#5050ff",
  },
  {
    y: 148,
    name: "Ati-Uttam",
    color: "#7d7dff",
  },
  {
    y: 256,
    name: "Uttam",
    color: "#009632",
  },
  {
    y: 213,
    name: "Prachesta-1",
    color: "#96ff96",
  },
  {
    y: 77,
    name: "Prachesta-2",
    color: "#ffff00",
  },
  {
    y: 21,
    name: "Prachesta-3",
    color: "#ffc800",
  },
  {
    y: 6,
    name: "Akanshi-1",
    color: "#fa9696",
  },
  {
    y: 12,
    name: "Akanshi-2",
    color: "#fa6464",
  },
  {
    y: 1,
    name: "Akanshi-3",
    color: "#fa4b4b",
  },
];
