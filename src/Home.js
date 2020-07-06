import React from "react";
import Header from "./Header";
import styled from "styled-components";
import friend from "./assets/friend.jpg";
import Responsive from "./common/Responsive";

const HomeBlock = styled(Responsive)`
  .imgBox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
  }
  img {
    @media (max-width: 1536px) {
      width: 1024px;
      height: 600px;
    }

    @media (max-width: 768px) {
      width: 400px;
      padding: 0 2rem;
      margin: 3rem auto 3rem auto;
    }
  }
`;

const Home = () => {
  return (
    <>
      <Header />
      <HomeBlock>
        <div className="imgBox">
          <img src={friend} alt="images" width="500" height="500" />
        </div>
      </HomeBlock>
    </>
  );
};

export default Home;