import type { StorybookConfig } from '@storybook/react-vite';
import turbosnap from 'vite-plugin-turbosnap';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  managerHead: (head) => `
    ${head}
    <link rel="preload" href="/node_modules/@boston-scientific/anatomy-tokens/lib/css/corporate/light.css" as="style"/>
    <link rel="preload" href="/node_modules/@boston-scientific/anatomy-tokens/lib/css/corporate/dark.css" as="style"/>
    <link rel="preload" href="/node_modules/@boston-scientific/anatomy-tokens/lib/css/watchman/light.css" as="style"/>
    <link rel="preload" href="/node_modules/@boston-scientific/anatomy-tokens/lib/css/watchman/dark.css" as="style"/>
  `,
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-mdx-gfm'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  staticDirs: ['../public/assets'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      skipChildrenPropWithoutDoc: false,
      shouldRemoveUndefinedFromOptional: true
    }
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins:
        configType === 'PRODUCTION'
          ? [
              turbosnap({
                // This should be the base path of your storybook.  In monorepos, you may only need process.cwd().
                rootDir: config.root ?? process.cwd()
              })
            ]
          : []
    });
  }
};
export default config;
