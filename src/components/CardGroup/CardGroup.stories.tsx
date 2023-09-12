import type { Meta } from '@storybook/react';
import { useState, useEffect } from 'react';

import CardGroup from './CardGroup';
import { twoUpCardLayout, threeUpCardLayout, fourUpCardLayout } from './CardGroup-data';

const meta = {
  title: 'Components/Card group',
  component: CardGroup,
  argTypes: {
    children: {
      control: 'object'
    }
  }
} satisfies Meta<typeof CardGroup>;

export default meta;

export const Playground = ({ ...args }) => {
  const [numOfCards, setNumOfCards] = useState([...twoUpCardLayout]);

  useEffect(() => {
    if (args.cardLayout?.includes('twoUp')) {
      setNumOfCards([...twoUpCardLayout]);
    } else if (args.cardLayout?.includes('threeUp')) {
      setNumOfCards([...threeUpCardLayout]);
    } else if (args.cardLayout?.includes('fourUp')) {
      setNumOfCards([...fourUpCardLayout]);
    } else {
      setNumOfCards([...twoUpCardLayout]);
    }
  }, [args.cardLayout, setNumOfCards]);

  return <CardGroup cardLayout={args.cardLayout}>{...numOfCards}</CardGroup>;
};
