import * as React from "react";

function SvgIconActionCirclePlay(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.59 22c5.524 0 10-4.477 10-10s-4.476-10-10-10c-5.522 0-10 4.477-10 10s4.478 10 10 10z"
        stroke={props.currentColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.59 8l6 4-6 4V8z"
        stroke={props.currentColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgIconActionCirclePlay;
