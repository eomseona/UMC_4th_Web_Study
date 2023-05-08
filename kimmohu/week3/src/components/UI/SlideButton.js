import React from "react";

const SlideButton = (props) => {
  return (
    <button
      onClick={props.onButtonClicked}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        borderColor: "#dddddd",
      }}
    >
      {props.direction ? (
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{
            display: "block",
            fill: "none",
            height: "12px",
            width: "12px",
            stroke: "currentcolor",
            strokeWidth: "5.33333px",
            overflow: "visible",
          }}
        >
          <g fill="none">
            <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
          </g>
        </svg>
      ) : (
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{
            display: "block",
            fill: "none",
            height: "12px",
            width: "12px",
            stroke: "currentcolor",
            strokeWidth: "5.33333px",
            overflow: "visible",
          }}
        >
          <g fill="none">
            <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path>
          </g>
        </svg>
      )}
    </button>
  );
};

export default SlideButton;
