import React from "react";
import AboutPGI from "../../images/Home/about-pgi.gif";
import "../../styles/Home.css";

export default function AboutPGID() {
  return (
    <>
      <div className="left-about-section">
        <h1 className="sections-heading">About PGI-D</h1>
        <p className="sections-para">
          The Performance Grading Index is a tool to provide insights on the
          status of school education in districts including key levers that
          drive their performance and critical areas for improvement.
        </p>
        <p className="sections-para">
          Grading will allow all districts to occupy the highest level i.e Daksh
          I, at the same time which is a sign of fully developed nation.
        </p>
      </div>
      <div className="right-about-section">
        <img src={AboutPGI} alt="About PGI-D" />
      </div>
    </>
  );
}
