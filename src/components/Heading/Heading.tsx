import React from 'react';
import { HeadingLevel } from './Heading.types';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: HeadingLevel;
}

const HeadingElement = ({ headingLevel = 'h2', children, ...attrs }: HeadingProps) => {
  return React.createElement(headingLevel, attrs, children);
};

export default HeadingElement;
