import React from 'react'
import styled from 'styled-components'
import { Container } from '../../layouts/Work-Styles'

import Back from './BackStory/Backp'

const BackDiv = styled.div`
  max-width: 1800px;
  margin: 0 auto 3rem auto;
`
const OverviewDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 200px;
  text-align: center;
  @media (max-width: 1600px) {
    padding-top: 100px;
  }
`
const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.7);
  @media (max-width: 1100px) {
    font-size: 3rem;
  }
  @media (max-width: 800px) {
    font-size: 2rem;
  }
`
const SubTitle = styled.h4`
  margin: 1rem 0;
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 400;
  @media (max-width: 1100px) {
    font-size: 1.5rem;
  }
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`

const Text = styled.p`
  margin: 2rem 0;
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 400;
  @media (max-width: 1100px) {
    font-size: 1.8rem;
  }
  @media (max-width: 800px) {
    font-size: 1.3rem;
  }
`

const OverView = () => (
  <Container>
    <OverviewDiv>
      <Title>The First One</Title>
      <SubTitle>
        My first trail to the Internet field, meanwhile the priceless experience
        to my life
      </SubTitle>
      <Text>
        After nearly one-year challenge, starting from a big idea, we made some
        achievement by learning from experiences, even though due to some
        reasons from both inside and outside, which led our product failed to
        released. This is my story about how to make the knowledge distribute
        among the college students, and create a valuable social network.
      </Text>
    </OverviewDiv>
    <BackDiv>
      <Back image={require('../../images/background0.png')} />
    </BackDiv>
  </Container>
)
export default OverView
