import React from 'react'
import HeaderIn from '../components/HeaderIn'
import OverView from '../components/Work2/Overview'
import Background from '../components/Work2/Background'
import Before from '../components/Work2/Before'
import Design from '../components/Work2/Design'
import Process from '../components/Work2/Process'
import Reflection from '../components/Work2/Reflection'

const Project2Page = () => (
  <div>
    <HeaderIn Name="LesPark" />
    <OverView />
    <Background />
    <Before />
    <Design />
    <Process />
    <Reflection />
    <div style={{ height: '600px' }} />
  </div>
)

export default Project2Page
