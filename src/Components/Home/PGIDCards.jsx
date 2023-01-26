import React, { useRef } from "react";
import "../../styles/PGIDCategoriesStyling.scss";
import { useInView } from "react-intersection-observer";
import Floater2ndSvgImage from "../../images/Home/banner-img2-svg.svg";
import Floater3rdSvgImage from "../../images/Home/banner-img3-svg.svg";
import Floater4thSvgImage from "../../images/Home/banner-img4-svg.svg";
import Floater5thSvgImage from "../../images/Home/banner-img5-svg.svg";
import Floater6thSvgImage from "../../images/Home/banner-img6-svg.svg";
import Floater7thSvgImage from "../../images/Home/banner-img7-svg.svg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export default function PGIDCards({ data }) {
  const { ref: leftRef, inView: leftRefActive } = useInView();
  const { ref: RightRef, inView: RightRefActive } = useInView();
  const { ref: TopRef, inView: TopRefActive } = useInView();

  return (
    <div
      className={`pgid-card ${
        leftRefActive && data.srno % 3 == 1
          ? "animateLeft"
          : RightRefActive && data.srno % 3 == 0
          ? "animateRight"
          : TopRefActive
          ? "animateTop"
          : ""
      }`}
      ref={
        data.srno % 3 == 1 ? leftRef : data.srno % 3 == 0 ? RightRef : TopRef
      }
    >
      <img
        src={
          data.srno == 1
            ? Floater6thSvgImage
            : data.srno == 2
            ? Floater4thSvgImage
            : data.srno == 3
            ? Floater2ndSvgImage
            : data.srno == 4
            ? Floater7thSvgImage
            : data.srno == 5
            ? Floater5thSvgImage
            : Floater3rdSvgImage
        }
        alt="Image"
      />
      <h2>{data.name}</h2>
      <p>{data.para}...</p>
      <span>
        More Insights <ChevronRightIcon className="right-icon" />
      </span>
    </div>
  );
}
