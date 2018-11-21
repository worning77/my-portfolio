import React from 'react'
import styled from 'styled-components'
import { Container, SmallTitle } from '../../layouts/Work-Styles'

const OverviewDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const PicDiv = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: '';
    display: block;
    padding-top: 50%;
  }
  overflow: hidden;
  background: url(${props => props.image});
  background-size: cover;
  overflow: hidden;
  margin: 0 0 10rem 0;
`
const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.7);
  text-align: center;

  @media (max-width: 1100px) {
    font-size: 3rem;
  }
  @media (max-width: 800px) {
    font-size: 2rem;
  }
`
const Text = styled.p`
  margin: 2rem 0 15rem 0;
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 400;
  text-align: center;
  @media (max-width: 1100px) {
    font-size: 1.8rem;
  }
  @media (max-width: 800px) {
    font-size: 1.3rem;
  }
`

const Overview = props => (
  <div>
    <PicDiv image={props.image} />
    <Container>
      <OverviewDiv>
        <Title>Idea from living</Title>
        <Text>
          During the last two years of my college time, I rented a small
          apartment with full living equipments near my university to do my work
          more conveniently. Later my girlfriend moved in, cooking and living
          together. Since then, I was thinking neither the hotels nor long-term
          leasing apartment can satisfy young college students' needs — they
          were too expensive. This is the story of a living project for young
          couples in developed cities, like Beijing, Shanghai, Guangzhou.
        </Text>
      </OverviewDiv>
    </Container>
  </div>
)
export default Overview
