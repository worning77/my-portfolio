import React from 'react'
import styled from 'styled-components'
import {
  Container,
  BigTitle,
  SmallTitle,
  Ctext,
} from '../../layouts/Work-Styles'
import Site from './Deisgn/Site'
import Sketch from './Deisgn/Sketch'
import Usertesting from './Deisgn/Testing'
import Move from './Deisgn/Move'

const DesignDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const FunDiv = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`
const SmallTil = styled(SmallTitle)`
  margin: 0 0 10rem auto;
`

const Design = () => (
  <Container>
    <DesignDiv>
      <BigTitle>Design process</BigTitle>
      <Ctext>
        For now, the main function of the App appears. Users can search for
        their apartment they like; they can use online store to buy something
        they need; a place users can check their journey, including the key and
        chating with the strward.
      </Ctext>
      <SmallTitle>Site map</SmallTitle>
      <Site pic1={require('../../images/sitemap.png')} />
      <SmallTitle>Main function 1: Booking </SmallTitle>
      <Sketch pic1={require('../../images/booking.png')} />
      <SmallTitle>Main function 2: Shopping </SmallTitle>
      <Sketch pic1={require('../../images/shopping.png')} />
      <SmallTitle>Main function 3: Checking the journey </SmallTitle>
      <Sketch pic1={require('../../images/check the journey.png')} />
      <SmallTitle>Wireframes & User testing</SmallTitle>
      <Ctext>
        Instead of using Axure to make the wirframes, this time I chose to draw
        them by pencil and paper. And indeed it was so fast, only taking me 2
        days. After that, I let some of my friends to imitate the process.
      </Ctext>
    </DesignDiv>
    <FunDiv>
      <Usertesting pic1={require('../../images/usertesting.png')} />
    </FunDiv>
    <DesignDiv>
      <Ctext>
        During the testing, it seemed that my friends had no issues. <br />So...
        I made the final design.
      </Ctext>
      <SmallTil>Final prototype</SmallTil>
      <Move
        pic1={require('../../images/fliter.gif')}
        pic2={require('../../images/pay.gif')}
        pic3={require('../../images/journey.gif')}
        pic4={require('../../images/chat.gif')}
      />
    </DesignDiv>
  </Container>
)
export default Design
