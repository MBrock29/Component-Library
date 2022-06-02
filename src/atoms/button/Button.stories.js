import React from "react";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["Primary", "Secondary"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Buttons = Template.bind({});
