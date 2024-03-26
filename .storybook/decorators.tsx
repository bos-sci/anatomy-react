import React from 'react';
import { Decorator, StoryFn } from '@storybook/react';

const withWrapper: Decorator = (Story: StoryFn, context) => {
  // document.body.style.background = 'aquamarine';
  const linkElements: NodeListOf<HTMLLinkElement> = document.querySelectorAll('link[rel="stylesheet"]');

  // const styleElement = document.querySelector('style[data-vite-dev-id]');

  // if (styleElement) {
  //   const cssText = styleElement.textContent;
  //   console.log(cssText);
  // }

  linkElements.forEach((linkElement) => {
    if (linkElement.href.includes('corporate/light.css')) {
      const newLinkElement = document.createElement('link');
      newLinkElement.rel = 'stylesheet';
      newLinkElement.href = '/node_modules/@boston-scientific/anatomy-tokens/lib/css/watchman/light.css';

      if (linkElement.parentNode !== null) {
        linkElement.parentNode.replaceChild(newLinkElement, linkElement);
      }
    }
  });

  return (
    <div className={`${context.globals.theme}`}>
      <Story />
    </div>
  );
};

export const componentDecorators = [withWrapper];
