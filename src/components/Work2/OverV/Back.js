import React from 'react'
import styled from 'styled-components'
const BackDiv = styled.div`
  max-width: 800px;
  margin: 0 auto 15rem auto;
`
const PicDiv = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: '';
    display: block;
    padding-top: 81.6%;
  }
  overflow: hidden;
  margin: 0;
`
const Pics = styled.img`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-self: center;
`
const BackLP = props => (
  <BackDiv>
    <PicDiv>
      <Pics src={props.pic1} />
    </PicDiv>
  </BackDiv>
)
export default BackLP
