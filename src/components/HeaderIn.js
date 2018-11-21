import React from 'react'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import Link from 'gatsby-link'

import { BackIcon } from './icons'
const HeadDiv = styled.div`
  margin: 0 2rem;
  height: 100%;

  padding: 20px 0;
  @media (max-width: 640px) {
    padding: 15px 0;
  }
`
const HeadGroup = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-contents: center;
  position: relative;
`

const Work = styled.button`
  padding: 6px 8px;
  font-size: 20px;
  background: rgba(255, 255, 255, 0);
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 600;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  @media (max-width: 640px) {
    font-size: 18px;
  }
  @media (max-width: 415px) {
    font-size: 16px;
  }
`
const Home = styled(Work)``
const Title = styled.h2`
  margin: 0 0 0 7%;
  font-size: 30px;
  font-weight: 600;
  @media (max-width: 640px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    margin: 0;
  }
  @media (max-width: 415px) {
    font-size: 16px;
  }
`
const HeaderIn = props => (
  <Headroom
    style={{
      background: 'rgb(255,255,255)',
      boxShadow: '0px 4px 20px -11px rgba(0, 0, 0, 0.8)',
    }}
  >
    <HeadDiv>
      <Link
        className="work"
        style={{
          position: 'absolute',
          left: '5%',
          top: '35%',
        }}
        to="/page-2"
        replace
      >
        <BackIcon />
      </Link>
      <HeadGroup>
        <Title>{props.Name}</Title>
        <Link style={{ margin: '0 5% 0 auto' }} to="/page-2">
          <Work>Work</Work>
        </Link>
        <Link style={{ margin: '0' }} to="/">
          <Home>Home</Home>
        </Link>
      </HeadGroup>
    </HeadDiv>
  </Headroom>
)
export default HeaderIn
