import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button, { ButtonVersion } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ResumeButton = Template.bind({});
ResumeButton.args = {
  label: "Résumé",
  version: ButtonVersion.ACTION,
};

export const HeaderButton = Template.bind({});
HeaderButton.args = {
  label: "Experience",
  version: ButtonVersion.HEADER,
  selected: false
};
