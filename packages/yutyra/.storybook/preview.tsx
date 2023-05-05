import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@theme/context";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      defaultValue: "default",
      toolbar: {
        icon: "circlehollow",
        items: ["default", "simple"],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <ThemeProvider theme={context.globals.theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
