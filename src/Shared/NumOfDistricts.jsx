import React, { useEffect, useState } from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import "../styles/component/DistrictsBarChart.scss";

import "../styles/Home.scss";

import DistrictsBarChart from "./DistrictsBarChart";
import DistrictLineChart from "./DistrictLineChart";
import { Box, Container } from "@mui/material";
import SectionHeader from "../Components/Home/SectionHeader";

const NumOfDistricts = () => {
  const [handleClick, setHandleClick] = useState(true);
  const handleClickFunc = () => {
    setHandleClick(!handleClick);
  };
  return (
    <Box className="chart-graph" sx={{ padding: "10px 0" }}>
      <Box className="chart-graph-content">
        <SectionHeader
          title="Number of Districts in Different Grades of PGI-District (National)"
          ClickTrigger={handleClickFunc}
          chartOrListTrigger={handleClick}
        />
        <Container>
          {!handleClick ? (
            <div className="charts-district" id="national-district-bar-chart">
              <DistrictLineChart />
            </div>
          ) : (
            <div
              className="charts-and-graph-list-view"
              id="national-district-line-chart"
            >
              <DistrictsBarChart />
            </div>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default NumOfDistricts;
