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
import Competive from './Design/Competive'
import Site from './Design/Site'

const DesignDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const Bord1 = styled.span`
  font-weight: 700;
  color: rgba(255, 51, 102, 1);
`
const Bord2 = styled(Bord1)`
  color: rgba(255, 185, 12, 1);
`
const Bord3 = styled(Bord1)`
  color: rgba(121, 121, 121, 1);
`
const FunDiv = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`

const Design = () => (
  <Container>
    <DesignDiv>
      <BigTitle>Redefine and Restore</BigTitle>
      <Ctext>
        In this case, Me Page should contain three main parts: social, live and
        settings: <br />
        <br />
        <Bord1>As for social part:</Bord1> LesPark has been released for a long
        time, most of its main social functions, like special Album entrance,
        were outdated, which seemed to be complicated and tedious.{' '}
        <Bord1>I was trying to make it clear and reduce users’ operation</Bord1>.<br />
        <br />
        <Bord2>As for new live function:</Bord2> In order to catch the live
        trend before, the previous PM added some direct entrance to increase
        profits, like redeem and pay bills, but he forgot to make these orderly.{' '}
        <Bord2>I need to create a system to make them reasonable</Bord2>.<br />
        <br />
        <Bord3>As for settings:</Bord3> For a long time, every PM didn’t notice
        the arrangement of settings, which seemed messy from today’s
        perspective.{' '}
        <Bord3>I had to restore those necessary functions in other way</Bord3>.
      </Ctext>
      <SmallTitle>Social part--Brief target users research</SmallTitle>
      <Ctext>
        One day, I gathered some girls from marketing and host operation teams
        (they are lesbian) to hold a meeting. For collecting useful information,
        I listened to them sharing their favorite LGBT App, what parts they
        cared about most when saw a stranger and what they hoped to show and
        post to the public.
      </Ctext>
      <Ctext>
        I found that the sequence of information they cared was:<br />
        <br />
        <li>Photos (more is better) </li>
        <li>Basic info</li>
        <li>Popularity</li>
        <li>Posts</li>
        <li>Detailed info</li>
        <br />
        For those who liked watching live streams, they also cared about their
        idols' live info -- level and related groups, which were quite familiar
        with the situations in real life.<br />
        Thus, after they helped me to fliter the most important elements, the
        only thing I needed to do was to design it as beautiful as possible.
      </Ctext>
      <SmallTitle>Live part</SmallTitle>
      <Ctext>
        Since I've never touched live stream before, I had no idea about what
        kind of Me Page was reasonable and effective. So, I refered to several
        domastic hotest Live Apps.
      </Ctext>
      <Competive pic1={require('../../images/Competive.png')} />
      <Ctext>
        One day in the Daily Agile/Scrum Meeting, I spoke out my idea, which got
        endorsement.
        <br />
        <br />
        <li>
          Now that the group was used to increase the user's loyalty in the
          past, the importance of the group in our App had decreased with
          Facebook aimport Site from './Design/Site'; nd WeChat becoming
          mainstream,{' '}
          <High2>
            why should us combine the group with live function? Just like the
            special fans groups for hosts? which can increase users’ sense of
            belonging
          </High2>.
        </li>{' '}
        <br />
        <li>
          Considering the fans group in the future, this App must have two kinds
          of people: host stars and fans( named them nobles ). In this way, we
          can have two obvious divides:{' '}
          <High2>Host center and Nobel center</High2>. The first one is for the
          development of host, including their profits and frames; the other one
          is for those rich guys, getting a sense of title when using money to
          buy gifts for their idols.
        </li>{' '}
      </Ctext>
      <Ctext>
        Thus, <High2>Family Group</High2> and{' '}
        <High2>the Systems of hosts/nobels growth</High2> were on the schedule.
        I also finished the restore work of Me Page soon.
        <Review>
          (Till the middle of 2017, they completed these two functions)
        </Review>
      </Ctext>
    </DesignDiv>
    <FunDiv>
      <Site pic1={require('../../images/Site.png')} />
    </FunDiv>
  </Container>
)
export default Design