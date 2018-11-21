import React from 'react'
import styled from 'styled-components'
import {
  Container,
  BigTitle,
  Ctext,
  SmallTitle,
  High,
  Dates,
} from '../../layouts/Work-Styles'

import Team from './June/Photo'
const DecDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const Ad = styled.h2`
  margin: 0 0 3rem 0;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
`

const Jun = () => (
  <Container>
    <DecDiv>
      <Dates>June</Dates>
      <BigTitle>End</BigTitle>
      <Ctext>
        没有精力完全去做内容的发现和主导，势必会让分享停滞不前，同时到了考试月，很少有人会来帮忙，就地解散。{' '}
      </Ctext>
      <SmallTitle>Review</SmallTitle>

      <Ctext>
        Our idea has been proved right by the MVP, but we found some reasons why
        we failed to make such a platform we proposed:<br />
        <li>
          {' '}
          We were not a professional team. As for leaders, we put too many
          functions in a new App in the beignning stage, thus we changed the
          idea too many timese which led the programmers feel tired. And till
          the end, our inexperienced programmer didn't make a well APP, but he
          tried. ( We were not in the beginning of Facebook time )
        </li>
        <li>
          {' '}
          We knew that we made a real APP was hard, but before we verify our
          idea, we would not use money to buy a APP, since I saw too many
          (花重金写好的)APP died because of lack of users.
        </li>
        <li>
          We underestimated the difficulty of copy the existing friends
          connection on a brand new platform, since WeChat (Tencent) would never
          let his social network chain go, even till now, it control Chinese
          social net firmly.
        </li>
        <li>
          {' '}
          The delimma: the vertical fields made friends in real life lose its
          value; the all-round platform relied on friends connection extremely.
        </li>
        <li>
          {' '}
          We have not yet found a brilliant way as cold boot( like what SnapChat
          did at that time )to attract users.
        </li>
      </Ctext>
      <Ctext>
        As for my work, I don't think I was a qualified leader or product
        manager. I made too many mistakes in the whole process. Like before I
        didn't do a well user research yet, I started to think about how to make
        a promotional film to spread my idea and attract users. And too much
        believed in Agile Development, I didn't do well in the preparation (
        site map and all sketch pages ) for programmers. As a UI designer, I
        focused on too many details at the beginning. Meanwhile, I failed to
        manage our time. But, in this whole process, I've learned a lot, which
        pushed me to want more and specificly do well in a certain part of the
        Internet field.
      </Ctext>
      <Ad>Thanks my team </Ad>
      <Team pic1={require('../../images/team.png')} />
    </DecDiv>
  </Container>
)
export default Jun
