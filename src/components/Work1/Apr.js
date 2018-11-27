import React from "react";
import styled from "styled-components";
import {
  Container,
  BigTitle,
  Ctext,
  SmallTitle,
  Review,
  Dates,
  Ad,
  AdDiv
} from "../../layouts/Work-Styles";
import Gift from "./Apr/Gift";
import Road from "./Apr/road";

const DecDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;
const Apr = () => (
  <Container>
    <DecDiv>
      <Dates>April</Dates>
      <BigTitle>Business model</BigTitle>
      <Ctext>
        {" "}
        As for how to motivate users to answer others' questions, I came up with
        a function--Reward, which I thought could quantify the relationship.<br />
        <Review>
          ( In the beginning of 2016, Chinese were gradually developed a habit
          of paying for knowledge or resources on the Internet. So, I thought it
          was the right time to add the reward function in this one-on-one Q&A
          platform. )
        </Review>
      </Ctext>
      <Gift pic1={require("../../images/gift.png")} />
      <SmallTitle>Road Show 2016/27/4</SmallTitle>
      <Ctext>
        We got a chance to have a Road Show at InnoWay, Zhongguancun
      </Ctext>
      <Road pic1={require("../../images/luyan.png")} />
      <Ctext>
        Feedbacks from Investors: they want 需要看到有人在用我们的产品，at least
        this app has already covered RUC.
        需要知道未来变现模式，需要知道我们的风控。基本上所有投资人都是这个想法，要看到能立即变现的能力。{" "}
      </Ctext>
      <AdDiv>
        <Ad>
          "In 2016，even a perfect idea cannot get investment. Investors were
          not crazy like before anymore, they wanted any product could have the
          ability to make money instantly"
        </Ad>
      </AdDiv>
    </DecDiv>
  </Container>
);
export default Apr;
