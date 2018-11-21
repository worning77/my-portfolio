import React from 'react'
import styled from 'styled-components'
const Content = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.3;
  margin: 0.5rem 0 0 0;
  @media (max-width: 1040px) {
    margin: 0;
  }
  @media (max-width: 1000px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 1rem;
  }
  @media (max-width: 415px) {
    font-size: 0.9rem;
    font-weight: 400;
    text-align: left;
  }
`
const High = styled.span`
  font-weight: 700;
  color: rgba(0, 0, 0, 0.9);
  margin: 0;
`
const Desc2 = () => (
  <Content>
    After one-year "unsuccessful" working, as a leader, I found myself really
    enjoyed dealing with information from users to design product. Wishing to
    get improved from some professional companies, I got a chance to work with
    the team of <High>LesPark App—A social media network for Lesbians</High>. I
    began to do the 'real' design work.
  </Content>
)
export default Desc2
