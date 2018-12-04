import React from "react";
import styled from "styled-components";
import { Titles } from "../layouts/Page2-Styles";
const DescDiv = styled.div`
  margin: 3rem 2rem 0 2rem;
  @media (max-width: 640px) {
    margin: 1rem 1rem 0 1rem;
  }
`;
const Words = styled.div`
  max-width: 1200px;
  margin: auto;
  height: auto;
  display: grid;
  grid-template-rows: repeat(2, auto);
`;

const Text = styled.p`
  margin: 1rem auto 0 1rem 0;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.4rem;
  line-height: 1.7;
  @media (max-width: 640px) {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  @media (max-width: 415px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const Explains = () => (
  <DescDiv>
    <Words>
      <Titles>What Keeps Me Busy:</Titles>
      <Text>
        <li>
          I built this site by using Gatsby JS V.1.9. By migrating from V. 1.9
          to V2, I hope this site can present a better performance.
        </li>{" "}
        <br />
        <li>
          Plus, I’m having an internship in AI Institute, Sinovation ventures in
          Beijing and the daily routine is exciting as usual.
        </li>
      </Text>
    </Words>
  </DescDiv>
);

export default Explains;
