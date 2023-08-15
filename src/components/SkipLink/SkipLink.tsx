// TODO: ADS-377 concatenate "Skip to" + destination or rely on end users to add that correctly

export interface SkipLinkProps {
  destinationId: string;
  destination: string;
}

const SkipLink = (props: SkipLinkProps): JSX.Element => {
  return <a href={`#${props.destinationId}`} className="bsds-skip-link">{`Skip to ${props.destination}`}</a>;
};

export default SkipLink;
