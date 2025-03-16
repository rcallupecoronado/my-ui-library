import { Meta, StoryFn } from '@storybook/react';
import Card from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    textColor: { control: 'color' },
  },
} as Meta<typeof Card>;

const Template: StoryFn<CardProps> = (args: CardProps) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Sample Card',
  content: 'This is a sample card content.',
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  title: 'Card with Children',
  content: 'This card has child elements.',
  children: <button>Click Me</button>,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Card',
  content: 'This card is disabled.',
  disabled: true,
};

export const Colored = Template.bind({});
Colored.args = {
  title: 'Colored Card',
  content: 'This card has custom colors.',
  backgroundColor: 'lightblue',
  textColor: 'darkblue',
};
