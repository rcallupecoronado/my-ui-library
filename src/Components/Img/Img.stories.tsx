import { Meta, StoryFn } from '@storybook/react';
import Img from './Img';
import { ImgProps } from './Img.types';

export default {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image',
    },
    width: {
      control: 'text',
      description: 'width of the image',
    },
    height: {
      control: 'text',
      description: 'height of the image',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the image',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the image',
    },
  },
} as Meta<typeof Img>;

const Template: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://www.rrc.ca/marcom/wp-content/uploads/sites/1/sites/99/2022/08/RRC-NDC_Exterior-0557-web_banner-1536x614.jpg',
  alt: 'Red River College',
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://www.rrc.ca/marcom/wp-content/uploads/sites/1/sites/99/2022/08/RRC-NDC_Exterior-0557-web_banner-1536x614.jpg',
  alt: 'Red River College',
  disabled: true,
};
