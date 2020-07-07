import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import box from "./assets/box.jpg";
import losing from "./assets/losing.png";
import food from "./assets/food.jpg";
import food2 from "./assets/food2.png";
import { Transition } from "react-spring/renderprops";

const TextBlock = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    display: block;
    margin-top: 3rem;
    font-weight: bold;
  }
`;

const GiftBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  right: 0;
  left: 0;
  img {
    cursor: pointer;
    @media (max-width: 1536px) {
      width: 220px;
      margin: 0 auto;
      padding: 0 1rem;
      animation-delay: 0s;
    }

    @media (max-width: 768px) {
      width: 100px;
      padding: 0 1rem;
      margin-right: 1rem;
      margin-left: 1rem;
    }
  }
`;

const ContentsBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
  padding: 0 1rem;
`;

// 선물 내용물
const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 30rem;

  .box0 {
    display: flex;
    justify-content: center;

    img {
      @media (max-width: 1536px) {
        width: 80%;
        cursor: pointer;
      }
      @media (max-width: 768px) {
        width: 20rem;
        cursor: pointer;
      }
    }
  }

  .box1 {
    display: flex;
    justify-content: center;

    img {
      @media (max-width: 1536px) {
        width: 15rem;
        cursor: pointer;
      }
      @media (max-width: 768px) {
        width: 17rem;
        cursor: pointer;
      }
    }
  }

  .box2 {
    display: flex;
    justify-content: center;

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
  }
`;

const Gift = () => {
  const [toggle, setToggle] = useState(false);
  const [number, setNumber] = useState("");
  const onToggle = () => {
    setToggle(!toggle);
    setNumber(Math.round(Math.random() * 2));
  };
  const onToggleFalse = () => {
    setToggle(false);
  };
  // useEffect(() => {
  //   console.log(number1, number2, number3);
  // }, [number1, number2, number3]);

  return (
    <>
      <Header />
      <TextBlock>
        <h2>
          두근두근 랜덤 뽑기!
          <br />
          선물을 골라주세요
        </h2>
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
                // toggle가 true일때 선물박스안의 선물을보여줌
                <ContentsBlock style={props} onClick={onToggleFalse}>
                  <ContentsContainer>
                    {number === 0 && (
                      <div className="box0">
                        <img src={losing} width="300" alt="꽝" />
                      </div>
                    )}
                    {number === 1 && (
                      <div className="box1">
                        <img src={food} width="300" alt="꽝" />
                      </div>
                    )}

                    {number === 2 && (
                      <div className="box2">
                        <img src={food2} width="300" alt="꽝" />
                      </div>
                    )}
                  </ContentsContainer>
                </ContentsBlock>
              )
            : (props) => (
                // toggle가 false일때 선물박스를 보여줌
                <GiftBlock style={props}>
                  <img src={box} alt="images" onClick={onToggle} />
                  <img src={box} alt="images" onClick={onToggle} />
                  <img src={box} alt="images" onClick={onToggle} />
                </GiftBlock>
              )
        }
      </Transition>
    </>
  );
};

export default Gift;
