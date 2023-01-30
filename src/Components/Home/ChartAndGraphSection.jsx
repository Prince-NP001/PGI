import React, { useState } from "react";
import "../../styles/Home.scss";
import IndiaMaps from "./IndiaMaps.jsx";
import IndiaBarChart from "./IndiaBarChart.jsx";
import BarChartIcon from "@mui/icons-material/BarChart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import NationalListView from "./NationalListView.jsx";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export default function ChartAndGraphSection() {
  const [selectValue, setSelectValue] = useState("2021-22");
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
    <Box className="chart-graph-content">
      <Box className="chart-graph-header">
        <Typography component={"h2"}>PGI-District Grading</Typography>
        <Typography component={"h2"}>National</Typography>
        <Box className="chart-graph-buttons-and-select">
          <Box className="chart-graph-btn-container">
            <Button onClick={chart_and_graph_view}>
              <BarChartIcon />
            </Button>
            <Button onClick={list_view}>
              <FormatListBulletedIcon />
            </Button>
          </Box>
          <FormControl fullWidth>
            <Select
              name="show-month-wise"
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <MenuItem value={"2021-22"}>2021-22</MenuItem>
              <MenuItem value={"2020-21"}>2020-21</MenuItem>
              <MenuItem value={"2019-20"}>2019-20</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box>
        <Box className="charts-and-graph" id="national-charts-and-graph">
          <Box className="map-and-chart-bundle">
            <IndiaMaps />
            <IndiaBarChart />
          </Box>
          <Box className="map-color-bar">
            {data.map((el) => {
              return <MapColorBar key={el.id} data={el} />;
            })}
          </Box>
        </Box>
        <Box
          className="charts-and-graph-list-view"
          id="national-charts-and-graph-list-view"
          style={{ display: "none" }}
        >
          <NationalListView />
        </Box>
      </Box>
    </Box>
  );
}
const MapColorBar = (props) => {
  return (
    <Box className="map-color-single-bar">
      <Box
        className="color-coding"
        style={{ backgroundColor: props.data.color }}
      ></Box>
      <Typography component={"span"}>{props.data.name}</Typography>
    </Box>
  );
};

let data = [
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
