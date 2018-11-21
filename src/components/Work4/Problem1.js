import React from 'react'
import styled from 'styled-components'
import {
  Container,
  Dates,
  BigTitle,
  SmallTitle,
  SmallsTitle,
  Ctext,
} from '../../layouts/Work-Styles'
import Checksteps from './Problem1/Checkstep'
import Caotu from './Problem1/Caotu'
import Example4 from './Problem1/Example4'

const ProblemDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const MiddleTitle = styled(SmallsTitle)`
  text-align: center;
`

const Problem1 = () => (
  <Container>
    <ProblemDiv>
      <Dates>Part 1</Dates>
      <BigTitle>Solve the problems about checking accounts</BigTitle>
      <Ctext>
        Expanding the step 6 above, the checking process has three parts:
      </Ctext>
      <Checksteps pic1={require('../../images/checkstep.png')} />
      <SmallTitle>Problem</SmallTitle>
      <Ctext>
        At first, we had very few sites to serve, manually checking and inputing
        all the data was relatively easy. But now, we have more than 20
        construction sites, 4 cooperating transport companies, which make the
        efficiency very low.
      </Ctext>
      <Caotu pic1={require('../../images/lizi.png')} />
      <Ctext>
        Besides, different sites have different standard, which means the
        receipt tickets have various forms, accordingly increasing the
        difficulty of checking.
      </Ctext>
      <Caotu pic1={require('../../images/jieshi.png')} />
      <Ctext>
        Previously I thought I could use some data methods I learned in college
        to deal with the numbers. Well now, things were totally different, I
        need to do more.{' '}
      </Ctext>
      <SmallTitle>Solution</SmallTitle>
      <Ctext>
        My father let me to manage one project site. During the work, I planned
        to make an APP to increase efficiency, by using Optical Character
        Recognition ( OCR ) and python to automatically export to Excels.{' '}
      </Ctext>
      <MiddleTitle>Ideal product</MiddleTitle>
      <Example4 pic1={require('../../images/example4.gif')} />
      <Ctext>
        After I finished the algorithm on Python, I used it on computer and
        successfuly increased the efficiency of my part of work.{' '}
      </Ctext>
      <MiddleTitle>Demo</MiddleTitle>
      <Ctext>
        Now, I am still trying to improve the performance of this function to
        adapt all kinds of tickets and finally make it as an real mobile APP.{' '}
      </Ctext>
    </ProblemDiv>
  </Container>
)
export default Problem1
