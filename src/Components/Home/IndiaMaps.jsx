import React from "react";
// import DatamapsIndia from "react-datamaps-india";
import "../../styles/IndiaMap.css";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import proj4 from "proj4";
import mapDataIN from "@highcharts/map-collection/countries/in/custom/in-all-disputed.geo.json";
highchartsMap(Highcharts);

export default function IndiaMaps() {
  if (typeof window !== "undefined") {
    window.proj4 = window.proj4 || proj4;
  }
  var data = [
    ["madhya pradesh", 1, 2, 3],
    ["uttar pradesh", 1, 1, 2],
    ["karnataka", 2, 1, 2],
    ["nagaland", 3, 1, 2],
    ["bihar", 4, 3, 3],
    ["lakshadweep", 5, 3, 3],
    ["andaman and nicobar", 6, 3, 2],
    ["assam", 7, 2, 4],
    ["west bengal", 8, 7, 5],
    ["puducherry", 9, 6, 4],
    ["daman and diu", 0, 2, 4],
    ["gujarat", 1, 2, 1],
    ["rajasthan", 2, 3, 5],
    ["dadara and nagar havelli", 3, 1, 6],
    ["chhattisgarh", 5, 7, 0],
    ["tamil nadu", 5, 8, 1],
    ["chandigarh", 4, 0, 0],
    ["punjab", 0, 2, 5],
    ["haryana", 0, 5, 3],
    ["andhra pradesh", 1, 6, 8],
    ["maharashtra", 4, 2, 4],
    ["himachal pradesh", 7, 6, 5],
    ["meghalaya", 4, 6, 3],
    ["kerala", 8, 5, 4],
    ["telangana", 7, 6, 4],
    ["mizoram", 5, 5, 2],
    ["tripura", 6, 5, 2],
    ["manipur", 7, 5, 3],
    ["arunanchal pradesh", 2, 6, 3],
    ["jharkhand", 2, 5, 3],
    ["goa", 3, 4, 6],
    ["nct of delhi", 3, 5, 8],
    ["odisha", 6, 2, 6],
    ["jammu and kashmir", 6, 2, 7],
    ["sikkim", 4, 1, 5],
    ["uttarakhand", 5, 6, 3],
    ["ladakh", 9, 6, 1],
  ];
  // var data2 = [
  //   { name: "madhya pradesh", a: 1, b: 2, c: 3 },
  //   { name: "uttar pradesh", a: 1, b: 2, c: 3 },
  //   { name: "karnataka", a: 1, b: 2, c: 3 },
  //   { name: "nagaland", a: 1, b: 2, c: 3 },
  //   { name: "bihar", a: 1, b: 2, c: 3 },
  //   { name: "lakshadweep", a: 1, b: 2, c: 3 },
  //   { name: "andaman and nicobar", a: 1, b: 2, c: 3 },
  //   { name: "assam", a: 1, b: 2, c: 3 },
  //   { name: "west bengal", a: 1, b: 2, c: 3 },
  //   { name: "puducherry", a: 1, b: 2, c: 3 },
  //   { name: "daman and diu", a: 1, b: 2, c: 3 },
  //   { name: "gujarat", a: 1, b: 2, c: 3 },
  //   { name: "rajasthan", a: 1, b: 2, c: 3 },
  //   { name: "dadara and nagar havelli", a: 1, b: 2, c: 3 },
  //   { name: "chhattisgarh", a: 1, b: 2, c: 3 },
  //   { name: "tamil nadu", a: 1, b: 2, c: 3 },
  //   { name: "chandigarh", a: 1, b: 2, c: 3 },
  //   { name: "punjab", a: 1, b: 2, c: 3 },
  //   { name: "haryana", a: 1, b: 2, c: 3 },
  //   { name: "andhra pradesh", a: 1, b: 2, c: 3 },
  //   { name: "maharashtra", a: 1, b: 2, c: 3 },
  //   { name: "himachal pradesh", a: 1, b: 2, c: 3 },
  //   { name: "meghalaya", a: 1, b: 2, c: 3 },
  //   { name: "kerala", a: 1, b: 2, c: 3 },
  //   { name: "telangana", a: 1, b: 2, c: 3 },
  //   { name: "mizoram", a: 1, b: 2, c: 3 },
  //   { name: "tripura", a: 1, b: 2, c: 3 },
  //   { name: "manipur", a: 1, b: 2, c: 3 },
  //   { name: "arunanchal pradesh", a: 1, b: 2, c: 3 },
  //   { name: "jharkhand", a: 1, b: 2, c: 3 },
  //   { name: "goa", a: 1, b: 2, c: 3 },
  //   { name: "nct of delhi", a: 1, b: 2, c: 3 },
  //   { name: "odisha", a: 1, b: 2, c: 3 },
  //   { name: "jammu and kashmir", a: 1, b: 2, c: 3 },
  //   { name: "sikkim", a: 1, b: 2, c: 3 },
  //   { name: "uttarakhand", a: 1, b: 2, c: 3 },
  //   { name: "ladakh", a: 1, b: 2, c: 3 },
  // ];

  const mapOptions = {
    chart: {
      map: "countries/in/custom/in-all-disputed",
      renderTo: "india-map",
      animation: true,
      pinchType: "none",
      zoomType: "none",
      width:
        document.body.offsetWidth > 1040
          ? 480
          : document.body.offsetWidth > 950
          ? 380
          : document.body.offsetWidth < 900
          ? 480
          : 300,
      height:
        document.body.offsetWidth > 650
          ? 500
          : document.body.offsetWidth > 950
          ? 400
          : document.body.offsetWidth < 900
          ? 500
          : 320,
    },
    accessibility: {
      description: "Showing India Detail",
    },

    title: {
      text: "",
      align: "left",
    },
    mapNavigation: {
      enabled: false,
    },

    series: [
      {
        mapData: mapDataIN,
        data: data,
        showInLegend: false,
        cursor: "auto",
        name: "States",
        borderColor: "rgb(1, 131, 131)",
        color: "#42FFF6",
        states: {
          hover: {
            color: "blue",
          },
        },

        tooltip: {
          headerFormat: "",
          pointFormatter() {
            return (
              "<b>Prince</b><br/>" +
              [
                ["Daksh", "green"],
                ["Utkarsh", "red"],
                ["Ati-Uttam", "blue"],
              ]
                .map(
                  (line) =>
                    '<span style="color:' +
                    line[1] +
                    '">\u25CF</span> ' +
                    line[0] +
                    ": " +
                    Highcharts.numberFormat(line[0], 0) +
                    "<br/>"
                )
                .join("")
            );
          },

          // pointFormat:
          //   "<b style='color:red'>{point.name}</b><br>" +
          //   "<div class='map-hover-container'>" +
          //   "<div><span>Daksh</span><span>{point.a}</span></div>" +
          //   "<div><span>Utkarsh</span><span>{point.b}</span></div>" +
          //   "<div><span>Ati-Uttam</span><span>{point.c}</span></div>" +
          //   "</div>",

          // pointFormatter() {
          //   return (
          //     "<b>{point.name}</b><br/>" +
          //     [
          //       ["Daksh", "{point.a:.2f}", "green"],
          //       ["Utkarsh", "{point.b:.2f}", "red"],
          //       ["Ati-Uttam", "{point.c:.2f}", "blue"],
          //     ]
          //       .map(
          //         (line) =>
          //           '<span style="color:' +
          //           line[2] +
          //           '">\u25CF</span> ' +
          //           line[0] +
          //           ": " +
          //           line[0] +
          //           "<br/>"
          //       )
          //       .join("")
          //   );
          // },
        },
      },
    ],
  };

  return (
    <div className="india-map" id="india-map">
      <HighchartsReact
        constructorType={"mapChart"}
        highcharts={Highcharts}
        options={mapOptions}
        id={"mapChart"}
      />
    </div>
  );
}
