# Anatomy React

Anatomy Design System's React component library.

## Installation

Run `npm install @boston-scientific/anatomy-react` in your application.

Import the component styles into your Sass files — it should be imported after tokens, but before the rest of the styles.

```css
@import '~@boston-scientific/anatomy-react/lib/styles/library';
```

@boston-scientific/anatomy-react also has a peer dependency on react-router-dom. You do not need to use react routing, but you will need to at least install @types/react-router-dom for typing purposes.
