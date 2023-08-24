// TODO: ADS-377 concatenate "Skip to" + destination or rely on end users to add that correctly

export type SkipLinkProps = {
  /**
   * Value of destination's id attribute
   */
  destinationId: string;
  /**
   * Human-readable name for destination appended to skip link text
   */
  destination: string;
};
const SkipLink = ({ destinationId, destination }: SkipLinkProps): JSX.Element => {
  return <a href={`#${destinationId}`} className="bsds-skip-link">{`Skip to ${destination}`}</a>;
};

export default SkipLink;
