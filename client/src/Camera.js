import React, { useState, useCallback, useRef } from "react";
import Header from "./Header";
import styled from "styled-components";
import Webcam from "react-webcam";

const CameraBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Camera = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <>
      <Header />
      <CameraBlock>
        <Webcam
          audio={false}
          width={355}
          height={480}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
        <div style={{ fontSize: "3rem" }} onClick={capture}>
          📸
        </div>
        {imgSrc && <img src={imgSrc} />}
      </CameraBlock>
    </>
  );
};

export default Camera;

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
