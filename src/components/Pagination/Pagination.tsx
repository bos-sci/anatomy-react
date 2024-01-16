import { useEffect, useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '../Icon';
import Button from '../Button';

export interface PaginationProps {
  numberOfPages: number;
  locale: string;
  currentPage: number;
}

const Pagination = (props: PaginationProps): JSX.Element => {
  const bucketSize = 5;

  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [buckets, setBuckets] = useState<number[][]>(
    Array.from(Array(Math.ceil(props.numberOfPages / bucketSize))).map(() => [])
  );
  const [currentPage, setCurrentPage] = useState<number>(props.currentPage);

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

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
    setCurrentPage(props.currentPage);
  }, [props.currentPage]);

  return (
    <ul className="bsds-pagination">
      {currentPage !== 1 && (
        <li className="bsds-pagination-stepper">
          <Button variant="subtle" className="bsds-pagination-stepper-action" onClick={prevPage}>
            <IconChevronLeft className="bsds-icon-2x" />
          </Button>
        </li>
      )}
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={'bsds-pagination-page' + (number === currentPage ? ' bsds-pagination-page-current' : '')}
        >
          {new Intl.NumberFormat(props.locale).format(number)}
        </li>
      ))}
      {currentPage !== props.numberOfPages && (
        <li className="bsds-pagination-stepper">
          <Button variant="subtle" className="bsds-pagination-stepper-action" onClick={nextPage}>
            <IconChevronRight className="bsds-icon-2x" />
          </Button>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
