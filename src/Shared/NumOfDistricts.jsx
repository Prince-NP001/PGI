import React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import "../styles/component/DistrictsBarChart.scss";

import "../styles/Home.scss";

import DistrictsBarChart from "./DistrictsBarChart";
import DistrictLineChart from "./DistrictLineChart";
import { Box, Container } from "@mui/material";

const NumOfDistricts = () => {
  return (
    <Box className="chart-graph">
      <Box className="chart-graph-content">
        <Container>
          <div className="charts-district" id="national-district-bar-chart">
            <DistrictsBarChart />
          </div>
          <div
            className="charts-and-graph-list-view"
            id="national-district-line-chart"
            style={{ display: "none" }}
          >
            <DistrictLineChart />
          </div>
        </Container>
      </Box>
    </Box>
  );
};

export default NumOfDistricts;
