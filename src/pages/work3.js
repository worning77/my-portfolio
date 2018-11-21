import React from 'react'
import HeaderIn from '../components/HeaderIn'
import Overview from '../components/Work3/Overview'
import BackGround from '../components/Work3/Background'
import Research from '../components/Work3/Research'
import Design from '../components/Work3/Design'
import Reflection from '../components/Work3/Reflection'

const Project3Page = () => (
  <div>
    <HeaderIn Name="Cathome" />
    <Overview image={require('../images/background3.png')} />
    <BackGround />
    <Research />
    <Design />
    <Reflection />
    <div style={{ height: '600px' }} />
  </div>
)

export default Project3Page
