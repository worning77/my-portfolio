import React from 'react'
import styled from 'styled-components'
import { Container } from '../../layouts/Work-Styles'
import BackLP from './Over/Back'

const OverviewDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 150px;
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
const BckDiv = styled.div`
  max-width: 1800px;
  margin: 7rem auto 10rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const OverView = () => (
  <Container>
    <OverviewDiv>
      <Title>Programming</Title>
      <SubTitle>
        My first time to complete a real system to help a company improve
        efficiency.
      </SubTitle>
      <Text>
        There were two ways ahead of me after graduation: preparing English to
        study abroad or helping my father’s company. I didn’t care about his
        business because of heavy workload of study before. But now I had free
        time and decided to do something with my knowledge when I heard that he
        had some issues about checking accounts.
      </Text>
    </OverviewDiv>
    <BckDiv>
      <BackLP pic1={require('../../images/par1.png')} />
      <BackLP pic1={require('../../images/par2.png')} />
    </BckDiv>
  </Container>
)
export default OverView
