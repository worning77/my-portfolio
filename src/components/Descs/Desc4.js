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
const Desc4 = () => (
  <Content>
    After graduation, with my maths background, I hoped to help my father’s
    business—<High>cement distributor for high way sites</High>. By the means of
    data analyze, I solved the order issues and increased the effectiveness of
    account checking to the greatest extend; and also I redesigned the dealing
    process based on the Internet.
  </Content>
);
export default Desc4;
