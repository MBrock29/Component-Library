import { ThemeProvider } from "styled-components";

const unit = 8;

const theme = {
  colors: {
    primary: "#00bc9c", // Green
    secondary: "#4267B2",
    white: "#ffffff",
    success: "#81e979",
    error: "#f36",
    red: "#d8151b",
    dark: "#344050",
    extraDark: "#181820",
    blue: "#4979b5",
    grey: "#efefef",
    text: "#d6edff",
  },
  size: {
    OneX: `${unit}px`, // 8px
    TwoX: `${unit * 2}px`, // 16px
    ThreeX: `${unit * 3}px`, // 24px
    FourX: `${unit * 4}px`, // 32px
    FiveX: `${unit * 5}px`, // 40px
    SixX: `${unit * 6}px`, // 48px
    SevenX: `${unit * 7}px`, // 56px
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
