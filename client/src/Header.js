import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Responsive from "./common/Responsive";
import logo from "./assets/logo.gif";

const Container = styled(Responsive)``;

const ImageBlock = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 150px;
  }
`;

const HeaderBlock = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: bold;
`;

const HeaderMenu = styled.div``;

const SLink = styled(Link)`
  color: rgb(29, 29, 31);
`;

const Header = () => {
  return (
    <Container>
      <ImageBlock>
        <Link to="/">
          <img src={logo} alt="images" />
        </Link>
      </ImageBlock>

      <HeaderBlock>
        <HeaderMenu>
          <SLink to="/gift">GIFT</SLink>
        </HeaderMenu>
        <HeaderMenu>
          <SLink to="letter">LETTER</SLink>
        </HeaderMenu>
        <HeaderMenu>
          <SLink to="camera">CAMERA</SLink>
        </HeaderMenu>
        <HeaderMenu>
          <SLink to="hbd">HBD</SLink>
        </HeaderMenu>
      </HeaderBlock>
    </Container>
  );
};

export default Header;
