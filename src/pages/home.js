import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import {
  HeroBack,
  IntroDiv,
  DrawContain,
  DescDiv,
  Words,
  Titles
} from "../layouts/Page2-Styles";

import Intruduction from "../components/Intrud2";
import DrawingDesc from "../components/Drawings/DrawingDes";
import Pic from "../components/Drawings/Draw";
import Abouts from "../components/Abouts";
import AtLast from "../components/Atlast";
import Explains from "../components/Explain";

const SecondPage = () => (
  <div style={{ height: "100%" }}>
    <Header />
    <HeroBack>
      <IntroDiv>
        <Intruduction
          name="This is Chenfeng Gao"
          text="I have always been aspiring to be both a visionary artist and a risk-taking entrepreneur. Majoring in mathematics in my undergraduate study laid a solid foundation for me to think logistically. The process of brainstorming ideas and visualizing them pushes me to learn and practice coding languages. My experiences of starting up a company and attempting to launch a product give me an entrepreneurial mindset. Knowing that graduate schools offering innovation education can further help me become a professional product designer with entrepreneurial spirit, I’m currently applying for programs such as Human Computer Interaction, in the graduate level."
          image={require("../images/123.png")}
          head={require("../images/head.jpg")}
        />
      </IntroDiv>
    </HeroBack>
    <div id="2">
      {" "}
      <DescDiv>
        <Words>
          <Titles> My Funfacts </Titles>
        </Words>
      </DescDiv>
    </div>
    <Abouts />
    <DrawingDesc />
    <DrawContain>
      <Pic
        real={require("../images/aisah.png")}
        paint={require("../images/Elsa.png")}
        name="Elsa"
        date="Dec 2015"
      />
      <Pic
        real={require("../images/xialuokebackground.png")}
        paint={require("../images/Sherlock.png")}
        name="Sherlock"
        date="Feb 2016"
      />
      <Pic
        real={require("../images/mygril.png")}
        paint={require("../images/Zhangyu.png")}
        name="My Girl"
        date="Jun 2017"
      />
      <Pic
        real={require("../images/testbackground.png")}
        paint={require("../images/test.png")}
        name="Jack"
        date="Feb 2016"
      />
      <Pic
        real={require("../images/malef.png")}
        paint={require("../images/Malefecent.png")}
        name="Maleficent"
        date="Jun 2016"
      />
      <Pic
        real={require("../images/green.png")}
        paint={require("../images/Eva.png")}
        name="Eva Green"
        date="Dec 2016"
      />
    </DrawContain>
    <Explains />
    <AtLast />
    <Footer />
  </div>
);

export default SecondPage;
