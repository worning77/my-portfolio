import React from 'react'
import styled from 'styled-components'
import {
  Container,
  BigTitle,
  Ctext,
  SmallTitle,
  High,
  Review,
  Dates,
  Names,
  Jieshis,
} from '../../layouts/Work-Styles'
import Gift from './Apr/Gift'
import Road from './Apr/road'

const DecDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const Ad = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-style: italic;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 350;
`
const AdDiv = styled.div`
  width: 65%;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.05), 0 -1rem 2rem rgba(0, 0, 0, 0.02);
  padding: 1% 5%;
  margin: 0 auto 3rem auto;
`

const Apr = () => (
  <Container>
    <DecDiv>
      <Dates>April</Dates>
      <BigTitle>Business model</BigTitle>
      <Ctext>
        {' '}
        As for how to motivate users to answer others' questions, I came up with
        a function--Reward, which I thought could quantify the relationship.<br />
        <Review>
          In the beginning of 2016, Chinese were gradually developed a habit of
          paying for knowledge or resources on the Internet. So, I thought it
          was the right time to add the reward function in this one-on-one Q&A
          platform.
        </Review>
      </Ctext>
      <Gift pic1={require('../../images/gift.png')} />
      <SmallTitle>Road Show 2016/27/4</SmallTitle>
      <Ctext>
        We got the chance to have a Road Show at InnoWay, Zhongguancun
      </Ctext>
      <Road pic1={require('../../images/luyan.png')} />
      <Ctext>
        Feedbacks from Investors: they want 需要看到有人在用我们的产品，at least
        this app has already covered RUC.
        需要知道未来变现模式，需要知道我们的风控。基本上所有投资人都是这个想法，要看到能立即变现的能力。{' '}
      </Ctext>
      <AdDiv>
        <Ad>
          "In 2016，even a perfect idea cannot get investment. Investors were
          not crazy like before anymore, they wanted any product could have the
          ability to make money instantly"
        </Ad>
      </AdDiv>
    </DecDiv>
  </Container>
)
export default Apr
