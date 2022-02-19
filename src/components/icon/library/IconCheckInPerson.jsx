import * as React from "react";

function SvgIconCheckInPerson(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.31 6.777a2.98 2.98 0 002.978-2.978v-.496A2.98 2.98 0 006.31.326a2.98 2.98 0 00-2.977 2.977v.496A2.98 2.98 0 006.31 6.777zM9.943 8.256a13.854 13.854 0 00-7.267 0A2.493 2.493 0 00.85 10.65v1.586h10.917V10.65c0-1.112-.75-2.096-1.825-2.394z"
        fill="#FADB5E"
      />
    </svg>
  );
}

SvgIconCheckInPerson.defaultProps = {
  size: "1.2rem",
};

export default SvgIconCheckInPerson;
