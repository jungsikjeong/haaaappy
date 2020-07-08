import React, {
  Fragment,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import Header from "./Header";
import styled from "styled-components";
import Webcam from "react-webcam";

import { Camera } from "react-cam";

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
    height: 800px;
    .text {
      margin: 0 auto;
      h2,
      h3 {
        margin: 0 auto;
        text-align: center;
      }
      h3 {
        margin-top: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: 350px;
    height: 400px;
    .text {
      margin: 0 auto;
      h2,
      h3 {
        margin: 0 auto;
        text-align: center;
      }
      h3 {
        margin-top: 0.8rem;
      }
    }
  }
`;

const Image = styled.img`
  @media (max-width: 1536px) {
    /* padding: 1rem; */
    margin: 0 auto;
    width: 850px;
    height: 700px;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 0 auto;
    width: 320px;
    height: 390px;
  }
`;

const Camera1 = () => {
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

  // 핸드폰 셀프카메라 on
  const videoConstraints = {
    width: 350,
    height: 400,
    facingMode: "user",
  };

  const cam = useRef(null);

  return (
    <>
      <Header />
      <CameraBlock>
        <Fragment>
          <Camera
            showFocus={true}
            front={false}
            capture={capture}
            ref={cam}
            width="80%"
            height="auto"
            focusWidth="80%"
            focusHeight="60%"
            btnColor="white"
          />
          <button onClick={(img) => cam.current.capture(img)}>
            Take image
          </button>
        </Fragment>
      </CameraBlock>
    </>
  );
};

export default Camera1;

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
