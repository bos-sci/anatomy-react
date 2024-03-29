/* eslint-disable jsx-a11y/prefer-tag-over-role */
import { IconProps } from './iconTypes';

const IconYoutube = (props: IconProps): JSX.Element => {
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
        d="M7.16,11.69V6.34l4.7,2.68-4.7,2.68Zm10.46-7.04c-.21-.78-.82-1.39-1.59-1.6-1.4-.38-7.03-.38-7.03-.38,0,0-5.63,0-7.03,.38-.77,.21-1.38,.82-1.59,1.6-.38,1.41-.38,4.36-.38,4.36,0,0,0,2.95,.38,4.36,.21,.78,.82,1.37,1.59,1.58,1.4,.38,7.03,.38,7.03,.38,0,0,5.63,0,7.03-.38,.77-.21,1.38-.8,1.59-1.58,.38-1.41,.38-4.36,.38-4.36,0,0,0-2.95-.38-4.36Z"
      />
    </svg>
  );
};

export default IconYoutube;
