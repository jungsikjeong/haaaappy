import React, { useState, useEffect } from "react";
import Header from "./Header";
import styled, { css } from "styled-components";
import { Transition } from "react-spring/renderprops";
import letterClose from "./assets/letterClose.png";
import letterOpen from "./assets/letterOpen.png";

const TextBlock = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    display: block;
    margin-top: 3rem;
    font-weight: bold;
  }
`;

const LetterBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
  padding: 0 1rem;

  img {
    @media (max-width: 1536px) {
      width: 25rem;
      cursor: pointer;
    }
    @media (max-width: 768px) {
      width: 20rem;
      cursor: pointer;
    }
  }
`;

const Letter = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Header />
      <TextBlock>
        <h2>편지가 궁금하신가여?</h2>
      </TextBlock>

      <Transition
        items={toggle}
        from={{ position: "absolute", opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {(toggle) =>
          toggle
            ? (props) => (
                // toggle=true일때
                <LetterBlock style={props} onClick={onToggle}>
                  <img src={letterOpen} alt="images" />
                </LetterBlock>
              )
            : (props) => (
                // toggle=false일때
                <LetterBlock style={props} onClick={onToggle}>
                  <img
                    src={letterClose}
                    alt="images"
                    style={{ marginTop: "3rem" }}
                  />
                </LetterBlock>
              )
        }
      </Transition>
    </>
  );
};

export default Letter;
