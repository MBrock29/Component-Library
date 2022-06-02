import { Primary, Secondary } from "./Button.styles.js";

export const Button = ({ variant }) => {
  switch (variant) {
    case "secondary":
      return <Secondary>Click me</Secondary>;
    default:
      return <Primary>Click me</Primary>;
  }
};
