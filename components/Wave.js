import styled from "@emotion/styled";
import TextAni from "../components/textAnimate/index";
import React from "react";

function Wave() {
  return (
    <WaveStyled>
      <iframe src="wave.html"></iframe>
      <TextAni />
    </WaveStyled>
  );
}

const WaveStyled = styled.div`
  z-index: -10;
  height: 100vh;
  width: 100vw;
  iframe {
    border: none;
    width: 100vw;
    height: 100vh;
    position: absolute;
  }
`;

export default Wave;
