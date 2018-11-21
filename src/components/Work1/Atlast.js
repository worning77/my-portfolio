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

import Team from './June/Photo'
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

const Last = () => (
  <Container>
    <DecDiv>
      <BigTitle>At Last</BigTitle>
      <Ctext>
        同年7月，在微信小程序刚成熟的时候，在行出了一个分答（微信小程序应用），和我们相似，只不过答题者是国内名人，一个问题要收费。在明星效应下，在国内火了一时。并且最终上线为得到APP，但也在今年的6月，证实宣告死亡。
      </Ctext>
      <Ctext>同年8月，知乎开展了视频功能（圆桌讨论会），并且是官方主导 </Ctext>
      <Ctext>
        当时与我们同时期的相似产品，只要是我能下载到app的，现在大部分死亡，活着的是靠背后大公司强力支持，或者直接转型为垂直领市场--音乐的，职场的与美国的skillshare一样，做起了专业导师制教育平台。{' '}
      </Ctext>
      <Ctext>
        次年3月起，国内所有直播平台都开展了短视频功能，
        迎来了短视频热潮，但无非走得都是模仿炫酷的风格。其中抖音（tiki-toki）成为2018中国最火短视频社交app。用户还是喜欢娱乐化的玩意儿。{' '}
      </Ctext>
    </DecDiv>
  </Container>
)
export default Last
