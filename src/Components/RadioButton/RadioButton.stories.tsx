import { Meta, StoryFn } from '@storybook/react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    checked: { control: 'boolean' },
  },
} as Meta<typeof RadioButton>;

const Template: StoryFn<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Option 1',
  name: 'example',
  value: 'option1',
  checked: false,
  onChange: (event) => console.log('Selected:', event.target.value),
};
