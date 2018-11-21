import React from 'react'
import styled from 'styled-components'
import Gif from './Gif'
import { Ctext, High2 } from '../../../layouts/Work-Styles'

const ShowDiv = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 5rem;
  margin: 0 auto 10rem auto;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`
const GifDiv = styled.div`
  @media (max-width: 1100px) {
    width: 375px;
    justify-self: center;
  }
`
const Overview = styled.div`
  align-self: center;
`
const Title = styled.h2`
  font-size: 3rem;
  color: rgba(0, 0, 0, 0.8);
  margin: 0 auto 3rem 0;
  text-align: left;
`
const Subtitle = styled.h2`
  font-size: 2.2rem;

  color: rgba(0, 0, 0, 0.8);
  margin: 0;
  text-align: center;
`

const Show = () => (
  <ShowDiv>
    <Overview>
      <Title>
        This is the story of my internship — design the <High2>Me Page</High2>{' '}
        of 6.0 version.
      </Title>
      <Ctext>
        When I finished my unsuccessful last startup experience, I decided to
        take some internship in Tech company to develop my all-around skills,
        since the biggest reason for my failure was unprofessional. Luckily, I
        found one of my alumni’s company was hiring, and their App was right in
        the social network field. During the intern, I almost involved in every
        part of the company, the design process and using data spider…{' '}
      </Ctext>
      <Subtitle>
        Me Page - <High2>LesPark</High2>
      </Subtitle>
    </Overview>
    <GifDiv>
      <Gif pic1={require('../../../images/move.gif')} />
    </GifDiv>
  </ShowDiv>
)
export default Show
