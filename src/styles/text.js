import { css } from "styled-components";

const textStyles = {
  heading: css`
    font-family: Nunito, sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 136%;
    letter-spacing: 0.05px;
  `,
  body: css`
    font-family: Nunito, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: -0.2px;
  `,
  body2: css`
    font-family: Nunito, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: -0.2px;
  `,
  message: css`
    font-family: Nunito, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 200;
    line-height: 90%;
  `,
};

export const transparentText = css`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-size: 100%;
  background-clip: text;
`;

export default textStyles;
