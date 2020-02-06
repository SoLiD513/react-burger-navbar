import React from "react";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Rotate from "react-reveal/Rotate";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Roll from "react-reveal/Roll";
import LightSpeed from "react-reveal/LightSpeed";
import Jump from "react-reveal/Jump";
import Flash from "react-reveal/Flash";
import HeadShake from "react-reveal/HeadShake";
import Jello from "react-reveal/Jello";
import Pulse from "react-reveal/Pulse";
import RubberBand from "react-reveal/RubberBand";
import Shake from "react-reveal/Shake";
import Spin from "react-reveal/Spin";
import Swing from "react-reveal/Swing";
import Tada from "react-reveal/Tada";
import Wobble from "react-reveal/Wobble";
import Reveal from 'react-reveal/Reveal';

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Zoom delay={1000} duration={3000}>
          <img
            src={logo}
            id="App-logo"
            // className="animated infinite bounceInLeft delay-2s"
            alt="logo"
          />
        </Zoom>
      </header>

      <header className="App-header">
        <Fade delay={1000} duration={3000}>
          <img
            src={logo}
            id="App-logo"
            // className="animated infinite bounceInLeft delay-2s"
            alt="logo"
          />
        </Fade>
      </header>

      <header className="App-header">
        <Flip delay={1000} duration={3000}>
          <img
            src={logo}
            id="App-logo"
            // className="animated infinite bounceInLeft delay-2s"
            alt="logo"
          />
        </Flip>
      </header>

      <header className="App-header">
        <Rotate delay={1000} duration={3000}>
          <img
            src={logo}
            id="App-logo"
            // className="animated infinite bounceInLeft delay-2s"
            alt="logo"
          />
        </Rotate>
      </header>

      <header className="App-header">
        <Bounce delay={1000} duration={3000}>
          <img
            src={logo}
            id="App-logo"
            // className="animated infinite bounceInLeft delay-2s"
            alt="logo"
          />
        </Bounce>
      </header>

      <header className="App-header">
        <Slide delay={1000} duration={3000}>
          <img
            src={logo}
            id="App-logo"
            // className="animated infinite bounceInLeft delay-2s"
            alt="logo"
          />
        </Slide>
      </header>

      <header className="App-header">
        <Roll delay={1000} duration={3000}>
          <img
            src={logo}
            id="App-logo"
            // className="animated infinite bounceInLeft delay-2s"
            alt="logo"
          />
        </Roll>
      </header>

      <header className="App-header">
        <LightSpeed delay={1000} duration={3000}>
          <img
            src={logo}
            id="App-logo"
            // className="animated infinite bounceInLeft delay-2s"
            alt="logo"
          />
        </LightSpeed>
      </header>

      <header className="App-header">
        <Jump delay={1000} duration={3000}>
          <img
            src={logo}
            id="App-logo"
            // className="animated infinite bounceInLeft delay-2s"
            alt="logo"
          />
        </Jump>
      </header>

      <header className="App-header">
        <Flash delay={1000} duration={3000}>
          <img
            src={logo}
            id="App-logo"
            // className="animated infinite bounceInLeft delay-2s"
            alt="logo"
          />
        </Flash>
      </header>

      <header className="App-header">
        <HeadShake delay={1000} duration={3000}>
          <img
            src={logo}
            id="App-logo"
            // className="animated infinite bounceInLeft delay-2s"
            alt="logo"
          />
        </HeadShake>
      </header>

      <header className="App-header">
        <Jello delay={1000} duration={3000}>
          <img
            src={logo}
            id="App-logo"
            // className="animated infinite bounceInLeft delay-2s"
            alt="logo"
          />
        </Jello>
      </header>

      <header className="App-header">
        <Pulse delay={1000} duration={3000}>
          <img
            src={logo}
            id="App-logo"
            // className="animated infinite bounceInLeft delay-2s"
            alt="logo"
          />
        </Pulse>
      </header>

      <header className="App-header">
        <RubberBand delay={1000} duration={3000}>
          <img
            src={logo}
            id="App-logo"
            // className="animated infinite bounceInLeft delay-2s"
            alt="logo"
          />
        </RubberBand>
      </header>

      <header className="App-header">
        <Shake delay={1000} duration={3000}>
          <img
            src={logo}
            id="App-logo"
            // className="animated infinite bounceInLeft delay-2s"
            alt="logo"
          />
        </Shake>
      </header>

      <header className="App-header">
        <Spin delay={1000} duration={3000}>
          <img
            src={logo}
            id="App-logo"
            // className="animated infinite bounceInLeft delay-2s"
            alt="logo"
          />
        </Spin>
      </header>

      <header className="App-header">
        <Swing delay={1000} duration={3000}>
          <img
            src={logo}
            id="App-logo"
            // className="animated infinite bounceInLeft delay-2s"
            alt="logo"
          />
        </Swing>
      </header>

      <header className="App-header">
        <Tada delay={1000} duration={3000}>
          <img
            src={logo}
            id="App-logo"
            // className="animated infinite bounceInLeft delay-2s"
            alt="logo"
          />
        </Tada>
      </header>

      <header className="App-header">
        <Wobble delay={1000} duration={3000}>
          <img
            src={logo}
            id="App-logo"
            // className="animated infinite bounceInLeft delay-2s"
            alt="logo"
          />
        </Wobble>
      </header>

      <header className="App-header">
        <Reveal effect="fadeInUp" effectOut="fadeOutLeft" delay={1000} duration={3000}>
          <img
            src={logo}
            id="App-logo"
            // className="animated infinite bounceInLeft delay-2s"
            alt="logo"
          />
        </Reveal>
      </header>

    </div>
  );
}

export default App;
