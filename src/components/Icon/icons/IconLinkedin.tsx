/* eslint-disable jsx-a11y/prefer-tag-over-role */
import { IconProps } from './iconTypes';

const IconLinkedin = (props: IconProps): JSX.Element => {
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
        d="M18,18h-3.72v-5.85c0-1.39-.03-3.18-1.94-3.18s-2.24,1.51-2.24,3.08v5.95h-3.73V5.98h3.58v1.64h.05c.5-.94,1.72-1.94,3.53-1.94,3.78,0,4.47,2.49,4.47,5.72v6.6h0ZM2.16,4.34C.97,4.34,0,3.35,0,2.16S.97,0,2.16,0s2.16,.97,2.16,2.16-.97,2.18-2.16,2.18Zm1.87,13.66H.3V5.98h3.73v12.02Z"
      />
    </svg>
  );
};

export default IconLinkedin;
