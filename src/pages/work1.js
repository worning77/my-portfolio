import React from "react";
import HeaderIn from "../components/HeaderIn";
import OverView from "../components/Work1/Overview";
import Background from "../components/Work1/Background";
import Team from "../components/Work1/Team";
import Oct from "../components/Work1/Oct";
import Nov from "../components/Work1/Nov";
import Dec from "../components/Work1/Des";
import Jan from "../components/Work1/Jan";
import Mar from "../components/Work1/Mar";
import Apr from "../components/Work1/Apr";
import May from "../components/Work1/May";
import Jun from "../components/Work1/Jun";
import Last from "../components/Work1/Atlast";

const Project1Page = () => (
  <div>
    <HeaderIn Name="Differ" />
    <OverView />
    <Background />
    <Team />
    <Oct />
    <Nov />
    <Dec />
    <Jan />
    <Mar />
    <Apr />
    <May />
    <Jun />
    <Last />
    <div style={{ height: "600px" }} />
  </div>
);

export default Project1Page;
