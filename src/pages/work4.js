import React from 'react'
import HeaderIn from '../components/HeaderIn'
import OverView from '../components/Work4/Overview'
import Introduction from '../components/Work4/Introduction'
import Problem1 from '../components/Work4/Problem1'
import Prepare from '../components/Work4/Prepare'
import Design from '../components/Work4/Design'

const Project1Page = () => (
  <div>
    <HeaderIn Name="Cement distributor" />
    <OverView />
    <Introduction />
    <Problem1 />
    <Prepare />
    <Design />

    <div style={{ height: '1000px' }} />
  </div>
)

export default Project1Page
