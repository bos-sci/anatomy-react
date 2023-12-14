/* eslint-disable jsx-a11y/prefer-tag-over-role */
import { IconProps } from './iconTypes';

const IconTwitter = (props: IconProps): JSX.Element => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={`${props.className}`}
      role="img"
      id="a"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
    >
      <path
        id="b"
        d="M16.15,5.33c.01,.16,.01,.32,.01,.48,0,4.88-3.71,10.5-10.5,10.5-2.09,0-4.03-.61-5.67-1.66,.3,.03,.58,.05,.89,.05,1.72,0,3.31-.58,4.58-1.58-1.62-.03-2.98-1.1-3.45-2.56,.23,.03,.46,.06,.7,.06,.33,0,.66-.05,.97-.13-1.69-.34-2.96-1.83-2.96-3.62v-.05c.49,.27,1.06,.45,1.67,.47-.99-.66-1.64-1.79-1.64-3.07,0-.69,.18-1.31,.5-1.86,1.82,2.24,4.55,3.7,7.61,3.86-.06-.27-.09-.56-.09-.85,0-2.03,1.64-3.69,3.69-3.69,1.06,0,2.02,.45,2.7,1.16,.83-.16,1.63-.47,2.34-.89-.27,.86-.86,1.58-1.62,2.03,.74-.08,1.46-.29,2.12-.57-.5,.73-1.13,1.38-1.85,1.91Z"
      />
    </svg>
  );
};

export default IconTwitter;
