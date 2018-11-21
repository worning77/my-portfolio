import React from 'react'
import styled from 'styled-components'
import {
  Container,
  Dates,
  BigTitle,
  SmallTitle,
  SmallsTitle,
  Ctext,
  Caotu1Div,
} from '../../layouts/Work-Styles'
import Sitemap from './Design/Sitemap'
import Sketch from './Design/Sketch'
import High1 from './Design/High1'
import High2 from './Design/High2'

const DesignDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const MiddleTitle = styled(SmallsTitle)`
  text-align: center;
`

const Design = () => (
  <Container>
    <DesignDiv>
      <Dates>Part 1</Dates>
      <BigTitle>Design part</BigTitle>
      <SmallTitle>Site map</SmallTitle>
      <Sitemap pic1={require('../../images/sitemap4.png')} />
      <Ctext>
        After discussing with my coworkers, and according to my previous idea,
        this tool should be as simple as the flow shows above. So I quickly draw
        the Sketches and High-Fidelity Design. After all, the hardest and most
        important part is the algorithm.
      </Ctext>
      <SmallTitle>Sketches & High-Fidelity Design</SmallTitle>
      <Sketch pic1={require('../../images/sketch4.png')} />
    </DesignDiv>
    <Caotu1Div>
      <MiddleTitle>Scanning process</MiddleTitle>
      <High1 pic1={require('../../images/high1.png')} />
      <MiddleTitle>Checking and sending exported Excels</MiddleTitle>
      <High2 pic1={require('../../images/high2.png')} />
    </Caotu1Div>
    <DesignDiv>
      <Ctext>下面贴一点代码</Ctext>
    </DesignDiv>
  </Container>
)
export default Design
