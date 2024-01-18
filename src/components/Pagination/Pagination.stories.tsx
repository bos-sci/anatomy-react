import type { Meta, StoryObj } from '@storybook/react';
import Pagination from './Pagination';
import Link from '../Link';
import { useState } from 'react';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered'
  },
  args: {
    numberOfPages: 14
  },
  tags: ['autodocs']
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Playground: Story = {
  args: {
    numberOfPages: 14,
    currentPage: 3,
    locale: 'en-US'
  }
};

const PaginationLink = (props: { page: number; isCurrent: boolean }) => (
  <Link href="docs-demo-link" aria-current={props.isCurrent}>
    {props.page}
  </Link>
);

export const AsLinks = ({ ...args }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      PaginationItem={PaginationLink}
      numberOfPages={args.numberOfPages}
      onChange={(page) => setCurrentPage(page)}
    />
  );
};
