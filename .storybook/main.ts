import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {
    autodocs: true,
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
