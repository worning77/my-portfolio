import React from 'react'
import styled from 'styled-components'
import {
  Container,
  BigTitle,
  SmallTitle,
  Ctext,
  High2,
  Review,
} from '../../layouts/Work-Styles'
import Axture from './Process/Axture'
import Choose from './Process/Choose'
import Step1 from './Process/Step1'
import Others from './Process/Others'
import Final from './Process/Final'

const ProcessDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const FunDiv = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`

const Process = () => (
  <Container>
    <ProcessDiv>
      <BigTitle>Design Process</BigTitle>
      <Axture pic1={require('../../images/Axtrue.png')} />
      <Ctext>
        {' '}
        When I was trying to use Axure to draw all the pages, I found in the
        setting part, some logic only needed to be told to the developers, then
        they could fix the issues. And our design team could only have one
        people to be the UI, he said due to the limited time, we'd better
        directly use Sketch to make high-fidelity pictures. We need to be hurry.<br />
        Because the designer and PM had finished some other pages before I came,
        they know the style. I just watched his drawing process and then
        practiced to use sketch after work. We can work with sketch together.
      </Ctext>
      <SmallTitle>Me Page</SmallTitle>
    </ProcessDiv>
    <FunDiv>
      <Choose pic1={require('../../images/choose.png')} />
    </FunDiv>
    <ProcessDiv>
      <Step1 pic1={require('../../images/step1.png')} />
      <SmallTitle>Home Page(other's)</SmallTitle>
      <Others pic1={require('../../images/others.png')} />
      <SmallTitle>Home Page(me) and Edit </SmallTitle>
    </ProcessDiv>
    <FunDiv>
      <Final pic1={require('../../images/final.png')} />
    </FunDiv>
    <ProcessDiv>
      <SmallTitle>Some issues during the process</SmallTitle>
      <Ctext>
        <li>
          因为公司从头到现在换了很多人，基本每一版本都没有留下设计资料，导致我们在做设置内页面重新微调整的时候，没有原来的尺寸及标注。后面还是UI重新做了一套，很浪费时间
        </li>
        <br />
        <li>
          有些页面的变动并没有和老板商量，而是UI和PM很早以前想好的，导致其效果复杂，以及上线后使用造成困惑。又开始返工。缺少了关键的设计环节。
        </li>
        <br />
        我及时向老板反映这个问题，最后在我和老板的商量下，通过学习腾讯的方法并结合程序方面的方法（团队是技术出身，技术上的流程都是很全面的）制定了一套本公司的设计流程方案之前所述
        （这个是机密啦）。其效果就是满足任何新设计成员接手产品都能无阻碍的进行下去。并且任何新设计要有讨论，测试流程，最终拍板开工，目的在于减少返工。
      </Ctext>
    </ProcessDiv>
  </Container>
)
export default Process
