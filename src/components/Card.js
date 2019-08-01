import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Card = ({ gif }) => {
  return (
    <Wrapper>
      <img src={gif.images.fixed_height.url} alt="" />
    </Wrapper>
  );
};

export default Card;
