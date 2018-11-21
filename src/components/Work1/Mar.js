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
import Shuju from './Jan/shuju'
import Wenzhang from './Jan/Wenzhang'
import Comp from './Mar/Comp'
import Luoji from './Mar/Luoji'
import Fenxi from './Mar/Fenxi'
import Sketch from './Mar/Sketch'
import Differ from './Mar/Differ'

const DecDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const Ad = styled.p`
  margin: 0 0 3rem 0;
  text-align: center;
  font-size: 1.8rem;
  color: rgba(225, 117, 42, 1);
  font-weight: 350;
  padding: 0 10%;
`
const Caotu1Div = styled.div`
  max-width: 2000px;
  margin: 0 auto 3rem auto;
`
const FucDiv = styled.div`
  max-width: 1200px;
  padding-left: 5%;
`

const Mar = () => (
  <Container>
    <DecDiv>
      <Dates>March</Dates>
      <BigTitle>Minus again</BigTitle>
      <Ctext>
        After Chinese New Year, we had a dilemma:
        我们不想做垂直领域，因为我们并不是在某个领域特别强悍，最后还有可能做成一个自媒体。如果范围铺的太大，势必前期要准备一些东西，让新来的各个领域的用户能正常玩转起来。既然主动分享的成本很高，那么直接从被动分享（问答）开始呢？以后再去培养主动分享的可能。而且我们忽略了那些因为看到新东西而产生兴趣的一群用户，直接面向已经有需求的用户。直接做基于人脉的一对一问答社区。
      </Ctext>
      <Luoji pic1={require('../../images/luoji.png')} />
      <SmallTitle>典型用户场景</SmallTitle>
      <Comp pic1={require('../../images/10.png')} />
      <SmallTitle>Questionnair</SmallTitle>
      <Ctext>
        This time we made a questionnair in time, which aimed to verify our root
        idea: A Q&A platform based on connection. And the result was perfect,
        which gave us power to work.{' '}
      </Ctext>
    </DecDiv>
    <Caotu1Div>
      <Fenxi
        pic1={require('../../images/fenxi1.png')}
        pic2={require('../../images/fenxi2.png')}
      />
    </Caotu1Div>
    <DecDiv>
      <SmallTitle>Soluitions about the above worries.</SmallTitle>
      <Ctext>
        1. Embarrassed: The App would show the relationship graph to each user.
        Thus they can get in touch without bothering their middle friends.<br />
        2. Reliability: We encourage users can tag and score each other's
        talents or skills.<br />
        3. Labeled: It seems Chinese do not like "Label" themselves. So, we
        changes our name:
        <Differ pic1={require('../../images/Differ.png')} />
      </Ctext>
      <Ctext>
        {' '}
        确认了后续的步骤是可行的然后经过讨论，因为我们没有内容池，为了让用户能快速添加好友链，我们将首页设为卡片系统推荐。并在之后会鼓励已经认识的用户添加好友。我快速将原型图做了出来,
        and our only one programmer started to learn H5 App(since we could use
        it test users rapidly). Meanwhile, we were preparing the first sharing
        activiety officially.
      </Ctext>
      <SmallTitle>Sketching Interfaces</SmallTitle>
      <Sketch pic1={require('../../images/shouhui.png')} />
    </DecDiv>
  </Container>
)
export default Mar
