import React from 'react'
import styled from 'styled-components'
import {
  Container,
  BigTitle,
  SmallTitle,
  Ctext,
} from '../../layouts/Work-Styles'
import IntroP from './Intro/IntroP'
import Dissteps from './Intro/Dissteps'

const IntroDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Introduction = () => (
  <Container>
    <IntroDiv>
      <BigTitle>Introduction</BigTitle>
      <Ctext>
        As a cement distributor, we connect the cement factories and
        construction sites. Here is the projects we got from 2017 to 2018.
      </Ctext>
      <IntroP pic1={require('../../images/jieshao.png')} />
    </IntroDiv>
    <IntroDiv>
      <Ctext>
        Apart from the aspects of tender and financial affairs, the whole steps
        of our company is like this:
      </Ctext>
      <Dissteps pic1={require('../../images/dissteps.png')} />
      <Ctext>
        During the year of working, I've done two different projects. One is to
        increase the efficiency in step 6, the other is redesign the existing
        App we used in the step 1 and 2.
      </Ctext>
    </IntroDiv>
  </Container>
)
export default Introduction
