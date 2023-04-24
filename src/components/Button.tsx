import * as React from "react";
import "./Button.css";
const Button = (props: {
  icondeprecated: string,
  buttonLabel: string,
  className?: string,
}) => {
  return (
    <button className={`button ${props.className || ""}`}>
      <span className="button-label">{props.buttonLabel || "Alumni"}</span>
    </button>
  );
};
export default Button;
