import { addons } from '@storybook/manager-api';
import theme from './theme';

addons.setConfig({
  theme,
  sidebar: {
    filters: {
      hiddenStories: (item) => !item.tags?.includes('hidden')
    }
  }
});
