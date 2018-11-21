import React from 'react'
import styled from 'styled-components'
import OverView from '../Overview'
const SubT = styled.h4`
  font-size: 1.3rem;
  margin: 0;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
`
const Title = styled.h1`
  font-size: 2rem;
  margin: 0 0 2rem 0;
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
`
const CardDiv = styled.div`
  max-width: 1000px;
  margin: 3rem auto;
`
const Card = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: '';
    display: block;
    padding-top: 50%;
  }
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.05), 0 -1rem 2rem rgba(0, 0, 0, 0.02);
  margin: 0 auto;
  overflow: hidden;
`
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
`
const Content = styled.p`
  font-size: 1.5rem;
  margin: 0;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.5;
  display: flex;
  flex-direction: column;
`

const BigStart = styled.div`
  font-size: 3rem;
  color: rgba(0, 0, 0, 0.5);
  line-height: 0;
`
const BigEnd = styled.div`
  font-size: 3rem;
  align-self: flex-end;
  color: rgba(0, 0, 0, 0.5);
  line-height: 0;
`
const QDiv = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
`
const QCard = styled.div`
  position: relative;
  width: 15%;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.05), 0 -1rem 2rem rgba(0, 0, 0, 0.02);
  margin: 0;
  overflow: hidden;
`
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
`
const QuesDiv = styled.div`
  width: 85%;
  padding: 0 2% 0 5%;
`
const Quest = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: rgba(239, 128, 65, 1);
`

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
)
export default Story
