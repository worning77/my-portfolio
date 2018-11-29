import React from "react";
import styled from "styled-components";
import { Titles } from "../../layouts/Index-Styles";
const DescDiv = styled.div`
  margin: 3rem 2rem 0 2rem;
  @media (max-width: 640px) {
    margin: 1rem 1rem 0 1rem;
  }
`;
const Words = styled.div`
  max-width: 1200px;
  margin: auto;
  height: auto;
  display: grid;
  grid-template-rows: repeat(2, auto);
`;

const Text = styled.p`
  margin: 1rem auto 0 1rem 0;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.4rem;
  line-height: 1.7;
  @media (max-width: 640px) {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  @media (max-width: 415px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const DrawingDesc = () => (
  <DescDiv>
    <Words>
      <Titles>My Gallery</Titles>
      <Text>
        从我4岁的时候就开始学画画，我喜欢创作，直到初二。那是一次人生选择的转折，到现在都记得很清楚，我妈问我，想走艺术的路还是想走平凡的路。那时想当然的觉得自己数学学得好，我的逻辑脑子还是不能浪费。当然我的确成功了。因为数学很棒，我去了我想去的大学。记得冰雪奇缘刚上的时候，看完久久不能忘却，因为她再一次燃起了我想画画的热情。一个晚上5个小时，我用我最熟悉的方式去画画。用铅笔和水粉颜料。用自己的方式将爱莎画了出来。我惊呆了，我的双手魔力还在。自从那个假期开始，每个假期只要有时间，我就会把自己锁在房子里进行创作。我想说的是我依旧喜欢画画，我依旧是个艺术家。
      </Text>
    </Words>
  </DescDiv>
);

export default DrawingDesc;
