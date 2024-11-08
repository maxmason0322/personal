import { ReactComponent as DownloadSVG } from "../icons/download.svg";
import { colors } from "../styles/colors";
import styled from "styled-components";
import BlinkingEye from "./BlinkingEye";
import textStyles from "../styles/text";
import gsap from "gsap";
import { useRef, useEffect } from "react";

export default function Resume() {
  const resumeUrl = "/assets/MaxMasonResume.pdf";
  const textRef = useRef(null)

  const handleRedirect = (e, url) => {
    e.stopPropagation();
    e.preventDefault();
    window.open(url, "_blank");
  };

  useEffect(() => {
    gsap.to(textRef.current, {
      opacity: 1,
      duration: 1.5,
      delay: 1,
    })
  }, [textRef.current])

  const downloadAnimation = () => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });
    tl.to(
      ".download-arrow",
      {
        y: 6,
        duration: 0.7,
        ease: "power1.inOut",
      },
      0.3
    );

    tl.to(
      ".download-arrow",
      {
        scale: 0,
        transformOrigin: "center",
        duration: 0.4,
        ease: "power1.out",
      },
      1
    );
  };

  downloadAnimation();

  return (
    <Wrapper>
      <Text ref={textRef}>Resume</Text>
      <Icons>
        <StyledButton
          onClick={(e) => handleRedirect(e, "/assets/MaxMasonResume.pdf")}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <BlinkingEye />
        </StyledButton>
        <StyledButton onMouseDown={(e) => e.stopPropagation()}>
          <a href={resumeUrl} download="/assets/MaxMasonResume.pdf">
            <Download />
          </a>
        </StyledButton>
      </Icons>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 72px;
`;

const StyledButton = styled.button`
  background-color: transparent;
  transition: all 0.5s linear;
  padding: 0;

  &:hover {
    cursor: pointer;
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.8))
      drop-shadow(0 0 4px rgba(255, 255, 255, 0.9))
      drop-shadow(0 0 12px rgba(255, 255, 255, 0.7))
      drop-shadow(0 0 25px rgba(200, 200, 200, 0.5));
  }
`;

const Download = styled(DownloadSVG)`
  padding-top: 3px;
  width: 30px;
  height: 30px;
`;

const Text = styled.div`
  ${textStyles.body};
  color: ${colors.white};
  opacity: 0;
`;

const Icons = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
