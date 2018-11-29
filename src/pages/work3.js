import React from "react";
import HeaderIn from "../components/HeaderIn";
import Overview from "../components/Work3/Overview";
import BackGround from "../components/Work3/Background";
import Research from "../components/Work3/Research";
import Design from "../components/Work3/Design";
import Reflection from "../components/Work3/Reflection";

import LoadingScreen from "react-loading-screen";
class Project3Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2000);
  }

  render() {
    const { loading } = this.state;

    return (
      <LoadingScreen
        loading={loading}
        bgColor="white"
        spinnerColor="#FFA700"
        textColor="#343434"
        text="Fast experiment"
      >
        <HeaderIn Name="Cathome" />
        <Overview image={require("../images/background3.png")} />
        <BackGround />
        <Research />
        <Design />
        <Reflection />
        <div style={{ height: "400px" }} />
      </LoadingScreen>
    );
  }
}

export default Project3Page;
