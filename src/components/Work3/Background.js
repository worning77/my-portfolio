import React from "react";
import styled from "styled-components";
import {
  Container,
  BigTitle,
  SmallTitle,
  Ctext,
  Ad,
  AdDiv,
  High
} from "../../layouts/Work-Styles";
import Problems from "./BackG/Problem";
import Concept from "./BackG/Ways";
import App4 from "./BackG/App";

const BackDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;
const Caotu1Div = styled.div`
  max-width: 1500px;
  margin: 0 auto 10rem auto;
  @media (max-width: 800px) {
    margin: 0 auto 5rem auto;
  }
  @media (max-width: 415px) {
    margin: 0 auto 3rem auto;
  }
`;
const BackGround = () => (
  <Container>
    <BackDiv>
      <BigTitle>Background</BigTitle>
      <SmallTitle>Problems</SmallTitle>
      <Ctext>
        It is common to spot that the price of hotels are ususlly high. The
        price of a single room in a motel near Renmin University (locates in the
        center of Beijing ) is more than 300 yuan per night. If someone wants to
        live for a month, it will be nearly ten thousand yuan. However, if
        someone wants to rent a house in the same location, the price of a
        two-room office with full living equipments is only 6000 yuan per month.
        On the other hand, such long-term renting is not for short term. And{" "}
        <High>
          more and more college students want to live off campus, especially for
          young couples
        </High>. <br />
        <br />
        <li>
          They hope to have private space{" "}
          <High>but most of them can't afford the exorbitant price</High>.
        </li>
        <br />
        <li>
          Meanwhile, <High>living in hotels is boring</High>. It is hard for
          them to have fun together.
        </li>
      </Ctext>
      <SmallTitle>Storyboard</SmallTitle>
      <Problems pic1={require("../../images/story.png")} />
      <AdDiv>
        <Ad>
          As a result, young student living in cities like Beijing with his/her
          half feels depressed, and the living cost is too high.
        </Ad>
      </AdDiv>
      <SmallTitle>Solution</SmallTitle>
      <Ctext>
        Since I used an App named Ziroom to rent my one-room apartment. And I
        found that Ziroom equipped everything necessary in the room and users
        can just take their luggages in without any concerns. Also, the price
        covers all the furniture, which is only about 5000 yuan per month. It's
        reasonable. And every month, users can have 4 times cleaning services
        for free! At the same time, every user can have a certain steward, who
        can solve some issues in the house. It's very convenient.<br />{" "}
        <High>
          Therefore, why can I imitate its model to make a short-term renting
          platform?
        </High>
        <br />
        Meanwhile, the price per day would be cheap enough, which is about 180
        yuan, even though I provide some services, like professional PC and
        household cleaning.
      </Ctext>
      <Concept pic1={require("../../images/concept.png")} />
      <Ctext>
        So, there are four part of this project:<br />
        <br />
        <li>
          Rules: I need to verify my concept of low price, making the price and
          designing the room rules.
        </li>
        <br />
        <li>
          Rooms: I need to perpare several well decroated rooms with the
          following aspects.
        </li>{" "}
        <br />
        <li>Service: The next is perpare the service above.</li> <br />
        <li>
          <High>Platform</High>: The last one is design the App which is the
          tool to connect all the ideas.
        </li>
      </Ctext>
    </BackDiv>
    <Caotu1Div>
      <App4 pic1={require("../../images/App4.png")} />
    </Caotu1Div>
  </Container>
);
export default BackGround;
