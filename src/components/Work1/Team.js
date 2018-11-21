import React from 'react'
import styled from 'styled-components'
import {
  Container,
  BigTitle,
  Ctext,
  SmallTitle,
  Names,
  Jieshis,
  Dates,
} from '../../layouts/Work-Styles'
import Member from './Team/Members'

const TeamDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const TeamContain = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 0 0 3rem 0;
`
const Team = () => (
  <Container>
    <TeamDiv>
      <Dates>September</Dates>
      <BigTitle>Get Started</BigTitle>
      <Ctext>
        After the summer break, I went back to school and talked this idea to a
        bounch of my friends. They thought this program had possibility and we
        could have a try. Thus, my first team built up.
      </Ctext>
      <TeamContain>
        <Member
          title="Design"
          name="Me + Guangxin Wang"
          text="Product and UI design, publicize our idea, find cooperation chances"
        />
        <Member
          title="Video"
          name="Bizheng Wu"
          text="Figure out how to reduce the difficult of making a vedio and standardize the process of videoing"
        />
        <Member
          title="Programming"
          name="Xiaojue Tian+ Haodong Yu"
          text="Start to learn and realize the video fuction both in Android and IOS"
        />
        <Member
          title="Promotion"
          name="Hao Dong+ Diya Li"
          text="Build connections with professors and clubs leaders in school"
        />
      </TeamContain>
      <Ctext>
        We did a brief survey of "how students think about this idea" by talking
        to about 30 students in my school. Basically all of them expressed the
        willing that such a friend based knowledge-spread platform was needed,
        which gave us a lot of confidence.{' '}
      </Ctext>
      <SmallTitle>Plan α</SmallTitle>
      <Ctext>
        1. We decided to imitate Zhihu's function, and change the way of
        answering questions from typing to videoing. <br />
        2. Add a Moment Page which could show what questions that users's
        friends asked or followed.<br />{' '}
      </Ctext>
      <Ctext>
        Yes, we directly started and named us product:
        <Names>懂浩(Dong Hao)</Names>
        <Jieshis>means you are knowledgable</Jieshis>
      </Ctext>
    </TeamDiv>
  </Container>
)
export default Team
