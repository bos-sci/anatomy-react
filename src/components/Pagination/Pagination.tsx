import { ReactElement, useEffect, useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '../Icon';
import Button, { ButtonProps } from '../Button';
import { LinkProps } from '../Link';

export interface PaginationProps {
  numberOfPages: number;
  currentPage?: number;
  locale?: string;
  texts?: {
    nextAriaLabel?: string;
    previousAriaLabel?: string;
    page?: string;
  };
  /**
   * A component with page and isCurrent props. This component gets used to render
   * each page number as a button or link. Should use Anatomy Link or Button component.
   */
  paginationItem?: (page: number, isCurrent: boolean) => ReactElement<ButtonProps | LinkProps>;
  onChange?: (page: number) => void;
}

const Pagination = ({
  numberOfPages,
  currentPage,
  locale = 'en-US',
  texts = {
    nextAriaLabel: 'Next page',
    previousAriaLabel: 'Previous page',
    page: 'Page'
  },
  paginationItem,
  onChange
}: PaginationProps): JSX.Element => {
  const bucketSize = 5;

  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [buckets, setBuckets] = useState<number[][]>(
    Array.from(Array(Math.ceil(numberOfPages / bucketSize))).map(() => [])
  );
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(currentPage || 1);

  useEffect(() => {
    const newBuckets: number[][] = Array.from(Array(Math.ceil(numberOfPages / bucketSize))).map(() => []);
    for (let i = 1; i <= numberOfPages; i++) {
      newBuckets[Math.ceil(i / bucketSize) - 1].push(i);
    }
    setBuckets(newBuckets);
  }, [currentPageNumber, numberOfPages]);

  useEffect(() => {
    const bucketIndex = Math.ceil(currentPageNumber / bucketSize) - 1;
    const numbers = buckets[bucketIndex];
    if (numbers.length <= 2 && bucketIndex > 0) {
      setPageNumbers(buckets[bucketIndex - 1].slice(numbers.length).concat(numbers));
    } else {
      setPageNumbers(numbers);
    }
  }, [buckets, currentPageNumber]);

  useEffect(() => {
    if (currentPage) {
      setCurrentPageNumber(currentPage);
    }
  }, [currentPage]);

  useEffect(() => {
    if (onChange) {
      onChange(currentPageNumber);
    }
  }, [currentPageNumber, onChange]);

  return (
    <ul className="bsds-pagination">
      {currentPageNumber !== 1 && (
        <li className="bsds-pagination-stepper">
          <Button
            variant="subtle"
            className="bsds-pagination-stepper-action"
            aria-label={texts?.previousAriaLabel ?? 'Previous page'}
            data-testid="prevBtn"
            onClick={() => setCurrentPageNumber(currentPageNumber - 1)}
          >
            <IconChevronLeft className="bsds-icon-2x" />
          </Button>
        </li>
      )}
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={'bsds-pagination-page' + (number === currentPageNumber ? ' bsds-pagination-page-current' : '')}
        >
          {paginationItem ? (
            paginationItem(number, number === currentPageNumber)
          ) : (
            <Button
              variant="subtle"
              aria-current={number !== currentPageNumber ? undefined : 'page'}
              onClick={() => setCurrentPageNumber(number)}
            >
              <span className="bsds-visually-hidden">{texts?.page ?? 'Page '}</span>
              {new Intl.NumberFormat(locale ?? 'en-US').format(number)}
            </Button>
          )}
        </li>
      ))}
      {currentPageNumber !== numberOfPages && (
        <li className="bsds-pagination-stepper">
          <Button
            variant="subtle"
            className="bsds-pagination-stepper-action"
            aria-label={texts?.nextAriaLabel ?? 'Next page'}
            data-testid="nextBtn"
            onClick={() => setCurrentPageNumber(currentPageNumber + 1)}
          >
            <IconChevronRight className="bsds-icon-2x" />
          </Button>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
