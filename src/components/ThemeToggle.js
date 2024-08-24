import React, { useRef } from "react";
import styled from "styled-components";
import { useTheme } from "../ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const wrapperRef = useRef(null);

  const handleToggle = (e) => {
    e.preventDefault();
    toggleTheme();
  };

  return (
    <Wrapper ref={wrapperRef} theme={isDarkMode ? "#222529" : "#F8F9FA"}>
      <button onClick={handleToggle} onMouseDown={(e) => e.stopPropagation()}>
        Toggle theme (currently {isDarkMode ? "dark" : "light"})
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

export default ThemeToggle;
