import React from "react";
import styled from "styled-components";
import {
  Container,
  BigTitle,
  SmallTitle,
  Ctext,
  AdDiv,
  Big
} from "../../layouts/Work-Styles";
import Persona from "./Reaserch/Persona";
import Scenario from "./Reaserch/Scenario";

const ResearchDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Ad = styled.p`
  text-align: center;
  font-size: 1.8rem;
  @media (max-width: 800px) {
    font-size: 1.1rem;
  }
  color: rgba(239, 128, 65, 1);
  font-weight: 350;
`;
const FunDiv = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

const Research = () => (
  <Container>
    <ResearchDiv>
      <BigTitle>Research part</BigTitle>
      <Ctext>
        <Big>In 2016</Big>, because this idea is a brand new Apartment of Hotel
        for young, I need to investigate the rule of price from two angles:
        traditional Hotels and convenient long-term apartment leasing platform,
        like Ziroom.
      </Ctext>
      <SmallTitle>Rules of price</SmallTitle>
      <Ctext>
        <li>
          As for traditional Hotels, I asked my friend's father, who runs
          several hotels in Shanghai. He told me the whole cost contains the
          price of the whole building, all the furniture and decoration, as well
          as the salary of staff. If considering one room of a new hotel, the
          time of recovering all the cost is not more than 2 years, because the
          whole price is not limited in the single room. Therefore, the price of
          hotle per night is high.{" "}
        </li>
        <br />
        <li>
          As for Ziroom, I knew from one staff from Ziroom. The company purchase
          house/apartment from someone who wants to lease it, then redecorating
          it in a new style, equipping all the basic furniture. Thus, the cost
          of such a single house/apartment just equals to the rent of it in
          market plus the cost of decoration and furniture. Meanwhile the goal
          of recovering time is 6 months, even though, the price of it per month
          seems not too much than the original market price.{" "}
        </li>
        <br />
        Well, now take my home for example. The whole cost of other household
        electrical appliances I brought, like oven and coffee machine, and I set
        the recovering time is 1 year. The average price of it per day is not
        more than 250 yuan. In this way, I think this idea might work. ( here I
        don't consider the vacancy rate in it. But if it works, the vacancy rate
        would be very low.)
      </Ctext>
      <SmallTitle>Rules of Days</SmallTitle>
      <Ctext>
        Considering most students complain about the check-out time is too
        early, based on the price I got above, and refering to the famous
        Edition THREE DAYS TO SEE. I'm going to set the limited time is 3 days 2
        nights. Let's see what romantic stories will happen in 3 days. ( Most
        current college young is the single child in their family, seldom doing
        the housework and cooking. It might be the chance for them to improve
        themselves as well as their relationship )
      </Ctext>
      <AdDiv>
        <Ad>
          Idea1.0: <br /> Now there is a brand new apartment of Hotel, which has
          high cost-effective. Young couples can live for 3 days 2 nights.{" "}
        </Ad>
      </AdDiv>
      <SmallTitle>User Research</SmallTitle>
      <Ctext>
        With this idea, I interviewed 4 friends with two parts of questions:
        About dating and About getting a room.
      </Ctext>
    </ResearchDiv>
    <FunDiv>
      <Persona
        pic1={require("../../images/W1.png")}
        pic2={require("../../images/L2.png")}
        pic3={require("../../images/B3.png")}
        pic4={require("../../images/H4.png")}
      />
    </FunDiv>
    <ResearchDiv>
      <SmallTitle>Customized services</SmallTitle>
      <Ctext>
        According to the persona, we can have the following special services:<br />
        <br />
        <li>Experiencing keeping pets</li> <br />
        <li>
          Providing online store, which contains several stuff for couples, and
          the delievery should within one day. (That means I need a storehouse
          near those apartments )
        </li>{" "}
        <br />
        <li>Steward can help do something to give surprise</li>
      </Ctext>
      <SmallTitle>Scenario</SmallTitle>
    </ResearchDiv>
    <FunDiv>
      <Scenario pic1={require("../../images/map.png")} />
    </FunDiv>
  </Container>
);
export default Research;
