import React from "react";
import Header from "./Header";
import styled from "styled-components";
import cake from "./assets/cake.gif";
import ReactAudioPlayer from "react-audio-player";
import song from "./assets/song.mp3";
import { Helmet } from "react-helmet-async";

const HbdBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    @media (max-width: 1536px) {
      padding: 1rem;
      width: 890px;
      height: 650px;
    }

    @media (max-width: 768px) {
      width: 350px;
      height: 400px;
    }
  }
`;

const Player = styled(ReactAudioPlayer)`
  width: 100%;
  padding: 0 1rem;
`;

const HappyBirthday = () => {
  return (
    <>
      <Header />
      <HbdBlock>
        <Helmet>
          <title>HappyBirthday - happyDay</title>
        </Helmet>
        <img src={cake} alt="cakeImage" />
        <Player src={song} autoPlay loop />
      </HbdBlock>
    </>
  );
};

export default HappyBirthday;
