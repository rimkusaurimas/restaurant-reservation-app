import * as React from "react";

function SvgIconHeart(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.43 3.61a5.5 5.5 0 00-7.78 0l-1.06 1.06-1.06-1.06a5.501 5.501 0 10-7.78 7.78l1.06 1.06 7.78 7.78 7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78v0z"
        stroke={props.currentColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgIconHeart;
