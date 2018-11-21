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
const Concl = styled.p`
  margin: 0 0 3rem 0;
  text-align: center;
  font-size: 2rem;
  color: rgba(239, 128, 65, 1);
  font-weight: 500;
  padding: 0 10%;
`

const Jan = () => (
  <Container>
    <DecDiv>
      <Dates>January</Dates>
      <BigTitle>Bad News</BigTitle>

      <SmallTitle>User research about sharing</SmallTitle>
      <Ctext>
        Since all the feedbacks we got before of our idea were from the
        convocations with our friends, and the results were good, because we
        described a well-made products, with many high-quality contents and
        compelate friends-connection.<br /> This time, we only wanted to figure
        out{' '}
        <High>
          How the views of sharing and recording in a brand new platform
        </High>. We thought winter break was the perfect time for us to do a
        large scale of user research, however, we only received not more than 40
        effective questionnaires, and the results were terrible.
      </Ctext>
      <Shuju pic1={require('../../images/yanjiu.png')} />
      <SmallTitle>Example of the sharing content we proposed</SmallTitle>
      <Ctext>
        Since I am good at painting, and I always post my drawings in social
        networks, I think I am a target user who likes sharing. Therefore, I
        write down the process of how I drew as an example in our WeChat
        Official account--空知社(kong zhi she), and get some results.
      </Ctext>
      <Wenzhang
        pic1={require('../../images/wenzhang.gif')}
        pic2={require('../../images/chengguo.png')}
      />
      <Ctext>
        But, the whole process of creating this artical was time consuming. Even
        for me, a man who likes sharing my experience, I wanted to quit.
      </Ctext>
      <Concl>
        We overestimated students' ability of sharing high-quality stuff！
      </Concl>
      <Ctext>
        Since we were sinre students, some of my teammates decided to prepare
        their future:考研，找工作。我们的程序员只剩一人。
      </Ctext>
      <Ctext>
        Meanwhile,我们找的分享者失约了。Till now, our preparation work 1 became
        impossible. What if we delate the contents pool?
      </Ctext>
    </DecDiv>
  </Container>
)
export default Jan
