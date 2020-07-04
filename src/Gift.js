import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import box from "./assets/box.jpg";
import losing from "./assets/losing.png";
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
  margin-top: 5rem;
  padding: 0 1rem;
`;

// 선물 내용물
const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 30rem;
  /* background: black; */
  .box0 {
    img {
      width: 100%;
    }
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: black;
  outline: none;
  cursor: pointer;
  float: right;
`;

const Gift = () => {
  const [toggle, setToggle] = useState(true);
  const [number, setNumber] = useState("");
  const onToggle = () => {
    setToggle(!toggle);
    setNumber(Math.round(Math.random() * 2));
  };

  // 0~2까지 랜덤

  const random = () => {};

  // useEffect(() => {
  //   console.log(number1, number2, number3);
  // }, [number1, number2, number3]);

  useEffect(() => {
    console.log(number);
  });
  return (
    <>
      <Header />
      <TextBlock>
        <h2 onClick={random}>
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
                <ContentsBlock style={props} onClick={onToggle}>
                  <ContentsContainer>
                    <div className="box0">
                      <img src={losing} width="300" alt="꽝" />
                      <Button>Again..</Button>
                    </div>
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
