import * as React from "react";

function SvgIconNotificationBell(props) {
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
        d="M18.59 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9zM14.32 21a1.999 1.999 0 01-3.46 0"
        stroke={props.currentColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgIconNotificationBell;
