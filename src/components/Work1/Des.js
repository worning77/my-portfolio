import React from "react";
import styled from "styled-components";
import {
  Container,
  BigTitle,
  Ctext,
  SmallTitle,
  High,
  Dates,
  Names,
  Jieshis,
  Big
} from "../../layouts/Work-Styles";
import User from "./Dec/User";
import Market from "./Dec/Market";
import Lables from "./Dec/Lables";
import Taolun from "./Dec/Taolun";
import Plan from "./Dec/Plan";
import Clickable from "./HideShow";

const DecDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;

const Dec = () => (
  <Container>
    <DecDiv>
      <Dates>December</Dates>
      <BigTitle>Redefinition</BigTitle>
      <Ctext>
        Without the video-only threshold, we gave rights to users. Thus, we
        discussed this project from the beginning.
      </Ctext>
      <Clickable lable="definate users">
        <SmallTitle>Classified user group</SmallTitle>
        <Market pic1={require("../../images/fenxi.png")} />
        <Ctext>
          Combined with our Relationship basd service(RBS), we can quickly match
          newbee and experienced. Meanwhile, this platform can satisify users'
          potential needs:
        </Ctext>
        <SmallTitle>Proposed target users</SmallTitle>
        <User pic1={require("../../images/user.png")} />
      </Clickable>
      <Ctext>
        We <High>must have a high-quality conent pool</High> in the first stage,
        because it will trigger users interests and let the user begin to ask
        for help. Meanwhile, one's contents are the best proof for indicating
        he/she has the ability. Thus, we add a new group of people--<High>
          someone who likes recording
        </High>. Even though these people's documents and valuable files will
        not be shown in the public, once some users find them, they can have the
        chance to check their history.<br /> Considering everyone can be the
        newbee or the informed person, We hope users can make well-done
        profiles, only in this way, this platform can run up.<br />
        <br />
        We also changed our name from <Names>不惑</Names>（which aimed for
        knowledge needers）to<br />
        <br /> <Names>Skillabel</Names>
        <br />
        <Jieshis>aimed for skill-sharing people</Jieshis>
      </Ctext>
      <Ctext>
        Also, in order to avoid being regarded as a We-media (aimed to provide
        contents for users), we changed the topics to labels. We indeed wanted a
        UGC platform.
      </Ctext>
      <SmallTitle>Lables</SmallTitle>
      <Lables pic1={require("../../images/Lables.png")} />
      <Ctext>
        With lables, users can do:<br />
        <br />
        <li>For Newbees: they can find the right person and get help.</li>
        <br />
        <li>
          For Experienceds: they can classify their skills and share their
          contents partly by labling.
        </li>
      </Ctext>
      <SmallTitle>Proposal</SmallTitle>
      <Taolun
        pic1={require("../../images/taolun.jpg")}
        pic2={require("../../images/taolun2.jpg")}
      />
      <Ctext>
        Although we cancled video function, we still thought the best way for
        knowledge spread was by talking. So we create sharing activiety online
        to attract users. After discussed in detail, we made a plan for
        <High> pre-product stage</High>.
      </Ctext>
      <Plan pic1={require("../../images/next.png")} />
      <Ctext>
        Thus, 12 students from different clubs and our school who are good at
        maths and computer promised us to create something valuable in the
        winter vocation.<br />
        <br /> <Big>We need to accumulate our content pool.</Big>
      </Ctext>
    </DecDiv>
  </Container>
);
export default Dec;
