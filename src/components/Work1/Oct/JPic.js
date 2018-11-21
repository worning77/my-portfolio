import React from 'react'
import styled from 'styled-components'
const PDiv = styled.div`
  display: grid;
  grid-template-rows: 2fr auto;
  margin: 2rem auto 3rem auto;
`
const Jdiv = styled.div`
  width: 100%;
  display: flex;
`
const Div = styled.div`
  position: relative;
  width: 35%;
  &:before {
    content: '';
    display: block;
    padding-top: 150%;
  }
  overflow: hidden;
  margin: 0 auto;
`
const JPics = styled.img`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-self: center;
`
const Text = styled.p`
  margin: 3rem auto;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 350;
`
const JPic = props => (
  <PDiv>
    <Jdiv>
      <Div>
        <JPics src={props.pic1} />
      </Div>
      <Div>
        <JPics src={props.pic2} />
      </Div>
    </Jdiv>
    <Text>
      Xiaojue Tian led the tech team finish the main function in Android.
    </Text>
  </PDiv>
)
export default JPic
