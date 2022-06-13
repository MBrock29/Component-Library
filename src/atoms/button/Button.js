import { Primary, Secondary } from "./Button.styles.js";

export const Button = ({ variant, handleClick, handleText }) => {
  switch (variant) {
    case "secondary":
      return (
        <Secondary onClick={handleClick}>
          {handleText ? handleText : "Click here"}
        </Secondary>
      );
    default:
      return (
        <Primary onClick={handleClick}>
          {handleText ? handleText : "Click here"}
        </Primary>
      );
  }
};
