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

export const globalTypes = {
  theme: {
    name: 'theme',
    // Text that will be shown on icon hover
    description: 'Component themes',
    defaultValue: 'Corporate light',
    toolbar: {
      title: 'Theme',
      icon: 'circlehollow',
      items: [
        { value: 'corporate-light', title: 'Corporate light', icon: 'circlehollow' },
        { value: 'corporate-dark', title: 'Corporate dark', icon: 'circle' },
        { value: 'watchman-light', title: 'Watchman light', icon: 'circlehollow' },
        { value: 'watchman-dark', title: 'Watchman dark', icon: 'circle' }
      ],
      snowName: true
    }
  }
};

export default preview;
