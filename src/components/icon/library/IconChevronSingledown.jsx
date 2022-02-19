import * as React from "react";

function SvgIconChevronSingledown(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 15 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.59 1l6 6 6-6"
        stroke={props.currentColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgIconChevronSingledown;
