/* eslint-disable jsx-a11y/prefer-tag-over-role */
import { IconProps } from './iconTypes';

const IconChevronLeft = (props: IconProps): JSX.Element => {
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
        d="M3.83,8.3l8-8a1,1,0,0,1,1.4,0l.93.93a1,1,0,0,1,0,1.4L7.82,9l6.35,6.38a1,1,0,0,1,0,1.4l-.93.93a1,1,0,0,1-1.4,0l-8-8A1,1,0,0,1,3.83,8.3Z"
      />
    </svg>
  );
};

export default IconChevronLeft;
