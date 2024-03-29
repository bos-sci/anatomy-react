/* eslint-disable jsx-a11y/prefer-tag-over-role */
import { IconProps } from './iconTypes';

const IconFacebook = (props: IconProps): JSX.Element => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={`${props.className}`}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
    >
      <path
        fill="currentColor"
        d="M13.19,10.12l.5-3.26h-3.13v-2.11c0-.89,.44-1.76,1.84-1.76h1.42V.22s-1.29-.22-2.52-.22c-2.57,0-4.26,1.56-4.26,4.38v2.48h-2.86v3.26h2.86v7.88h3.52v-7.88h2.63Z"
      />
    </svg>
  );
};

export default IconFacebook;
