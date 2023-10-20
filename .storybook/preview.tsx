// import type { Preview } from "@storybook/react";
import {
  MantineProvider,
  useMantineColorScheme,
  ActionIcon,
  DirectionProvider,
  useDirection,
} from "@mantine/core";
import React from 'react';

import '@mantine/core/styles.css';
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <MantineProvider>
        <Story />
      </MantineProvider>
    ),
  ],
};

export default preview;
