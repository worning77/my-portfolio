import React from "react";
import styled from "styled-components";
const Content = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.3;
  margin: 0.5rem 0 0 0;
  @media (max-width: 1040px) {
    margin: 0;
  }
  @media (max-width: 1000px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 1rem;
  }
  @media (max-width: 415px) {
    text-align: left;
  }
`;
const High = styled.span`
  font-weight: 700;
  color: rgba(0, 0, 0, 0.9);
  margin: 0;
`;
const Desc2 = () => (
  <Content>
    After the failure of my previous product, I found myself in need of exposure
    to an actual tech company and fortunately I got an internship in{" "}
    <High>LesPark App — a social media network for lesbians</High>. During the
    internship, I gathered/analyzed information from users and began to do the
    'real' design work.
  </Content>
);
export default Desc2;
