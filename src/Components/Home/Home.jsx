import React, { useState } from "react";
import Banner from "./Bannner.jsx";
import "../../styles/Home.css";

export default function Home() {
  const [Slider_position, setSlider_position] = useState(0);

  const left_slider_push_button = () => {
    document.querySelector(".home-banner-slider").style.transform =
      "translateX(calc(" + Slider_position + "vw - 100vw))";
    setSlider_position(Slider_position + 100);
  };
  const right_slider_push_button = () => {
    document.querySelector(".home-banner-slider").style.transform =
      "translateX(calc(" + Slider_position + "vw + 100vw))";
    setSlider_position(Slider_position + 100);
  };

  return (
    <>
      <section className="banner-slider">
        <button
          onClick={left_slider_push_button}
          className="slider-push-button"
        >
          &larr;
        </button>
        <div className="home-banner-slider">
          {[
            { id: 1, name: "first" },
            { id: 2, name: "outcomes" },
            { id: 3, name: "ect" },
            { id: 4, name: "if&se" },
            { id: 5, name: "ss&cp" },
            { id: 6, name: "dl" },
            { id: 7, name: "gp" },
            { id: 8, name: "last" },
          ].map((e) => {
            return <Banner key={e.id} index={e.id} name={e.name} />;
          })}
        </div>
        <button
          onClick={right_slider_push_button}
          className="slider-push-button"
        >
          &rarr;
        </button>
      </section>
    </>
  );
}
