import type { Preview } from '@storybook/react';
import theme from './theme';
import './global.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    options: {
      storySort: {
        method: 'alphabetical'
        // TODO: uncomment when we build out these sections
        // order: ['Getting started', 'Tokens', 'Components', 'Patterns']
      }
    },
    docs: {
      theme
    }
  }
};

export default preview;
