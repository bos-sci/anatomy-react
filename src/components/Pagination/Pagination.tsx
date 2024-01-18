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
  paginationItem?: (props: { page: number; isCurrent: boolean }) => ReactElement<ButtonProps | LinkProps>;
  onChange?: (page: number) => void;
}

const Pagination = (props: PaginationProps): JSX.Element => {
  const bucketSize = 5;

  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [buckets, setBuckets] = useState<number[][]>(
    Array.from(Array(Math.ceil(props.numberOfPages / bucketSize))).map(() => [])
  );
  const [currentPage, setCurrentPage] = useState<number>(props.currentPage || 1);

  useEffect(() => {
    const newBuckets: number[][] = Array.from(Array(Math.ceil(props.numberOfPages / bucketSize))).map(() => []);
    for (let i = 1; i <= props.numberOfPages; i++) {
      newBuckets[Math.ceil(i / bucketSize) - 1].push(i);
    }
    setBuckets(newBuckets);
  }, [currentPage, props.numberOfPages]);

  useEffect(() => {
    const bucketIndex = Math.ceil(currentPage / bucketSize) - 1;
    const numbers = buckets[bucketIndex];
    if (numbers.length <= 2 && bucketIndex > 0) {
      setPageNumbers(buckets[bucketIndex - 1].slice(numbers.length).concat(numbers));
    } else {
      setPageNumbers(numbers);
    }
  }, [buckets, currentPage]);

  useEffect(() => {
    if (props.currentPage) {
      setCurrentPage(props.currentPage);
    }
  }, [props.currentPage]);

  useEffect(() => {
    if (props.onChange) {
      props.onChange(currentPage);
    }
  }, [currentPage, props]);

  return (
    <ul className="bsds-pagination">
      {currentPage !== 1 && (
        <li className="bsds-pagination-stepper">
          <Button
            variant="subtle"
            className="bsds-pagination-stepper-action"
            aria-label={props.texts?.previousAriaLabel ?? 'Previous page'}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <IconChevronLeft className="bsds-icon-2x" />
          </Button>
        </li>
      )}
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={'bsds-pagination-page' + (number === currentPage ? ' bsds-pagination-page-current' : '')}
        >
          {props.paginationItem ? (
            <props.paginationItem page={number} isCurrent={number === currentPage} />
          ) : (
            <Button
              variant="subtle"
              aria-current={number !== currentPage ? undefined : 'page'}
              onClick={() => setCurrentPage(number)}
            >
              <span className="bsds-visually-hidden">{props.texts?.page ?? 'Page '}</span>
              {new Intl.NumberFormat(props.locale ?? 'en-US').format(number)}
            </Button>
          )}
        </li>
      ))}
      {currentPage !== props.numberOfPages && (
        <li className="bsds-pagination-stepper">
          <Button
            variant="subtle"
            className="bsds-pagination-stepper-action"
            aria-label={props.texts?.nextAriaLabel ?? 'Next page'}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <IconChevronRight className="bsds-icon-2x" />
          </Button>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
