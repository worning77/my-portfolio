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
      <Titles>Recently doings</Titles>
      <Text>
        I used gatsby JS v1.9 when I first started to build this site. Till now,
        I am learning the basic knowledge about front-end development. One day,
        I fund gatsby upgraded to V2, which is totally different from v1, and
        the profermence is better, and its img components have laze-load effect,
        more powerful. Therefore, since Nov.2018, I started to build a new site
        with gatsby2.0, and improve my programming skills.{" "}
      </Text>
    </Words>
  </DescDiv>
);

export default Explains;
