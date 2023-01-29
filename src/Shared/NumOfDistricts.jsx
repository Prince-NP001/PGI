import React from 'react'
import BarChartIcon from "@mui/icons-material/BarChart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
 
import NationalListView from '../Components/Home/NationalListView';
import DistrictsBarChart from './DistrictsBarChart';
import DistrictLineChart from './DistrictLineChart';


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


const NumOfDistricts = () => {

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

  const chart_and_graph_view = (e) => {
    e.currentTarget.style.backgroundColor = "#7e84a3";
    e.currentTarget.style.color = "white";
    e.currentTarget.nextSibling.style.backgroundColor = "white";
    e.currentTarget.nextSibling.style.color = "#7e84a3";

    document.querySelector(
      "#national-district-line-chart"
    ).style.display = "none";
    document.querySelector("#national-district-bar-chart").style.display = "flex";
  };
  const list_view = (e) => {
    e.currentTarget.style.backgroundColor = "#7e84a3";
    e.currentTarget.style.color = "white";
    e.currentTarget.previousSibling.style.backgroundColor = "white";
    e.currentTarget.previousSibling.style.color = "#7e84a3";

    document.querySelector(
      "#national-district-line-chart"
    ).style.display = "flex";
    document.querySelector("#national-district-bar-chart").style.display = "none";
  };


  return (
         
      <section className="chart-graph">
        <div className="chart-graph-content">
          <div className="chart-graph-header">
            <h2>Number of Districts in Different Grades of PGI-District (National)</h2>
            
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
            <div className="charts-district" id="national-district-bar-chart">
               
             <DistrictsBarChart/>

          
            </div>
            <div
              className="charts-and-graph-list-view"
              id="national-district-line-chart"
              style={{ display: "none" }}
            >
              <DistrictLineChart />
            </div>
          </div>
        </div>
      </section>
  )
}

export default NumOfDistricts
