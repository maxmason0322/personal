import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { transparentText } from "../styles/text";

export default function ShimmerLink({ children, href, className }) {
  const textRef = useRef(null);
  const [duration, setDuration] = useState("3s");

  useEffect(() => {
    if (textRef.current) {
      const textLength = textRef.current.textContent.length;
      setDuration(`${textLength * 0.2}s`);
    }
  }, [children]);

  return (
    <ShimmerContainer className={className}>
      <BaseText ref={textRef} href={href} style={{ "--duration": duration }}>
        {children}
      </BaseText>
    </ShimmerContainer>
  );
}

const shimmerKeyframes = keyframes`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
`;

const ShimmerContainer = styled.span`
  position: relative;
  display: inline-block;
`;

const BaseText = styled.span`
  text-decoration: none;
  ${transparentText};
  overflow: clip;
  position: relative;
  font-size: lg;
  font-weight: medium;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 10%,
    rgba(255, 255, 255, 0.75) 50%,
    rgba(255, 255, 255, 0.1) 90%
  );
  background-size: 200% 100%;
  animation: ${shimmerKeyframes} var(--duration) infinite linear;

  &:hover {
    opacity: 0.8;
  }
`;
