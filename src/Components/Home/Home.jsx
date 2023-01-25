import React, { useState, useEffect } from "react";
import "../../styles/Home.css";
import IndiaMaps from "./IndiaMaps.jsx";
import IndiaBarChart from "./IndiaBarChart.jsx";
import BarChartIcon from "@mui/icons-material/BarChart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import NationalListView from "./NationalListView.jsx";
import AboutPGID from "./AboutPGID.jsx";
import PGIDCategories from "./PGIDCategories.jsx";
import Banner from "./Banner.jsx";

export default function Home() {
  const chart_and_graph_view = (e) => {
    e.currentTarget.style.backgroundColor = "#7e84a3";
    e.currentTarget.style.color = "white";
    e.currentTarget.nextSibling.style.backgroundColor = "white";
    e.currentTarget.nextSibling.style.color = "#7e84a3";

    document.querySelector(
      "#national-charts-and-graph-list-view"
    ).style.display = "none";
    document.querySelector("#national-charts-and-graph").style.display = "flex";
  };
  const list_view = (e) => {
    e.currentTarget.style.backgroundColor = "#7e84a3";
    e.currentTarget.style.color = "white";
    e.currentTarget.previousSibling.style.backgroundColor = "white";
    e.currentTarget.previousSibling.style.color = "#7e84a3";

    document.querySelector(
      "#national-charts-and-graph-list-view"
    ).style.display = "flex";
    document.querySelector("#national-charts-and-graph").style.display = "none";
  };

  return (
    <div className="main">
      <section className="banner-slider">
        <Banner />
      </section>
      <section className="chart-graph">
        <div className="chart-graph-content">
          <div className="chart-graph-header">
            <h2>PGI-District Grading</h2>
            <h2>National</h2>
            <div className="chart-graph-buttons-and-select">
              <div className="chart-graph-btn-container">
                <button onClick={chart_and_graph_view}>
                  <BarChartIcon />
                </button>
                <button onClick={list_view}>
                  <FormatListBulletedIcon />
                </button>
              </div>
              <select name="show-month-wise">
                <option>2021-22</option>
                <option>2020-21</option>
                <option>2019-20</option>
              </select>
            </div>
          </div>
          <div>
            <div className="charts-and-graph" id="national-charts-and-graph">
              <div className="map-and-chart-bundle">
                <IndiaMaps />
                <IndiaBarChart />
              </div>
              <div className="map-color-bar">
                {data2.map((el) => {
                  return <MapColorBar key={el.id} data={el} />;
                })}
              </div>
            </div>
            <div
              className="charts-and-graph-list-view"
              id="national-charts-and-graph-list-view"
              style={{ display: "none" }}
            >
              <NationalListView />
            </div>
          </div>
        </div>
      </section>
      <section className="about-pgid">
        <AboutPGID />
      </section>
      <section className="pgid-categories">
        <PGIDCategories />
      </section>
    </div>
  );
}

const MapColorBar = (props) => {
  return (
    <div className="map-color-single-bar">
      <div
        className="color-coding"
        style={{ backgroundColor: props.data.color }}
      ></div>
      <span>{props.data.name}</span>
    </div>
  );
};

let data2 = [
  { id: 1, name: "Daksh(91% to 100%)", color: "#0000ff" },
  { id: 2, name: "Utkarsh(81% to 90%)", color: "#5050ff" },
  { id: 3, name: "Ati-Uttam(71% to 80%)", color: "#7d7dff" },
  { id: 4, name: "Uttam(61% to 70%)", color: "#009632" },
  { id: 5, name: "Prachesta-1(51% to 60%)", color: "#96ff96" },
  { id: 6, name: "Prachesta-2(41% to 50%)", color: "#ffff00" },
  { id: 7, name: "Prachesta-3(31% to 40%)", color: "#ffc800" },
  { id: 8, name: "Akanshi-1(21% to 30%)", color: "#fa9696" },
  { id: 9, name: "Akanshi-2(11% to 20%)", color: "#fa6464" },
  { id: 10, name: "Akanshi-3(Upto 10%)", color: "#fa4b4b" },
];
