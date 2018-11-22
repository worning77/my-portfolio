import React from "react";
import styled from "styled-components";

const SubT = styled.h4`
  font-size: 1.3rem;
  margin: 0;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  @media (max-width: 800px) {
    font-size: 0.9rem;
  }
`;
const Title = styled.h1`
  font-size: 2rem;
  margin: 0 0 2rem 0;
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
  @media (max-width: 800px) {
    font-size: 1.3rem;
    margin: 0 0 1rem 0;
  }
  @media (max-width: 640px) {
    margin: 0 0 0.5rem 0;
  }
`;
const CardDiv = styled.div`
  max-width: 1000px;
  margin: 3rem auto;
  @media (max-width: 640px) {
    margin: 1rem auto;
  }
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: "";
    display: block;
    padding-top: 50%;
  }
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.05), 0 -1rem 2rem rgba(0, 0, 0, 0.02);
  margin: 0 auto;
  overflow: hidden;
`;
const Mask = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 5%;
  background: url(${props => props.image});
  background-size: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  @media (max-width: 415px) {
    padding: 1%;
  }
`;
const Content = styled.p`
  font-size: 1.5rem;
  margin: 0;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    font-size: 1.3rem;
  }
  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

const BigStart = styled.div`
  font-size: 3rem;
  color: rgba(0, 0, 0, 0.5);
  line-height: 0;
  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;
const BigEnd = styled.div`
  font-size: 3rem;
  align-self: flex-end;
  color: rgba(0, 0, 0, 0.5);
  line-height: 0;
  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;
const QDiv = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
`;
const QCard = styled.div`
  position: relative;
  width: 15%;
  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.05), 0 -1rem 2rem rgba(0, 0, 0, 0.02);
  margin: 0;
  overflow: hidden;
  @media (max-width: 800px) {
    width: 10%;
  }
`;
const Qmask = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(${props => props.image});
  background-size: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  opacity: 0.8;
`;
const QuesDiv = styled.div`
  width: 85%;
  padding: 0 2% 0 5%;
`;
const Quest = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: rgba(239, 128, 65, 1);
  margin: 1%;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

const Story = props => (
  <div>
    <CardDiv>
      <Card>
        <Mask image={props.image}>
          <SubT>{props.subtitle}</SubT>
          <Title>{props.title}</Title>
          <Content>
            <BigStart>"</BigStart>
            {props.text}
            <BigEnd>"</BigEnd>
          </Content>
        </Mask>
      </Card>
    </CardDiv>
    <QDiv>
      <QCard>
        <Qmask image={props.back} />
      </QCard>
      <QuesDiv>
        <Quest>{props.question}</Quest>
      </QuesDiv>
    </QDiv>
  </div>
);
export default Story;
