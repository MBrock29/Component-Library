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
    nano: `${unit}px`, // 8px
    small: `${unit * 2}px`, // 16px
    medium: `${unit * 3}px`, // 24px
    large: `${unit * 4}px`, // 32px
    huge: `${unit * 8}px`, // 64px
    mega: `${unit * 16}px`, // 128px
  },
  breakpoint: {
    phone: "640px",
    tablet: "768px",
    smallDesktop: "900px",
    desktop: "1200px",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
