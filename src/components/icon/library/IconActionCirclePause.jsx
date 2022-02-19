import * as React from "react";

function SvgIconActionCirclePause(props) {
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
        d="M12.59 22c5.524 0 10-4.477 10-10s-4.476-10-10-10c-5.522 0-10 4.477-10 10s4.478 10 10 10zM10.59 15V9M14.59 15V9"
        stroke={props.currentColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgIconActionCirclePause;
