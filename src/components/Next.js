import React from "react";
import styled, { keyframes } from "styled-components";

import Link from "gatsby-link";

const Background = keyframes`
 0%{background-position: 50%;}
  100%{background-position: -150%;}
`;

const Wrap = styled.div`
  margin: 2rem auto;
  height: 3rem;
  max-width: 80%;
`;
const Text = styled.h1`
  font-size: 2rem;
  margin: 1rem auto;
  text-align: center;
  background-image: -webkit-linear-gradient(
    150deg,
    rgba(125, 57, 159, 0.9) 0%,
    rgba(16, 103, 109, 0.9) 20%,
    rgba(233, 175, 74, 0.9) 40%,
    rgba(125, 57, 159, 0.9) 60%,
    rgba(16, 103, 109, 0.9) 80%,
    rgba(233, 175, 74, 0.9) 90%,
    rgba(125, 57, 159, 0.9) 100%
  );
  animation: ${Background} 8s infinite ease-in-out;
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
  @media (max-width: 415px) {
    font-size: 1.3rem;
  }
`;
const Next = () => (
  <Link to="/home">
    <Wrap>
      <Text>Let's know more about me! => </Text>
    </Wrap>
  </Link>
);
export default Next;
