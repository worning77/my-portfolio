import React from "react";
import styled from "styled-components";
import {
  Container,
  BigTitle,
  Ctext,
  SmallTitle,
  High,
  Review,
  Dates,
  Names,
  Jieshis
} from "../../layouts/Work-Styles";

import App from "./May/App";
import Before from "./May/Xuanchuan";
import Test from "./May/Test";
import Mvp from "./May/Final";

const DecDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Ad = styled.p`
  margin: 0 0 3rem 0;
  text-align: center;
  font-size: 1.8rem;
  color: rgba(225, 117, 42, 1);
  font-weight: 350;
  padding: 0 10%;
`;
const Caotu1Div = styled.div`
  max-width: 2000px;
  margin: 0 auto 3rem auto;
`;

const May = () => (
  <Container>
    <DecDiv>
      <Dates>May-July</Dates>
      <BigTitle>Final trail</BigTitle>
      <Ctext>
        5月对于中国的大三学生而言已经进入了关键的人生规划时期，考研要从这是准备，找工作的秋招也即将开始。团队在看不到被市场的认可后，王广新我的最佳合作伙伴也离开了。只剩下窦陈，贾博文，我，我们三个。{" "}
      </Ctext>
      <SmallTitle> H5 APP </SmallTitle>
      <Ctext>基本功能已实现，一些地方没有调整UI，目的是测试第一批用户。 </Ctext>
      <App pic1={require("../../images/jishu.png")} />
      <SmallTitle>The first sharing activity</SmallTitle>
      <Ctext>
        We chose the most common topic among college students--<High>
          How to make a well PPT
        </High>{" "}
        as the first topic of our WeChat online sharing activity. We used{" "}
        <High>WeChat official account</High> to publicize based on its all-round{" "}
        <High>friends cycle</High>, and finally attracted 123 students. After
        that, we publicized our APP and invited those students who had interests
        as the seed users to test the App.<br />
      </Ctext>{" "}
      <Before pic1={require("../../images/xuanchuan.png")} />
      <Ctext>
        <li>
          First, we introduced today's host. Since students had no reputations,
          it might attract someone who knew him.
        </li>
        <li>
          Second, we also put some examples to illistrate his ppt-design
          ability. It might attract more potential users.(<High>
            It was a way to imitate those students who had questions only when
            they saw something and then got inspired
          </High>){" "}
        </li>
      </Ctext>
      <Ctext>
        The whole activity last for 1.5h. During that, only not more than 10
        people asked related questions after the host finished his skill
        sharing. 远远没有达到我们预期的活跃程度。
      </Ctext>
      <SmallTitle>Results of the activity and user test</SmallTitle>
      <Test pic1={require("../../images/test2.png")} />
      <Ctext>
        分析原因：<br />1.产品毕竟是个H5，大家嘴刁<br />2.人不可能随时都有问题要问<br />3.当用户基数不大的时候，尤其没有朋友链时，这个平台没有任何价值<br />4.我们需要培养并发掘真正的种子用户
      </Ctext>
      <SmallTitle>Minimum Viable Product (MVP)</SmallTitle>
      <Ctext>
        暂时先不考虑App，我们决定用现有资源在微信上做一次实验，来验证我们的想法能否可行。用微信群聊作为举办分享会然后观察用户行为。{" "}
      </Ctext>
      <Mvp pic1={require("../../images/fenxiang.png")} />
      <Ctext>
        In the following weeks, we held 5 WeChat sharing activities online. The
        results of these experiments were perfect, as well as the feedbacks from
        students who took part in -- 4 students we were not familiar with wanted
        to be a host to share their skills if possible. The average number of
        audience was 10, the average lasting time was 1 hour.{" "}
      </Ctext>
      <Mvp pic1={require("../../images/jieguo.png")} />
      <Ctext>
        That proved our original idea was right and needed--<High>
          "Spread knowledge by vedioing","Ask friends or friends' friends for
          ideas and suggestions of how to get started a new interest", "A place
          where we could share our interested skills without any sharing stress"
        </High>
      </Ctext>
    </DecDiv>
  </Container>
);
export default May;
