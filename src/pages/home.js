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
          text="Thank you for giving this wonderful opportunity to me to introduce
            myself to you. I am (Your Name). We are five members in my family
            including me. I am native to (City Name), and open to relocate to
            (city name as mentioned in the job description). Currently, I am
            pursuing (or completed) B.B.M in Marketing at the (University Name),
            and I will be entering into final year of my graduation studies in
            the next couple of months. Ever since, I started studying Marketing
            in my school days. I realized, I enjoy analyzing things connected to
            the society, the Mother Nature, and love to travel."
          image={require("../images/123.png")}
          head={require("../images/head.jpg")}
        />
      </IntroDiv>
    </HeroBack>
    <DescDiv>
      <Words>
        <Titles> My Funfacts </Titles>
      </Words>
    </DescDiv>
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
