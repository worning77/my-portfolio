import React from "react";
import styled from "styled-components";
import Headroom from "react-headroom";
import Link from "gatsby-link";

import { BackIcon } from "./icons";
const HeadDivs = styled.div`
  margin: 0 2rem;
  height: 100%;
  padding: 20px 0;
  @media (max-width: 640px) {
    height: 50%;
    padding: 15px 0;
  }
`;
const HeadGroups = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-contents: center;
  position: relative;
`;

const Work = styled.button`
  padding: 6px 8px;
  font-size: 20px;
  background: rgba(255, 255, 255, 0);
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 600;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    background: rgb(0, 206, 172);
    color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }

  @media (max-width: 640px) {
    font-size: 18px;
    &:hover {
      transform: translateY(-1px);
    }
  }
  @media (max-width: 415px) {
    font-size: 16px;
  }
`;
const Home = styled(Work)`
  &:hover {
    background: rgb(236, 89, 81);
    color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`;

const ButtonTop = styled.button`
  margin: 0 0 0 7%;
  background: rgba(255, 255, 255, 0);
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      135deg,
      rgba(92, 227, 210, 1) 20%,
      rgba(227, 58, 119, 1) 80%,
      rgba(251, 144, 17, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: 500px) {
    margin: 0;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 30px;
  font-weight: 600;
  @media (max-width: 1300px) {
    font-size: 26px;
  }
  @media (max-width: 640px) {
    font-size: 22px;
  }
  @media (max-width: 500px) {
    margin: 0;
  }
  @media (max-width: 415px) {
    font-size: 18px;
  }
`;

class HeaderIn extends React.Component {
  constructor(props) {
    super(props);
  }
  backToTop() {
    if (typeof window !== `undefined`) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <Headroom
        style={{
          background: "rgb(255,255,255)",
          boxShadow: "0px 4px 20px -11px rgba(0, 0, 0, 0.8)",
          transition: "all .5s ease-in-out"
        }}
      >
        <HeadDivs>
          <Link
            style={{
              position: "absolute",
              left: "3%",
              top: "30%",
              height: "30px",
              width: "30px"
            }}
            to="/"
            replace
          >
            <BackIcon />
          </Link>

          <HeadGroups>
            <ButtonTop onClick={e => this.backToTop(e)}>
              <Title>{this.props.Name}</Title>
            </ButtonTop>

            <Link style={{ margin: "0 5% 0 auto" }} to="/">
              <Work>Work</Work>
            </Link>
            <Link style={{ margin: "0" }} to="/home">
              <Home>Home</Home>
            </Link>
          </HeadGroups>
        </HeadDivs>
      </Headroom>
    );
  }
}

export default HeaderIn;
