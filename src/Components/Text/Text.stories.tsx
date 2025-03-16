import { Meta, StoryFn } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    size: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' }, // Add backgroundColor control
  },
} as Meta<typeof Text>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'This is a sample text',
  size: '16px',
  color: '#444',
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: 'Disabled Text',
  disabled: true,
};
