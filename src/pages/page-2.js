import React from "react";
import Link from "gatsby-link";
import Cards from "../components/Cards";
import Descs from "../components/Descs";
import Desc1 from "../components/Descs/Desc1";
import Desc2 from "../components/Descs/Desc2";
import Desc3 from "../components/Descs/Desc3";
import Desc4 from "../components/Descs/Desc4";
import Intruduction from "../components/Intrud";
import MyWay from "../components/MyWay";
import MyWayEnd from "../components/MyWayEnd";
import Next from "../components/Next";
import Footer from "../components/Footer";
import Header from "../components/header";
import {
  HeroBack,
  Container,
  CardGroup,
  Banner,
  BannerBack,
  BannerBack2
} from "../layouts/Page2-Styles";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const IndexPage = () => (
  <div>
    <Header />
    <HeroBack>
      <Intruduction
        name="Chenfeng Gao"
        image={require("../images/123.png")}
        head={require("../images/head.jpg")}
      />
    </HeroBack>

    <Banner>
      <BannerBack src={require("../images/1165.jpg")} />

      <MyWay
        title="My Journey to HCI"
        text="When I was a sophomore, my friends and I were trying to put the programming knowledge learned in class into practice and started our business from scratch. The process was tough and we didn’t make it, but I gradually found where my real passion was."
      />
    </Banner>

    <CardGroup>
      <Container data-aos="fade-up" data-aos-offset="0" data-aos-duration="150">
        <Link className="Project1" to="/work1">
          <Cards
            name="The First one"
            newDate="2015-2016"
            image={require("../images/wallpaper.png")}
          />
        </Link>
        <Descs
          title="The First One"
          role="Leader"
          kind="Startup"
          way="Business Modle"
        >
          <Desc1 />
        </Descs>
      </Container>

      <Container
        data-aos="fade-up"
        data-aos-offset="-100"
        data-aos-duration="150"
      >
        <Link className="Project2" to="/work2">
          <Cards
            name="Internship"
            newDate="Nov.2016-Jan.2017"
            image={require("../images/cover2.png")}
          />
        </Link>
        <Descs
          title="Internship"
          role="Designer"
          kind="UI Design"
          way="Standard"
        >
          <Desc2 />
        </Descs>
      </Container>

      <Container
        data-aos="fade-up"
        data-aos-offset="-200"
        data-aos-duration="150"
      >
        <Link className="Project3" to="/work3">
          <Cards
            name="Idea From Living"
            newDate="Jul.2017"
            image={require("../images/cover3.png")}
          />
        </Link>
        <Descs
          title="Idea From Living"
          role="Product"
          kind="UX Design"
          way="Case Study"
        >
          <Desc3 />
        </Descs>
      </Container>

      <Container
        data-aos="fade-up"
        data-aos-offset="-300"
        data-aos-duration="150"
      >
        <Link className="Project4" to="/work4">
          <Cards
            name="Numbers"
            newDate="Sep.2017-May.2018"
            text="Work experience"
            image={require("../images/wallpaper4.jpg")}
          />
        </Link>
        <Descs title="Numbers" role="Data" kind="User Research" way="Code">
          <Desc4 />
        </Descs>
      </Container>
    </CardGroup>

    <Banner data-aos="fade-up" data-aos-offset="-350" data-aos-duration="150">
      <BannerBack2 src={require("../images/3499.jpg")} />
      <MyWayEnd
        title="... I wanna be better"
        text="After years of experiences, I still wasn’t satisfied with myself. When I did user researches and design work, I always followed my intuition or methods on the Internet. These fragmented knowledge, however, stopped me from seeing the higher scope. For now, I’m ready to get some professional training.  "
      />
    </Banner>

    <Next />

    <Footer />
  </div>
);

export default IndexPage;
