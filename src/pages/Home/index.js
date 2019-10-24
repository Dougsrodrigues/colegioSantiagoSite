import React, { Component } from "react";

import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/fold-out-animation";
import { Carousel } from "./styles";
import foto1 from "../../images/image-0.png";
import foto2 from "../../images/image-1.png";
import foto3 from "../../images/image-2.png";
export default class Home extends Component {
  render() {
    const slider = (
      <AwesomeSlider cssModule={AwesomeSliderStyles}>
        <div data-src={foto1} />
        <div data-src={foto2} />
        <div data-src={foto3} />
      </AwesomeSlider>
    );
    return (
      <Carousel>
        <div>{slider}</div>
      </Carousel>
    );
  }
}
