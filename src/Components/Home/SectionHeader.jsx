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
  const [selectValue, setSelectValue] = useState("2021-22");

  const handleClickMap = (e) => {
    if (!props.stateValue) {
      props.StateValueFunc();

      let headerIcon = e.currentTarget;
      if (!props.stateValue) {
        headerIcon.style.backgroundColor = "#7e84a3";
        headerIcon.style.color = "white";
        headerIcon.nextSibling.style.backgroundColor = "white";
        headerIcon.nextSibling.style.color = "#7e84a3";
      } else {
        headerIcon.style.backgroundColor = "#7e84a3";
        headerIcon.style.color = "white";
        headerIcon.previousSibling.style.backgroundColor = "white";
        headerIcon.previousSibling.style.color = "#7e84a3";
      }
    }
  };
  const handleClickBar = (e) => {
    if (props.stateValue) {
      props.StateValueFunc();

      let headerIcon = e.currentTarget;
      if (!props.stateValue) {
        headerIcon.style.backgroundColor = "#7e84a3";
        headerIcon.style.color = "white";
        headerIcon.nextSibling.style.backgroundColor = "white";
        headerIcon.nextSibling.style.color = "#7e84a3";
      } else {
        headerIcon.style.backgroundColor = "#7e84a3";
        headerIcon.style.color = "white";
        headerIcon.previousSibling.style.backgroundColor = "white";
        headerIcon.previousSibling.style.color = "#7e84a3";
      }
    }
  };

  return (
    <Box className="chart-graph-header">
      <Typography component={"h2"}>{props.title}</Typography>
      <Typography component={"h2"}>{props.mid_title}</Typography>
      <Box className="chart-graph-buttons-and-select">
        <Box className="chart-graph-btn-container">
          <Button onClick={handleClickMap}>
            <BarChartIcon />
          </Button>
          <Button onClick={handleClickBar}>
            <FormatListBulletedIcon />
          </Button>
        </Box>
        <FormControl>
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
