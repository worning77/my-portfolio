import React from "react";
import styled from "styled-components";
import {
  Container,
  BigTitle,
  Ctext,
  SmallTitle,
  High,
  Review,
  Names,
  Jieshis,
  Dates,
  SmallsTitle
} from "../../layouts/Work-Styles";
import Pic1 from "./Nov/Pic";
import Tree from "./Nov/Tree";

import Bad from "./Nov/Bad";

const NovDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const FucDiv = styled.div`
  max-width: 1200px;
  padding-left: 5%;
`;
const AdDiv = styled.div`
  width: 65%;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.05), 0 -1rem 2rem rgba(0, 0, 0, 0.02);
  padding: 1% 5%;
  margin: 0 auto 3rem auto;
`;
const Ad = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-style: italic;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 350;
`;
const Small = styled.p`
  margin: 1rem 0 1rem 0;
  font-size: 1.3rem;
  padding: 0 0 0 2%;
  color: rgba(0, 0, 0, 0.5);
`;

const Qcard = styled.div`
  max-width: 1000px;
  padding: 5%;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1), 0 -1rem 2rem rgba(0, 0, 0, 0.05);
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  margin: 0 auto 5rem auto;
`;

const Question = styled.h3`
  margin: 0 3rem;
  text-align: center;
  font-size: 1.7rem;
  font-weight: 700;
  color: rgba(239, 128, 65, 1);
`;
const Thought = styled.p`
  margin: 2rem auto;
  font-size: 1.3rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
`;
const Answer = styled.p`
  margin: 0 auto 3rem auto;
  font-size: 1.5rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
`;
const Concl = styled.p`
  margin: 0 0 3rem 0;
  text-align: center;
  font-size: 2rem;
  color: rgba(239, 128, 65, 1);
  font-weight: 500;
  padding: 0 10%;
`;

const Nov = () => (
  <Container>
    <NovDiv>
      <Dates>November</Dates>
      <BigTitle>Stand at the Crossroads</BigTitle>
      <Ctext>
        Since we were very close to Zhongguancun, the Silicon valley of Beijing,
        Guangxin and I went there, feeling the atmosphere of startup, auditing
        roadshows, downloading and experiencing tens of newly released apps
        everyday. We found we need to think more. First, we made a{" "}
        <High>Competitive Analysis</High> .{" "}
      </Ctext>
      <AdDiv>
        <Ad>
          "There's a concept in Zhongguancun: <br />If you have an idea, there
          would be million yuan to invest you."
        </Ad>
      </AdDiv>
      <SmallTitle>Competitive Analysis</SmallTitle>
      <Pic1 pic1={require("../../images/jinpin.png")} />
      <SmallsTitle>In skill-sharing field, we found that:</SmallsTitle>
      <Ctext>
        1. Most skills or views sharing platforms{" "}
        <High>focus on some certain fields</High>.
        <Small>
          Zaihang: an one-on-one Consulting platform specific in the Internet
          industry.<br />
          Xuejiebang: a platform which helps future college students acknowledge
          how to choose dream school and what college-time like.
        </Small>
        2. Basically everyone has a method to <High>motivate users</High>.
        <Small>
          Baidu Zhidao and Xuejiebang pay for those people who answer questions.<br />
          Skillbank encourages users to exchange their mastered skills.
        </Small>
        3. <High>None of those has the video fucntion.</High>
        <Small>Except Users in Zaihang will meet and talk in reallife.</Small>
        4. The target users of every platform are{" "}
        <High>
          highly related to the main toptics they made at the beginning stage
        </High>.
      </Ctext>
      <Pic1 pic1={require("../../images/shipin.png")} />
      <SmallsTitle>In short video field, We found that: </SmallsTitle>{" "}
      <Ctext>
        <High>None of them use video to spread knowledge.</High>
      </Ctext>
      <Ctext>
        At that time, we thought "Video + knowledge" was a Blue Sea, which
        encouraged us to make videos quickly.<br />
        Thus, combined with the suggestions from previous surveys of professors,
        we decided to focus on the "pain points" of students in our school,
        which were some difficult subjects, like Advanced Mathematics.
        Meanwhile, we known that Economics and some relevant subjects were hot
        majors in my university. We tried to talk to some top students in every
        school, hoping they could make videos of those subjects. Next, we made a{" "}
        <High>Topic Tree</High>.{" "}
      </Ctext>
      <Tree pic1={require("../../images/Tree.png")} />
      <SmallTitle>New plan</SmallTitle>
      <Ctext>
        Well, before our product released, where would the users be attracted?
        We decided to create a <High>WeChat Official Account</High>, by posting
        the interviews of professors and some studying-tricks videos made top
        students, we thought we could attract students in my university to keep
        following us. We also changed our name: <Names>不惑(Bu Huo)</Names>
        <Jieshis>means not confused anymore </Jieshis>
      </Ctext>
      <SmallTitle>Some issues in videoing progress</SmallTitle>
      <Bad
        image={require("../../images/shi.png")}
        title="From a professor"
        text1="A famous Chinese literature professor answered our 5 prepared questions, he couldn't make it clear in 5 min. Since he could extend a lot."
        text2="When we let other students watch this 30min-long video. At first they had interests, but they felt tired gradually."
        photo={require("../../images/fankui.png")}
      />
      <Concl>
        We underestimated the difficulty of making a knowledge-spread video in
        most cases !{" "}
      </Concl>
      <Ctext>
        We never foresaw such situiations before. And these difficulies made us
        clam down. After discussed with several professional product managers in
        Tencent, we reconsidered our program and thought about following
        questions.
      </Ctext>
      <Qcard>
        <Question>
          Why Q&A platforms like zhihu.com didn't have Video fucntion?
        </Question>
        <Thought>
          Before: We thought Zhihu was a place where people can share thire
          unique view of points, and those points can be logical if by written
          down.
        </Thought>
        <Answer>
          Real: Zhihu didn't expect users can make a well video at all. If by
          videoing, it will lose many portencial users.<br />
          <br />
          <Review>
            Actually, Zhihu started hold video sharing activiting offically
            after one year, because they already had enough loyal users
          </Review>
        </Answer>
      </Qcard>
      <Qcard>
        <Question>Video or Meaningful social network?</Question>
        <Thought>
          Before: We thought video+knowledge+existing social cycle would be
          perfect, becasue video was the most effective spreading way.{" "}
        </Thought>
        <Answer>
          Real: Chinese didn't have the habit of making videos at that time yet.
          Most companies were trying to develop it by using live stream.<br />
          <br />
          <Review>
            In fact, after more than one-year trail of live steam, all of those
            still existing products focuses on short video, since many hosts
            have already had the ability to produce well-made videos, and useres
            are willing to watch them.
          </Review>
        </Answer>
      </Qcard>
      <Ctext>
        {" "}
        It seemed that we overpursued the video function and forgot the original
        wish of creating a valuable social network.{" "}
        <High>We had no choice but quit video function.</High>
      </Ctext>
    </NovDiv>
  </Container>
);
export default Nov;
