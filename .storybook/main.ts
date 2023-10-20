import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;

const config: StorybookConfig = {
  stories: ["../lib/**/*.story.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: ["style-loader", "css-loader", "postcss-loader"],
          },
        ],
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: false,
  },
  typescript: {
    reactDocgen: false,
  },
};
export default config;
