import React from "react";
import HeaderIn from "../components/HeaderIn";
import OverView from "../components/Work4/Overview";
import Introduction from "../components/Work4/Introduction";
import Problem1 from "../components/Work4/Problem1";
import Prepare from "../components/Work4/Prepare";
import Design from "../components/Work4/Design";
import Result from "../components/Work4/Result";

import LoadingScreen from "react-loading-screen";
class Project4Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        <LoadingScreen
          loading={loading}
          bgColor="white"
          spinnerColor="#6D7A8B"
          textColor="#343434"
          text="Make things easier"
        >
          <HeaderIn Name="Scan&Check" />
        </LoadingScreen>
        <OverView />
        <LoadingScreen
          loading={loading}
          bgColor="white"
          spinnerColor="#6D7A8B"
          textColor="#343434"
          text="Make things easier"
        >
          <Introduction />
          <Problem1 />
          <Prepare />
          <Design />
          <Result />

          <div style={{ height: "400px" }} />
        </LoadingScreen>
      </div>
    );
  }
}

export default Project4Page;
