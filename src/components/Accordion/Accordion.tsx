// NOTE:
// We could consider using <details> here
// The current implementation is based on the example from aria practices
// We did not include role="region" aria-labelledby="titleId" (optional) because we will likely have 6+ panels
//   https://www.w3.org/TR/wai-aria-practices-1.1/#accordion
//   https://www.w3.org/TR/wai-aria-practices-1.1/#wai-aria-roles-states-and-properties
//   https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html

import { Children, createRef, Fragment, ReactElement, useEffect, useId, useRef, useState } from 'react';
import HeadingElement, { HeadingLevel } from '../Heading';
import AccordionHeading from './AccordionHeading';
import { AccordionPanelProps } from './AccordionPanel';
import useConcatenation from '../../hooks/useConcatenation';

export type AccordionProps = {
  /**
   * Heading to be used for the panel headers
   */
  headingLevel: HeadingLevel;
  /**
   * Accordions appear in a container with condensed spacing
   */
  isContained?: boolean;
  children: ReactElement<AccordionPanelProps>[] | ReactElement<AccordionPanelProps>;
  className?: string;
};

const Accordion = ({ headingLevel = 'h2', isContained = false, children, className }: AccordionProps): JSX.Element => {
  const accordionId = useId();

  const [expandedPanels, setExpandedPanels] = useState(new Set<number>());
  const [accordionPanels, setAccordionPanels] = useState<ReactElement<AccordionPanelProps>[]>([]);

  const panelRefs = useRef(Children.map(children, () => createRef<HTMLDivElement>()));

  useEffect(() => {
    panelRefs.current = Children.map(children, () => createRef<HTMLDivElement>());
  }, [children]);

  const togglePanel = (index: number) => {
    const newPanels = new Set<number>([...expandedPanels]);
    newPanels.has(index) ? newPanels.delete(index) : newPanels.add(index);
    setExpandedPanels(newPanels);
  };

  useEffect(() => {
    setAccordionPanels(Array.isArray(children) ? children : [children]);
  }, [children]);

  const panelMaxHeight = (index: number) => {
    if (expandedPanels.has(index)) {
      return { maxHeight: panelRefs.current[index].current?.scrollHeight };
    } else {
      return undefined;
    }
  };

  return (
    <div className={useConcatenation(['bsds-accordion', `${isContained ? 'is-contained' : ''}`, `${className || ''}`])}>
      {accordionPanels.map((accordionPanel, index) => (
        <Fragment key={'fragment' + accordionPanel.props.heading}>
          <HeadingElement
            headingLevel={headingLevel}
            className={
              'bsds-accordion-heading' +
              (accordionPanel.props.stoplightColor
                ? ` bsds-accordion-stoplight-${accordionPanel.props.stoplightColor}`
                : '')
            }
          >
            <AccordionHeading
              heading={accordionPanel.props.heading}
              index={index}
              togglePanel={togglePanel}
              isPanelExpanded={expandedPanels.has(index)}
              panelId={accordionId + '-panel' + index}
            />
          </HeadingElement>
          <div
            ref={panelRefs.current[index]}
            id={accordionId + '-panel' + index}
            className="bsds-accordion-panel"
            style={panelMaxHeight(index)}
          >
            <div className="bsds-accordion-panel-body">{accordionPanel}</div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Accordion;
