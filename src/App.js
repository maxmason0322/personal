import GridLayout from "react-grid-layout";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { useEffect, useRef, useState } from "react";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import "./App.css";
import { ReactComponent as LinkedInSVG } from "./icons/linkedin.svg";
import { ReactComponent as GithubSVG } from "./icons/github.svg";
import ContactForm from "./components/ContactForm";
import gsap from "gsap";
import { colors } from "./styles/colors";

const GRID_WIDTH = 1200;

const lightTheme = {
  body: "#eaecef",
  text: "#0A0C10",
};

const darkTheme = {
  body: "#0A0C10",
  text: "#eaecef",
};

function AppContent() {
  const { isDarkMode } = useTheme();
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const rowHeight = 270;
  const margin = 15;

  const calcHeight = (h) => {
    return rowHeight * h + margin * (h - 1);
  };

  const handleRedirect = (e, url) => {
    e.stopPropagation();
    e.preventDefault();
    window.open(url, "_blank");
  };

  window.addEventListener("load", () => {
    setIsFullyLoaded(true);
  });

  useEffect(() => {
    if (isFullyLoaded) {
      gsap.to(".layout", {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power2.out",
        delay: 1,
      });
    }
  }, [isFullyLoaded]);

  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 1 },
    { i: "b", x: 1, y: 0, w: 1, h: 1 },
    { i: "c", x: 2, y: 1, w: 1, h: 1 },
    { i: "d", x: 0, y: 1, w: 2, h: 1 },
    { i: "e", x: 2, y: 2, w: 1, h: 1 },
    { i: "f", x: 3, y: 0, w: 1, h: 1 },
    { i: "g", x: 3, y: 1, w: 1, h: 1 },
  ];

  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GridWrapper>
        <Grid
          className="layout"
          layout={layout}
          cols={4}
          rowHeight={rowHeight}
          width={GRID_WIDTH}
          margin={[margin, margin]}
          useCSSTransforms
        >
          <Box key="a">
            <LinkedIn
              onClick={(e) =>
                handleRedirect(e, "https://www.linkedin.com/in/maxdmason/")
              }
              onMouseDown={(e) => e.stopPropagation()}
              className="linkedin"
            />
          </Box>
          <Box key="b">b</Box>
          <Box key="c">c</Box>
          <Box key="d">
            <ContactForm />
          </Box>
          <Box key="e">e</Box>
          <Box key="f">f</Box>
          <Box key="g">
            <Github
              onClick={(e) =>
                handleRedirect(e, "https://github.com/maxmason0322")
              }
              onMouseDown={(e) => e.stopPropagation()}
              className="github"
            />
          </Box>
        </Grid>
      </GridWrapper>
    </StyledThemeProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const GridWrapper = styled.div`
  width: ${GRID_WIDTH}px;
  margin: 0 auto;
`;

const Grid = styled(GridLayout)`
  position: relative;
`;

const Box = styled.div`
  background-color: ${colors.black};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 8px 10px 3px black;
  overflow: clip;

  &:hover {
    cursor: grab;
  }
`;

const LinkedIn = styled(LinkedInSVG)`
  width: 100px;
  height: 100px;
  cursor: pointer;

  path {
    fill: white;
  }
`;

const Github = styled(GithubSVG)`
  width: 100px;
  height: 100px;
  cursor: pointer;

  path {
    fill: white;
  }
`;
