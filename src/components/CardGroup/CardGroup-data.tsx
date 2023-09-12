import ContentCard from '../ContentCard/ContentCard';
import { descriptionPlaceholder } from '../../helpers/stories.helpers';

export const twoUpCardLayout = [
  <ContentCard
    key={1}
    texts={{
      cardTitle: 'Card title',
      cardDescription: descriptionPlaceholder
    }}
    headingLevel="h2"
  />,
  <ContentCard
    key={2}
    texts={{
      cardTitle: 'Card title',
      cardDescription: descriptionPlaceholder
    }}
    headingLevel="h2"
  />
];

export const threeUpCardLayout = [
  <ContentCard
    key={1}
    texts={{
      cardTitle: 'Card title',
      cardDescription: descriptionPlaceholder
    }}
    headingLevel="h2"
  />,
  <ContentCard
    key={2}
    texts={{
      cardTitle: 'Card title',
      cardDescription: descriptionPlaceholder
    }}
    headingLevel="h2"
  />,
  <ContentCard
    key={3}
    texts={{
      cardTitle: 'Card title',
      cardDescription: descriptionPlaceholder
    }}
    headingLevel="h2"
  />
];

export const fourUpCardLayout = [
  <ContentCard
    key={1}
    texts={{
      cardTitle: 'Card title',
      cardDescription: descriptionPlaceholder
    }}
    headingLevel="h2"
  />,
  <ContentCard
    key={2}
    texts={{
      cardTitle: 'Card title',
      cardDescription: descriptionPlaceholder
    }}
    headingLevel="h2"
  />,
  <ContentCard
    key={3}
    texts={{
      cardTitle: 'Card title',
      cardDescription: descriptionPlaceholder
    }}
    headingLevel="h2"
  />,
  <ContentCard
    key={4}
    texts={{
      cardTitle: 'Card title',
      cardDescription: descriptionPlaceholder
    }}
    headingLevel="h2"
  />
];
