import React, { useRef } from "react";
import "../../styles/PGIDCategoriesStyling.scss";
import { useInView } from "react-intersection-observer";
import { ReactComponent as Floater2ndSvgImage } from "../../images/Home/banner-img2-svg.svg";
import { ReactComponent as Floater3rdSvgImage } from "../../images/Home/banner-img3-svg.svg";
import { ReactComponent as Floater4thSvgImage } from "../../images/Home/banner-img4-svg.svg";
import { ReactComponent as Floater5thSvgImage } from "../../images/Home/banner-img5-svg.svg";
import { ReactComponent as Floater6thSvgImage } from "../../images/Home/banner-img6-svg.svg";
import { ReactComponent as Floater7thSvgImage } from "../../images/Home/banner-img7-svg.svg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export default function PGIDCards({ data }) {
  const { ref: TopRef, inView: TopRefActive } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      className={`pgid-card ${TopRefActive ? "animateTop" : ""}`}
      ref={TopRef}
    >
      {data.srno === 1 ? (
        <Floater6thSvgImage />
      ) : data.srno === 2 ? (
        <Floater4thSvgImage />
      ) : data.srno === 3 ? (
        <Floater2ndSvgImage />
      ) : data.srno === 4 ? (
        <Floater7thSvgImage />
      ) : data.srno === 5 ? (
        <Floater5thSvgImage />
      ) : (
        <Floater3rdSvgImage />
      )}
      <h2>{data.name}</h2>
      <p>{data.para}...</p>
      <span>
        More Insights <ChevronRightIcon className="right-icon" />
      </span>
    </div>
  );
}
