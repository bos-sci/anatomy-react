import { HTMLAttributes, ReactElement } from 'react';
import { ContentCardProps } from '../ContentCard';

export interface CardGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<ContentCardProps> | ReactElement<ContentCardProps>[];
  cardLayout?: 'twoUp' | 'threeUp' | 'fourUp';
  className?: string;
}

const CardGroup = ({ children, cardLayout = 'twoUp', className }: CardGroupProps): JSX.Element => {
  let gridLayout = '';
  switch (cardLayout) {
    case 'twoUp':
      gridLayout = '-two-up';
      break;
    case 'threeUp':
      gridLayout = '-three-up';
      break;
    case 'fourUp':
      gridLayout = '-four-up';
      break;
  }

  return (
    <div className={`${'bsds-card-group'}${gridLayout}${className ? ' ' + className : ''}`} data-testid="bsdsCardGroup">
      {children}
    </div>
  );
};

export default CardGroup;
