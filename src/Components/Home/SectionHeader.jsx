import React, { useState } from "react";
import "../../styles/Home.scss";

import BarChartIcon from "@mui/icons-material/BarChart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export default function SectionHeader(props) {
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

  const [selectValue, setSelectValue] = useState("2021-22");

  return (
    <Box className="chart-graph-header">
      <Typography component={"h2"}>{props.title}</Typography>
      <Typography component={"h2"}>{props.mid_title}</Typography>
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
            className="select-month"
          >
            <MenuItem value={"2021-22"}>2021-22</MenuItem>
            <MenuItem value={"2020-21"}>2020-21</MenuItem>
            <MenuItem value={"2019-20"}>2019-20</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
