import React from "react";
import Header from "./Header";
import styled from "styled-components";
import friend from "./assets/friend.jpg";
import Responsive from "./common/Responsive";
import { Helmet } from "react-helmet-async";

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
      width: 370px;
      height: 350px;
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
        {/* <Helmet>
          <title>Home - happyDay</title>
        </Helmet> */}
        <div className="imgBox">
          <img src={friend} alt="images" width="500" height="500" />
        </div>
      </HomeBlock>
    </>
  );
};

export default Home;

// @media (max-width: 1536px) {
//   width: 220px;
//   margin: 0 auto;
//   padding: 0 1rem;
//   animation-delay: 0s;
// }

// @media (max-width: 768px) {
//   width: 220px;
//   margin: 0 auto;
//   padding: 0 1rem;
//   animation-delay: 0s;
// }
