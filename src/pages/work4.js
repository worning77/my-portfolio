import React from "react";
import HeaderIn from "../components/HeaderIn";
import OverView from "../components/Work4/Overview";
import Introduction from "../components/Work4/Introduction";
import Problem1 from "../components/Work4/Problem1";
import Prepare from "../components/Work4/Prepare";
import Design from "../components/Work4/Design";
import Result from "../components/Work4/Result";

const Project1Page = () => (
  <div>
    <HeaderIn Name="Scan&Check" />
    <OverView />
    <Introduction />
    <Problem1 />
    <Prepare />
    <Design />
    <Result />
    <div style={{ height: "1000px" }} />
  </div>
);

export default Project1Page;
