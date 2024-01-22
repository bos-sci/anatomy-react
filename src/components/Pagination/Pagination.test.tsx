import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';
import userEvent from '@testing-library/user-event';

describe('Pagination', () => {
  it('Renders 5 pages when given total pages >= 5', () => {
    render(<Pagination numberOfPages={10} />);
    expect(screen.getAllByText(/[0-9]/)).toHaveLength(5);
  });

  it('Renders next page button when given total pages > 1 and not on last page', () => {
    render(<Pagination numberOfPages={10} />);
    expect(screen.getByTestId('nextBtn')).toBeInTheDocument();
  });

  it('Renders previous page button when given total pages > 1 and not on first page', () => {
    render(<Pagination numberOfPages={10} currentPage={2} />);
    expect(screen.getByTestId('prevBtn')).toBeInTheDocument();
  });

  it('Renders previous and next page button when given total pages > 2 and not on first or last page page', () => {
    render(<Pagination numberOfPages={10} currentPage={2} />);
    expect(screen.getByTestId('prevBtn')).toBeInTheDocument();
    expect(screen.getByTestId('nextBtn')).toBeInTheDocument();
  });

  it('Renders pages when total pages < 5', () => {
    render(<Pagination numberOfPages={3} />);
    expect(screen.getAllByText(/[0-9]/)).toHaveLength(3);
  });

  it('Sets current page to next page on click of next button', async () => {
    const user = userEvent.setup();
    render(<Pagination numberOfPages={10} />);
    const button1 = screen.getByText('1');
    const button2 = screen.getByText('2');
    expect(button1).toHaveAttribute('aria-current', 'page');
    expect(button2).not.toHaveAttribute('aria-current', 'page');
    await user.click(screen.getByTestId('nextBtn'));
    expect(button1).not.toHaveAttribute('aria-current', 'page');
    expect(button2).toHaveAttribute('aria-current', 'page');
  });

  it('Sets current page to previous page on click of previous button', async () => {
    const user = userEvent.setup();
    render(<Pagination numberOfPages={10} currentPage={2} />);
    const button1 = screen.getByText('1');
    const button2 = screen.getByText('2');
    expect(button1).not.toHaveAttribute('aria-current', 'page');
    expect(button2).toHaveAttribute('aria-current', 'page');
    await user.click(screen.getByTestId('prevBtn'));
    expect(button1).toHaveAttribute('aria-current', 'page');
    expect(button2).not.toHaveAttribute('aria-current', 'page');
  });

  it('Renders next set of pages when going from page 5 to 6', async () => {
    const user = userEvent.setup();
    render(<Pagination numberOfPages={10} currentPage={5} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    await user.click(screen.getByTestId('nextBtn'));
    expect(screen.queryByText('1')).not.toBeInTheDocument();
    expect(screen.queryByText('5')).not.toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('Renders previous set of pages when going from page 6 to 5', async () => {
    const user = userEvent.setup();
    render(<Pagination numberOfPages={10} currentPage={6} />);
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    await user.click(screen.getByTestId('prevBtn'));
    expect(screen.queryByText('6')).not.toBeInTheDocument();
    expect(screen.queryByText('10')).not.toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('Sets current page to the page that was clicked', async () => {
    const user = userEvent.setup();
    render(<Pagination numberOfPages={10} />);
    const button3 = screen.getByText('3');
    expect(button3).not.toHaveAttribute('aria-current', 'page');
    await user.click(button3);
    expect(button3).toHaveAttribute('aria-current', 'page');
  });

  it('Keeps current page synced with provided current page', () => {
    const { rerender } = render(<Pagination numberOfPages={10} currentPage={3} />);
    expect(screen.getByText('3')).toHaveAttribute('aria-current', 'page');
    rerender(<Pagination numberOfPages={10} currentPage={5} />);
    expect(screen.getByText('5')).toHaveAttribute('aria-current', 'page');
  });

  it('Triggers onChange callback providing page and isCurrent', async () => {
    const user = userEvent.setup();
    const mockFn = jest.fn();
    render(<Pagination numberOfPages={10} onChange={mockFn} />);
    await user.click(screen.getByTestId('nextBtn'));
    expect(mockFn).toHaveBeenCalled();
  });
});
