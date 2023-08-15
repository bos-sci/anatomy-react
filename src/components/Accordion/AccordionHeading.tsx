import IconChevronDown from '../Icon/icons/IconChevronDown';

interface AccordionHeadingProps {
  heading: string;
  index: number;
  togglePanel: (index: number) => void;
  isPanelExpanded?: boolean;
  panelId: string;
}

const AccordionHeading = ({
  heading,
  togglePanel,
  index,
  isPanelExpanded,
  panelId
}: AccordionHeadingProps): JSX.Element => {
  return (
    <button
      id={`${panelId}Heading`}
      className="bsds-accordion-trigger"
      aria-controls={panelId}
      aria-expanded={isPanelExpanded}
      onClick={() => togglePanel(index)}
    >
      <span className="bsds-accordion-trigger-text">{heading}</span>
      <IconChevronDown className="bsds-icon-2x" />
    </button>
  );
};

export default AccordionHeading;
