import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';
import TabPanel from './TabPanel';

const meta = {
  title: 'Components/Tabs',
  component: Tabs
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Playground: Story = {
  render: (args) => (
    <Tabs tablistLabel="Demo tabs">
      <TabPanel tabName="Tab 1">Tab panel 1</TabPanel>
      <TabPanel tabName="Tab 2">Tab panel 2</TabPanel>
      <TabPanel tabName="Tab 3">Tab panel 3</TabPanel>
    </Tabs>
  )
};

export const Overflow: Story = {
  render: (args) => (
    <Tabs tablistLabel="Demo tabs">
      <TabPanel tabName="Tab 1">Tab panel 1</TabPanel>
      <TabPanel tabName="Tab 2">Tab panel 2</TabPanel>
      <TabPanel tabName="Tab 3">Tab panel 3</TabPanel>
      <TabPanel tabName="Tab 4">Tab panel 4</TabPanel>
      <TabPanel tabName="Tab 5">Tab panel 5</TabPanel>
      <TabPanel tabName="Tab 6">Tab panel 6</TabPanel>
      <TabPanel tabName="Tab 7">Tab panel 7</TabPanel>
      <TabPanel tabName="Tab 8">Tab panel 8</TabPanel>
      <TabPanel tabName="Tab 9">Tab panel 9</TabPanel>
      <TabPanel tabName="Tab 10">Tab panel 10</TabPanel>
    </Tabs>
  )
};
