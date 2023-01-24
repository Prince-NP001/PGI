import React, { useState, useEffect } from "react";
import Banner from "./Bannner.jsx";
import "../../styles/Home.css";
import IndiaMaps from "./IndiaMaps.jsx";
import IndiaBarChart from "./IndiaBarChart.jsx";
import BarChartIcon from "@mui/icons-material/BarChart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import NationalListView from "./NationalListView.jsx";
import AboutPGID from "./AboutPGID.jsx";
import PGIDCategories from "./PGIDCategories.jsx";

export default function Home() {
  const [Slider_position, setSlider_position] = useState(0);
  var slider_timeout;
  useEffect(() => {
    // slider_timeout = setTimeout(() => {
    //   right_slider_push_button(true);
    // }, 4000);
  }, [Slider_position]);

  useEffect(() => {
    document.querySelector(".banner-slider").style.height =
      "calc(" +
      document.querySelector(".home-banner-slider").getBoundingClientRect()
        .height +
      "px + 30px)";

    console.log(
      document.querySelector(".home-banner-slider").getBoundingClientRect()
        .height
    );
  }, []);

  const left_slider_push_button = () => {
    if (Slider_position >= 0) {
      setSlider_position(0);
      document.querySelector(".home-banner-slider").style.transform =
        "translateX(0)";
    } else {
      document.querySelector(".home-banner-slider").style.transform =
        "translateX(calc(" + Slider_position + "vw + 100vw))";
      setSlider_position(Slider_position + 100);
    }
  };
  const right_slider_push_button = (type = false) => {
    if (type && Slider_position === -700) {
      setSlider_position(0);
      document.querySelector(".home-banner-slider").style.transform =
        "translateX(0)";
    } else {
      // clearTimeout(slider_timeout);
      document.querySelector(".home-banner-slider").style.transform =
        "translateX(calc(" + Slider_position + "vw - 100vw))";
      setSlider_position(Slider_position - 100);
    }
  };

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
    <>
      <section className="banner-slider">
        <button
          disabled={Slider_position == 0}
          onClick={left_slider_push_button}
          className="slider-push-button"
        >
          &larr;
        </button>
        <div className="home-banner-slider">
          {data.map((e) => {
            return <Banner key={e.id} index={e.id} data={e} />;
          })}
        </div>
        <button
          disabled={Slider_position == -700}
          onClick={right_slider_push_button}
          className="slider-push-button"
        >
          &rarr;
        </button>
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
    </>
  );
}

const MapColorBar = (props) => {
  console.log(props.data.color);
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

let data = [
  {
    id: 1,
    name: "first",
    middlePara: "Analyzing Data via PGI Tool",
    rightText:
      "The Govt. of India is implementing the Performance Grading Index (PGI) tool to determine the progress of states and districts in India.",
  },
  {
    id: 2,
    name: "Outcomes",
    middlePara: "",
    rightText:
      "Domains covered under this category are mainly Learning Outcomes & Quality (LOQ), Access Outcomes (AO) and Teacher Availability & Professional Development Outcome (TAPDO). The indicators in these domains mainly deal with the net enrolment ratio, Retention rate, Transition rate, trained teachers availability, pupil teacher ratio and performance of students in Language and Mathematics in standard 3, 5, 8 and 10 of Govt. and aided schools.",
  },
  {
    id: 3,
    name: "ECT",
    middlePara: "Effective Classroom Transaction",
    rightText:
      "This category majorly deals with Learning Management (LM) and Learning Enrichment Activities (LEA). Key indicators for measurement are conduction of regular formative assessments, utilization of learning material in classroom transactions and participation in national flagship programmes like Swachh Bharat and Jal Suraksha, FIT India , Ek Bharat Shresth Bharat and Nagrik Kartavya Palan Abhiyan/ Constitution Day.",
  },
  {
    id: 4,
    name: "IF&SE",
    middlePara: "Infrastructure, Facilities, Student Entitlements",
    rightText:
      "The domains and indicators in this domain are mainly related to infrastructure in schools to enable adequate facilities for teaching and learning. These include availability of study material, school uniform, CWSN aid & appliances, scholarships and incentives to girls Science and Computer laboratories at secondary and senior secondary level, libraries, library books, kitchen garden, sports equipments etc.",
  },
  {
    id: 5,
    name: "SS&CP",
    middlePara: "School Safety and Child Protection",
    rightText:
      "School Safety and Child Protection category primarily defines domains and indicators that cater the protection and safety of children in schools. This category pinpoints availability of qualified Child Counsellor/ Psychologist, conduction of sensitization programme for teachers, staff, parents and students, readiness for School Disaster Management Plan and conducting regular health check-up and maintaining health-card.",
  },
  {
    id: 6,
    name: "DL",
    middlePara: "Digital Learning",
    rightText:
      "The domains and indicators in this category primarily deal with key areas that effect learning of children in digital mode. It includes internet facility for pedagogical purposes, computer-assisted teaching learning facility and Student-to-Computer Ratio.",
  },
  {
    id: 7,
    name: "GP",
    middlePara: "Governance Processes",
    rightText:
      "This category deals with indicators relating to management and administration of school education. This includes Samagra Siksha Funds utilisation, Performance and training of cluster resource coordinators, Attendance monitoring and training and availability of head teachers and principals.",
  },
  { id: 8, name: "last", middlePara: "", rightText: "" },
];

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
