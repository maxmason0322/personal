import { ReactComponent as ArrowSVG } from "../icons/arrow.svg";
import styled from "styled-components";
import colors from "../styles/colors";

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
    fill: ${colors.white};
  }
`;
