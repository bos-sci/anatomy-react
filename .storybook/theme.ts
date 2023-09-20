import { create } from '@storybook/theming/create';
// import PackageInfo from './../package.json';

export default create({
  base: 'light',
  brandUrl: 'https://github.com/bos-sci/anatomy-react',
  brandImage: 'https://www.anatomydesignsystem.com/static/media/logo-anatomy.0faca9611613b9e6df82cc3634f7a00c.svg',
  // brandTitle: `@boston-scientific/anatomy-react@${PackageInfo.version}`, // Replaces brandImage with the package name and version
  fontBase: "'SST-Roman', 'Helvetica Neue', Arial, sans-serif",
  fontCode: 'monospace',
  textColor: '#000000',
  textInverseColor: '#ffffff',
  textMutedColor: '#666666',
  colorPrimary: '#000000',
  colorSecondary: '#000000',
  appBg: '#ffffff', // Sets the background color of the sidebar and accessibility results
  appContentBg: '#ffffff', // Sets the background color of the docs page and stories
  // appBorderColor: '', // Sets the border color of the search input, docs blocks, stories, controls, etc.
  appBorderRadius: 0, // Sets the border radius of doc blocks and stories
  barTextColor: '#000000', // Sets the color of the icons in the toolbars on docs and stories
  // barHoverColor: '', // Unclear what this sets
  barSelectedColor: '#000000', // Sets the color of the active tab in stories, e.g.: controls, actions, accessibility
  barBg: '#ffffff', // Sets the background color of the toolbars on docs and stories
  buttonBg: '#ffffff', // Sets the background of the buttons in controls, e.g.: Set object buttons
  buttonBorder: '#000000', // Sets the border color of the buttons in controls
  booleanBg: '#f2f2f2', // Sets the background color of the toggle in controls, e.g.: Set boolean
  booleanSelectedBg: '#ffffff', // Sets the background color of the selected state of the toggle
  inputBg: '#ffffff', // Sets the background color of inputs in controls
  inputBorder: '#000000', // Sets the border color of inputs in controls
  inputTextColor: '#000000', // Sets the tex color of inputs in controls
  inputBorderRadius: 0 // Sets the border radius of inputs in controls,
});
