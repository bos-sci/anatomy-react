import type { Meta, StoryObj } from '@storybook/react';
import { createRef } from 'react';

import Modal, { ModalRef } from './Modal';
import Button from '../Button';
import logo from '../../stories/assets/logo-bsc-tagline.svg';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    title: 'Modal title'
  }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

// Playground
const playgroundRef = createRef<ModalRef>();
const positiveAction = <Button>Positive action</Button>;

export const Playground: Story = {
  args: {
    positiveAction,
    negativeAction: <Button onClick={() => playgroundRef.current?.close()}>Cancel</Button>
  },
  render: (args) => (
    <>
      <Button type="button" aria-haspopup="true" onClick={() => playgroundRef.current?.showModal()}>
        Open modal
      </Button>
      <Modal ref={playgroundRef} {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet varius sapien. Nullam diam nisl, congue
        bibendum orci eu, fermentum consequat nulla. Nunc luctus placerat mauris, eu convallis ante sollicitudin in.
        Maecenas orci eros, placerat bibendum rhoncus a, tincidunt vitae lectus.
      </Modal>
    </>
  )
};

// Required Action
const requiredActionRef = createRef<ModalRef>();
export const RequiredAction: Story = {
  name: 'Required action',
  args: {
    positiveAction,
    negativeAction: <Button onClick={() => requiredActionRef.current?.close()}>Cancel</Button>,
    hasClose: false
  },
  render: (args) => (
    <>
      <Button type="button" aria-haspopup="true" onClick={() => requiredActionRef.current?.showModal()}>
        Open modal
      </Button>
      <Modal ref={requiredActionRef} {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet varius sapien. Nullam diam nisl, congue
        bibendum orci eu, fermentum consequat nulla. Nunc luctus placerat mauris, eu convallis ante sollicitudin in.
        Maecenas orci eros, placerat bibendum rhoncus a, tincidunt vitae lectus.
      </Modal>
    </>
  )
};

// Single Action
const singeActionRef = createRef<ModalRef>();
export const SingleAction: Story = {
  name: 'Single action',
  args: {
    positiveAction
  },
  render: (args) => (
    <>
      <Button type="button" aria-haspopup="true" onClick={() => singeActionRef.current?.showModal()}>
        Open modal
      </Button>
      <Modal ref={singeActionRef} {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet varius sapien. Nullam diam nisl, congue
        bibendum orci eu, fermentum consequat nulla. Nunc luctus placerat mauris, eu convallis ante sollicitudin in.
        Maecenas orci eros, placerat bibendum rhoncus a, tincidunt vitae lectus.
      </Modal>
    </>
  )
};

// With logo
const withLogoRef = createRef<ModalRef>();
export const WithLogo: Story = {
  name: 'With logo',
  args: {
    positiveAction,
    negativeAction: <Button onClick={() => withLogoRef.current?.close()}>Cancel</Button>,
    logo: logo,
    logoAlt: 'Boston Scientific logo'
  },
  render: (args) => (
    <>
      <Button type="button" aria-haspopup="true" onClick={() => withLogoRef.current?.showModal()}>
        Open modal
      </Button>
      <Modal ref={withLogoRef} {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet varius sapien. Nullam diam nisl, congue
        bibendum orci eu, fermentum consequat nulla. Nunc luctus placerat mauris, eu convallis ante sollicitudin in.
        Maecenas orci eros, placerat bibendum rhoncus a, tincidunt vitae lectus.
      </Modal>
    </>
  )
};
