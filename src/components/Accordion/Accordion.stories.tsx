import type { Meta, StoryObj } from '@storybook/react';

import Accordion from './Accordion';
import AccordionPanel from './AccordionPanel';

const meta = {
  title: 'Components/Accordion',
  component: Accordion
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Playground: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionPanel heading="Accordion 1">Accordion panel 1</AccordionPanel>
      <AccordionPanel heading="Accordion 2">Accordion panel 2</AccordionPanel>
      <AccordionPanel heading="Accordion 3">Accordion panel 3</AccordionPanel>
    </Accordion>
  )
};
