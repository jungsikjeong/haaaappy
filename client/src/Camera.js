import React, { useState, useCallback, useRef, useEffect } from "react";
import Header from "./Header";
import styled from "styled-components";
import Webcam from "react-webcam";

const CameraBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .captureBtn {
    /* position: absolute; */
    /* top: 43rem; */
    font-size: 3rem;
    cursor: pointer;
  }
`;

const WebcamStyle = styled(Webcam)`
  @media (max-width: 1536px) {
    margin-top: 3rem;
    width: 890px;
    height: 700px;
  }

  @media (max-width: 768px) {
    /* margin-top: 3rem; */
    width: 350px;
    height: 400px;
  }
`;

const ImageContainer = styled.div`
  @media (max-width: 1536px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: white;
    margin-top: 3rem;
    width: 890px;
    height: 700px;
    .text {
      margin: 0 auto;
      h2,
      h3 {
        text-align: center;
      }
    }
  }

  @media (max-width: 768px) {
    /* margin-top: 3rem; */
    width: 350px;
    height: 400px;
  }
`;

const Image = styled.img`
  @media (max-width: 1536px) {
    padding: 1rem;
    width: 890px;
    height: 650px;
  }

  @media (max-width: 768px) {
    /* margin-top: 3rem; */
    width: 350px;
    height: 400px;
  }
`;

const Camera = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    if (imgSrc) {
      setImgSrc(null);
      return;
    }
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc, imgSrc]);

  return (
    <>
      <Header />
      <CameraBlock>
        {imgSrc ? (
          <ImageContainer>
            <Image src={imgSrc} />
            <div className="text">
              <h2>2020.08.11</h2>
              <h3>차누리 생일 기념 🎂</h3>
            </div>
          </ImageContainer>
        ) : (
          <WebcamStyle
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
        )}

        <div className="captureBtn" onClick={capture}>
          📸
        </div>
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
