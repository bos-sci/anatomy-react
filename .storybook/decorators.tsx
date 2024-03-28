import { Decorator, StoryFn } from '@storybook/react';

const withThemeWrapper: Decorator = (Story: StoryFn, context) => {
  const stylesheetLinks: NodeListOf<HTMLLinkElement> = document.querySelectorAll('link[rel="stylesheet"]');

  function replaceStylesheetLink(stylesheetLink: HTMLLinkElement, href: string) {
    const newStylesheetLink = document.createElement('link');
    newStylesheetLink.rel = 'stylesheet';
    newStylesheetLink.href = href;

    if (stylesheetLink.parentNode) {
      stylesheetLink.parentNode.replaceChild(newStylesheetLink, stylesheetLink);
    }
  }

  stylesheetLinks.forEach((stylesheetLink) => {
    if (context.globals.theme === 'corporate-light') {
      document.body.style.background = 'var(--neutral-100)';
      replaceStylesheetLink(
        stylesheetLink,
        '/node_modules/@boston-scientific/anatomy-tokens/lib/css/corporate/light.css'
      );
    } else if (context.globals.theme === 'corporate-dark') {
      document.body.style.background = 'var(--neutral-10)';
      replaceStylesheetLink(
        stylesheetLink,
        '/node_modules/@boston-scientific/anatomy-tokens/lib/css/corporate/dark.css'
      );
    } else if (context.globals.theme === 'watchman-light') {
      document.body.style.background = 'var(--neutral-100)';
      replaceStylesheetLink(
        stylesheetLink,
        '/node_modules/@boston-scientific/anatomy-tokens/lib/css/watchman/light.css'
      );
    } else if (context.globals.theme === 'watchman-dark') {
      document.body.style.background = 'var(--neutral-10)';
      replaceStylesheetLink(
        stylesheetLink,
        '/node_modules/@boston-scientific/anatomy-tokens/lib/css/watchman/dark.css'
      );
    }
  });

  return (
    <div className={context.globals.theme}>
      <Story />
    </div>
  );
};

export const componentDecorators = [withThemeWrapper];
