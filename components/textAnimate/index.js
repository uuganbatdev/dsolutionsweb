import React from "react";
import Typewriter from "typewriter-effect";
import styled from "@emotion/styled";

const TextAni = () => {
  return (
    <TextStyled>
      <div className="textStyled">
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome To ...")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Diverse Solutions LLC")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </div>
    </TextStyled>
  );
};

const TextStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: inline;
  z-index: 1;
  text-align: center;
  margin: auto;
  font-size: 5rem;
  font-family: "Bungee", cursive;
  color: #ccc;
`;

export default TextAni;
