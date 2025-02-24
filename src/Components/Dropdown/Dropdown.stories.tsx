import { Meta, StoryFn } from "@storybook/react";
import Dropdown from "./Dropdown";

export default {
    title: "Components/Dropdown",
    component: Dropdown,
    argTypes: {
        options: { control: "object" },
        disabled: { control: "boolean" },
        backgroundColor: { control: "color" },
        textColor: { control: "color" },
        disabledBackgroundColor: { control: "color" },
    },
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ],
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ],
    disabled: true,
};

export const SelectedValue = Template.bind({});
SelectedValue.args = {
    options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ],
    onChange: (value) => console.log(`Selected: ${value}`),
};

export const Colored = Template.bind({});
Colored.args = {
    options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ],
    backgroundColor: "lightblue",
    textColor: "darkblue",
};

export const DisabledColored = Template.bind({});
DisabledColored.args = {
    options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ],
    disabled: true,
    disabledBackgroundColor: "lightgray",
};