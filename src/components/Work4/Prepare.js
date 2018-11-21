import React from 'react'
import styled from 'styled-components'
import {
  Container,
  Dates,
  BigTitle,
  SmallTitle,
  Ctext,
} from '../../layouts/Work-Styles'
import Persona from './Prepare/Persona'
import Tickets from './Prepare/Tickets'
import Competitive from './Prepare/Competitive'

const PrepareDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Prepare = () => (
  <Container>
    <PrepareDiv>
      <Dates>Part 1</Dates>
      <BigTitle>Preparation work</BigTitle>
      <SmallTitle>Research in construction sites</SmallTitle>
      <Ctext>
        At the very beginning, I was thinking that maybe I can redesign the
        receipt tickets, so that all the work could be done in the same
        standard.<br />
        I went to four construction sites, acknowledging how the workers made
        the tickets.
      </Ctext>
      <Ctext>四张工地照片</Ctext>
      <Ctext>
        Well, I found that due to the different mother companies, the process of
        making tickets were totally different. Every site had its own standard,
        which led the following factors:<br />
        <br />
        <li>Some sites used professional machine to print the tickets.</li>
        <br />
        <li>
          Some sites hired old farmer labourers to report the data by writing.
        </li>
        <br />
        <li>
          Even in the same project, two different sites used different form of
          ticket.
        </li>
      </Ctext>
      <Ctext>
        I knew that even if I made a standard form and an advanced way to make
        tickets, the giant knowledge gap of different operation workers would
        make it impossiable. Futher more, considering we are only the service
        provider, we had no right to do so, changing the habits they had before.
        Therefore, I had no choice but give up this idea and switch to focus on
        how to solve this problem standing on our staff's feet.{' '}
      </Ctext>
      <SmallTitle>Research in our company</SmallTitle>
      <Ctext>
        What kind of method could help increase efficiency in checking process?
        I investigated two staff who handle this work.{' '}
      </Ctext>
      <Persona pic1={require('../../images/persona4.png')} />
      <Ctext>
        According to them, I found that this tool should be as simple as
        possible, without fancy decoration. Meanwhile, it should be a mobile
        App, which could be used at any time, and since the mobile camera has
        well proformance, which make the scan function possible.<br />
        <br />
        Maybe in the future, I could create a system in photocopier, and
        automatically check accounts in computer, which save human labor. But
        now, because the OCR couldn't ensure 100% accuracy, I cut this idea
        temporarily.
      </Ctext>
      <SmallTitle>Analyse Traget</SmallTitle>
      <Ctext>
        Take the construction sites I managed as an example. There are two
        different transport companies serving two sites, and each sits need two
        different kinds of cement. Every month I will receive two itemized
        accounts from these two companies, and then I need to filter the data of
        these two sites. Since not all the information in the tickets are
        usefull, and based on the examples of what should we export, I marked
        the most important data, which could help the program-design part.
      </Ctext>
      <Tickets pic1={require('../../images/ticket.png')} />
      <SmallTitle>Competitive Analysis</SmallTitle>
      <Ctext>
        I thought based on the developed trade market, whether existing products
        can do what we want.
      </Ctext>
      <Competitive
        pic1={require('../../images/competitive.png')}
        pic2={require('../../images/explain.png')}
      />
      <Ctext>
        Then I can learn the algorithm behind these Apps, and create one for our
        use.
      </Ctext>
    </PrepareDiv>
  </Container>
)
export default Prepare