import { ReactComponent as ArrowSVG } from "../icons/arrow.svg";
import { colorPalette } from "../styles/colors";
import styled from "styled-components";

export default function Link() {
  return (
    <a href="https://www.google.com">
      <Arrow />
    </a>
  );
}

const Arrow = styled(ArrowSVG)`
  width: 20px;
  height: 20px;

  path {
    fill: rgba(255, 255, 255, 0.8);
  }
`;
