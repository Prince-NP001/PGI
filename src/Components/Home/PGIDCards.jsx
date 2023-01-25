import React from "react";
import "../../styles/PGIDCategoriesStyling.css";
import Floater2ndSvgImage from "../../images/Home/banner-img2-svg.svg";
import Floater3rdSvgImage from "../../images/Home/banner-img3-svg.svg";
import Floater4thSvgImage from "../../images/Home/banner-img4-svg.svg";
import Floater5thSvgImage from "../../images/Home/banner-img5-svg.svg";
import Floater6thSvgImage from "../../images/Home/banner-img6-svg.svg";
import Floater7thSvgImage from "../../images/Home/banner-img7-svg.svg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function PGIDCards({ data }) {
  return (
    <div className="pgid-card">
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
