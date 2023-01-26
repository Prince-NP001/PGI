import React from "react";
import "../../styles/Banner.scss";
import FloaterFirstImage from "../../images/Home/banner-img1.svg";
import FloaterLastImage from "../../images/Home/banner-img8.png";
import Floater2ndImage from "../../images/Home/banner-img2.png";
import Floater2ndSvgImage from "../../images/Home/banner-img2-svg.svg";
import Floater3rdImage from "../../images/Home/banner-img3.png";
import Floater3rdSvgImage from "../../images/Home/banner-img3-svg.svg";
import Floater4thImage from "../../images/Home/banner-img4.png";
import Floater4thSvgImage from "../../images/Home/banner-img4-svg.svg";
import Floater5thImage from "../../images/Home/banner-img5.png";
import Floater5thSvgImage from "../../images/Home/banner-img5-svg.svg";
import Floater6thImage from "../../images/Home/banner-img6.png";
import Floater6thSvgImage from "../../images/Home/banner-img6-svg.svg";
import Floater7thImage from "../../images/Home/banner-img7.png";
import Floater7thSvgImage from "../../images/Home/banner-img7-svg.svg";

export default function SingleBannner(props) {
  return (
    <>
      {props.data.name == "first" || props.data.name == "last"
        ? BannnerType1(props.data)
        : BannnerType2(props.index, props.data)}
    </>
  );
}
function BannnerType1(data) {
  return (
    <div className="banner-page">
      {data.name == "first" ? floaterFirst(data) : floaterLast()}
    </div>
  );
}

function floaterFirst(data) {
  return (
    <div className="first-slider-page">
      <div className="left-part">
        <h1>{data.middlePara}</h1>
        <p>{data.rightText}</p>
      </div>
      <img src={FloaterFirstImage} alt="Analyzing Data via PGI Tool" />
    </div>
  );
}
function floaterLast() {
  return (
    <div className="last-slider-page">
      <img src={FloaterLastImage} alt="District PGI Grading" />
    </div>
  );
}

function BannnerType2(index, data) {
  return (
    <div className="banner-page banner-page-type2">
      <img
        src={
          index == 2
            ? Floater2ndImage
            : index == 3
            ? Floater3rdImage
            : index == 4
            ? Floater4thImage
            : index == 5
            ? Floater5thImage
            : index == 6
            ? Floater6thImage
            : Floater7thImage
        }
        alt=""
      />
      <div className="floater-type2-middle-part">
        <div className="floater-middle-circle-info">
          <img
            src={
              index == 2
                ? Floater2ndSvgImage
                : index == 3
                ? Floater3rdSvgImage
                : index == 4
                ? Floater4thSvgImage
                : index == 5
                ? Floater5thSvgImage
                : index == 6
                ? Floater6thSvgImage
                : Floater7thSvgImage
            }
            alt=""
          />
          <h2>{data.name}</h2>
          <p>{data.middlePara}</p>
        </div>
        <button className="floater-know-more-button">KNOW MORE</button>
      </div>

      <p>{data.rightText}</p>
    </div>
  );
}
