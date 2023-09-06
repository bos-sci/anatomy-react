import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from './Dropdown';
import Button from '../Button';
import DropdownGroupName from './DropdownGroupName';
import Icon from '../Icon';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered'
  },
  args: {
    triggerText: 'Dropdown trigger'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Playground: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
      <Button>Action 3</Button>
    </Dropdown>
  )
};

export const SectionHeaders: Story = {
  name: 'Section headers',
  render: (args) => (
    <Dropdown {...args}>
      <DropdownGroupName>Action group 1</DropdownGroupName>
      <Button>Action 1a</Button>
      <Button>Action 1b</Button>
      <DropdownGroupName>Action group 2</DropdownGroupName>
      <Button>Action 2a</Button>
      <Button>Action 2b</Button>
    </Dropdown>
  )
};

export const HighlightedAction: Story = {
  name: 'Highlighted action',
  args: {
    highlightedAction: <Button>Highlighted action</Button>
  },
  render: (args) => (
    <Dropdown {...args}>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
      <Button>Action 3</Button>
    </Dropdown>
  )
};

export const WithIcons: Story = {
  name: 'With icons',
  args: {
    icon: 'ellipsis'
  },
  render: (args) => (
    <Dropdown {...args}>
      <Button>
        <Icon name="plus" size="2x" className="bsds-icon-left" />
        Action 1
      </Button>
      <Button>
        <Icon name="plus" size="2x" className="bsds-icon-left" />
        Action 2
      </Button>
      <Button>
        <Icon name="plus" size="2x" className="bsds-icon-left" />
        Action 3
      </Button>
    </Dropdown>
  )
};
