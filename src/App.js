import { Responsive, WidthProvider } from "react-grid-layout";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { useEffect, useState } from "react";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import "./App.css";
import { ReactComponent as AppleSVG } from "./icons/logos/apple.svg";
import { ReactComponent as ArcSVG } from "./icons/logos/arc.svg";
import { ReactComponent as CssSVG } from "./icons/logos/css.svg";
import { ReactComponent as DiscordSVG } from "./icons/logos/discord.svg";
import { ReactComponent as FigmaSVG } from "./icons/logos/figma.svg";
import { ReactComponent as HtmlSVG } from "./icons/logos/html.svg";
import { ReactComponent as JsSVG } from "./icons/logos/js.svg";
import { ReactComponent as NodeSVG } from "./icons/logos/node_js.svg";
import { ReactComponent as NotionSVG } from "./icons/logos/notion.svg";
import { ReactComponent as NpmSVG } from "./icons/logos/npm.svg";
import { ReactComponent as PythonSVG } from "./icons/logos/python.svg";
import { ReactComponent as ReactSVG } from "./icons/logos/react.svg";
import { ReactComponent as RedditSVG } from "./icons/logos/reddit.svg";
import { ReactComponent as SlackSVG } from "./icons/logos/slack.svg";
import { ReactComponent as SpotifySVG } from "./icons/logos/spotify.svg";
import { ReactComponent as VsCodeSVG } from "./icons/logos/vs_code.svg";
import { ReactComponent as YoutubeSVG } from "./icons/logos/youtube.svg";
import { ReactComponent as LinkedIn } from "./icons/socials/linkedin.svg";
import { ReactComponent as Github } from "./icons/socials/github.svg";
import { ReactComponent as ChevronSVG } from "./icons/chevron.svg";
import ContactForm from "./components/ContactForm";
import gsap from "gsap";
import { colors } from "./styles/colors";
import Resume from "./components/Resume";
import textStyles from "./styles/text";
import ShimmerText from "./components/ShimmerText";
import Marquee from "react-fast-marquee";

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

  const rowHeight = 135;
  const margin = 15;

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

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    timeline.to(
      ".chevron2",
      {
        yPercent: -40,
        duration: 1,
        ease: "power1.inOut",
      },
      0
    );

    timeline.to(
      ".chevron3",
      {
        yPercent: -80,
        duration: 1,
        ease: "power1.inOut",
      },
      0
    );

    timeline.to(
      [".chevron2", ".chevron3"],
      {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        stagger: -0.2,
      },
      1.2
    );
  }, []);

  const layouts = [
    [
      { i: "linkedIn", x: 4.15, y: 0, w: 1.85, h: 2 },
      { i: "resume", x: 0, y: 5, w: 2, h: 0.8 },
      { i: "comingSoon", x: 0, y: 6, w: 2, h: 0.8 },
      { i: "contact", x: 2, y: 4, w: 4, h: 2 },
      { i: "marquee", x: 0, y: 3, w: 6, h: 0.8 },
      { i: "about", x: 0, y: 0, w: 2.3, h: 2 },
      { i: "github", x: 2.3, y: 0, w: 1.85, h: 2 },
      { i: "tech", x: 0, y: 4, w: 2, h: 0.8 },
    ],
    [
      { i: "linkedIn", x: 2, y: 0, w: 2, h: 2 },
      { i: "resume", x: 2, y: 4, w: 2, h: 1 },
      { i: "comingSoon", x: 0, y: 7, w: 2, h: 1 },
      { i: "contact", x: 0, y: 5, w: 4, h: 2 },
      { i: "marquee", x: 0, y: 2, w: 4, h: 0.8 },
      { i: "about", x: 0, y: 0, w: 2, h: 2 },
      { i: "github", x: 0, y: 3, w: 2, h: 2 },
      { i: "tech", x: 2, y: 3, w: 2, h: 1 },
    ],
    [
      { i: "linkedIn", x: 0, y: 4, w: 1, h: 1.3 },
      { i: "resume", x: 0, y: 5, w: 2, h: 0.8 },
      { i: "comingSoon", x: 0, y: 10, w: 2, h: 0.8 },
      { i: "contact", x: 0, y: 5, w: 2, h: 2 },
      { i: "marquee", x: 0, y: 2, w: 2, h: 0.8 },
      { i: "about", x: 0, y: 0, w: 2, h: 1.75 },
      { i: "github", x: 1, y: 4, w: 1, h: 1.3 },
      { i: "tech", x: 0, y: 3, w: 2, h: 0.8 },
    ],
  ];

  const ResponsiveGridLayout = WidthProvider(Responsive);

  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GridWrapper>
        <ResponsiveGridLayout
          className="layout"
          layouts={{
            lg: layouts[0],
            md: layouts[0],
            sm: layouts[1],
            xs: layouts[2],
          }}
          cols={{ lg: 6, md: 6, sm: 4, xs: 2 }}
          rowHeight={rowHeight}
          autoSize={true}
          margin={[margin, margin]}
          useCSSTransforms
          breakpoints={{ lg: 1300, md: 900, sm: 550, xs: 0 }}
        >
          <Box key="linkedIn">
            <LinkedInSquare
              onClick={(e) =>
                handleRedirect(e, "https://www.linkedin.com/in/maxdmason/")
              }
              onMouseDown={(e) => e.stopPropagation()}
              className="linkedin"
            />
          </Box>
          <Box key="resume">
            <Resume />
          </Box>
          <Box key="comingSoon">
            <ComingSoon className="coming-soon">
              More coming soon
              <span className="dot-one">.</span>
              <span className="dot-two">.</span>
              <span className="dot-three">.</span>
            </ComingSoon>
          </Box>
          <Box key="contact">
            <ContactForm />
          </Box>
          <Box key="marquee">
            <StyledMarquee autoFill>
              <AppleSVG />
              <CssSVG />
              <ArcSVG />
              <DiscordSVG />
              <HtmlSVG />
              <FigmaSVG />
              <JsSVG />
              <NotionSVG />
              <NodeSVG />
              <RedditSVG />
              <SlackSVG />
              <PythonSVG />
              <SpotifySVG />
              <VsCodeSVG />
              <ReactSVG />
              <YoutubeSVG />
              <NpmSVG />
            </StyledMarquee>
          </Box>
          <Box key="about">
            <AboutWrapper>
              <div>Max Mason</div>
              <AboutText>
                I love tech and learning how to create software.
              </AboutText>
              <AboutText>
                I'm currently working at{" "}
                <ShimmerText
                  onClick={(e) => {
                    handleRedirect(e, "https://www.reformcollective.com/");
                  }}
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  Reform Collective
                </ShimmerText>{" "}
                as a Junior Developer.
              </AboutText>
            </AboutWrapper>
          </Box>
          <Box key="github">
            <GithubSquare
              onClick={(e) =>
                handleRedirect(e, "https://github.com/maxmason0322")
              }
              onMouseDown={(e) => e.stopPropagation()}
              className="github"
            />
          </Box>
          <Tech key="tech">
            <Chevrons>
              <Chevron />
              <HiddenChevron className="chevron2" />
              <HiddenChevron className="chevron3" />
            </Chevrons>
            <div>Software I like to use</div>
            <Chevrons>
              <Chevron />
              <HiddenChevron className="chevron2" />
              <HiddenChevron className="chevron3" />
            </Chevrons>
          </Tech>
        </ResponsiveGridLayout>
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
  margin: 0 auto;
`;

const Box = styled.div`
  background-color: ${colors.black};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 8px 10px 3px black;
  overflow: clip;
  position: relative;

  &:hover {
    cursor: grab;
  }
`;

const ComingSoon = styled.div`
  ${textStyles.body};
  color: ${colors.white};
`;

const LinkedInSquare = styled(LinkedIn)`
  width: 100px;
  height: 100px;
  cursor: pointer;

  path {
    fill: white;
  }
`;

const GithubSquare = styled(Github)`
  width: 100px;
  height: 100px;
  cursor: pointer;

  path {
    fill: white;
  }
`;

const AboutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: ${colors.white};
  ${textStyles.heading};
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const AboutText = styled.div`
  ${textStyles.body};
  padding-top: 12px;
`;

const StyledMarquee = styled(Marquee)`
  Svg {
    margin-left: 100px;
  }
`;

const Tech = styled(Box)`
  ${textStyles.body};
  color: ${colors.white};
  gap: 18px;
`;

const Chevrons = styled.div`
  position: relative;
  margin-top: 10px;
`;

const Chevron = styled(ChevronSVG)`
  width: 24px;
  height: 24px;
`;

const HiddenChevron = styled(Chevron)`
  position: absolute;
  left: 0;
`;
