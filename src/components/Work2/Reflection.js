import React from 'react'
import styled from 'styled-components'
import { Container, BigTitle, Ctext, High2 } from '../../layouts/Work-Styles'

const ReflectionDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const BigsTitle = styled(BigTitle)`
  margin: 10rem auto;
`
const Reflection = () => (
  <Container>
    <ReflectionDiv>
      <BigsTitle>Reflection</BigsTitle>
      <Ctext>
        <li>
          整理是关键：对于个人页面，不同领域的平台有不同的分类方法，他们的存在都是有意义的。在这里为了将直播利益最大化同时还要不失社交的原本属性。我起码在这次挑战中并没有单一的去抄袭他人，而是通过思考完成了我的任务。
        </li>
        <br />
        <li>
          高质量的平台不一定能挣钱，而能挣钱的平台一定需要优秀的用户体验去维持：我们的竞品：热拉，一直主导高质量颜值用户，给予LGBR用户归属感，但是他就是做不到盈利（如同知乎，到现在都没有变现能力）。精英的圈子限制了直播这个盈利手段。而我们平台在庞大的用户支持下，很快吸引到愿意看直播的用户，我们设计团队的工作就是将用户体验增强。那次更新之后，新的逻辑界面，先进的直播方式，以及运营团队的主播维持下，我们盈利破百万，顺利拿到新一轮投资。不敢说提升的用户体验的贡献有多大，但是绝对是必要的。
        </li>
        <br />
        <li>
          感谢老板给我极大地自由权限，让我能在小公司施展拳脚，在解放主PM的同时，还能有话语权去完善一些细节。虽说我不是专业设计出身，但是我快速学习能力让我完成了设计流程制定。
        </li>
        <br />
        <li>
          这次实习让我学习到了在创业中期的一些规则和流程，同时我也发现了自己的所爱：ux
          design
        </li>
      </Ctext>
    </ReflectionDiv>
  </Container>
)
export default Reflection
