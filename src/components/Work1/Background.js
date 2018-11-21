import React from "react";
import styled from "styled-components";
import Story from "./BackStory/Storys";
import { Container, BigTitle, Ctext, Dates } from "../../layouts/Work-Styles";

const BackgroundDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Tname = styled.div`
  padding: 2rem 0;
  display: block;
`;
const Name = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: rgba(0, 0, 0, 1);
  margin: 0;
`;
const Desc = styled.p`
  font-size: 1.3rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
`;
const Qtext = styled.p`
  margin: 3rem 0;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 350;
  line-height: 1.5;
`;

const Background = () => (
  <Container>
    <BackgroundDiv>
      <BigTitle>Background</BigTitle>
      <Ctext>
        In 2015, WeChat was the most popular and seemed to be the only one
        social network among students group. Moments of WeChat, a fuction for
        users to share, however, was full of posts of what friends ate, where
        friends went, and some complaints about somebody’s life, which were
        meaningless for us to know about someone we cared about. There was no
        place to explore, to find something beneficial for our expansion of
        interests and fun facts of lives. I found that our daily life was
        boring, which pushed me to think about what’s going on.
      </Ctext>
      <Dates>Chapter 0</Dates>
      <BigTitle>The Idea</BigTitle>
      <Story
        image={require("../../images/share.png")}
        subtitle="Story-1"
        title="Sharing"
        text="人人网是我在上高中时候很火的一个sns社交网站，当时是学习fackbook，同学们在自己的主页发布一些自己写的小说，读后感，以及生活小攻略。干货满满，很多才华横溢的学生都能在人人网上找到。但是我上大学后，人人网逐渐没落，有自己运营失败的原因，也有互联网新媒体这个”快销“大环境的冲击。现在也只有老朋友聚会的时候才会说一些有趣的事。我高中同学大学去学了地质，假期见面的时候能侃侃而谈，指着山对我们说这是什么岩层，什么年代形成的…其实很希望这样的人对我们分享一些多元化的领域。"
        back={require("../../images/QQQ.png")}
        question="Why students lost the passion of posting something which can show their talents?"
      />
      <Story
        image={require("../../images/QA.png")}
        subtitle="Story-2"
        title="Q&A"
        text="知乎（一个类似quaro的问答平台）在2014年慢慢在大学生和刚工作年轻人圈子走火。高质量的问答内容让人们耳目一新。他给了在某些领域有一定借鉴的人一个表达自己观点的机会。我身边的人不仅喜欢看这些内容，有些人也愿意在上面发言，他们告诉我，自己所掌握的东西，如果没有人问，他们永远也不会说什么。"
        back={require("../../images/QQQ.png")}
        question="If we have a Q&A platform among college students group, does it work?"
      />
      <Story
        image={require("../../images/video.png")}
        subtitle="Story-3"
        title="Short Video"
        text="微博是一个类似trrtwer的社交软件，社交关系较为弱，娱乐性更强。那时国内的短视频内容制造者还不多，往往看到的多数是专业号从youtube上搬运来的视频，有搞笑的有实用的。我身边的人都喜欢看国外年轻人拍视频分享自己炫酷的技能，脑洞大开的生活片段，以及他们个人名义的教学短视频，cooking, making some stuff.是放松时候最佳的选择。有时会刺激我也想做一个视频教大家踢球的一些技巧，因为这东西我没法用文字写出来，视频是最有效的表达方式。"
        back={require("../../images/QQQ.png")}
        question="Why Chinese young people do not make some cool and meaningful short videos?"
      />
      <Qtext>
        带着这三个问题，既然熟人之间更能促进分享；问答有会让本来有能力的人被动分享；视频对于学习者的好处在于能快速了解并学习，对于分享者好处在于能清楚表达其意思。
        那么我想我们是不是能做一个：
      </Qtext>
      <Tname>
        <Name>A skill-sharing platform based on relationship</Name>
        <Desc>
          we can simply regard it as a video version of zhihu specific for
          college students{" "}
        </Desc>
      </Tname>
    </BackgroundDiv>
  </Container>
);
export default Background;
