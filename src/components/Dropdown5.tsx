import * as React from "react";
import "./Dropdown5.css";
import iconoFlecha from "../assets/iconoFlecha.svg";
const Dropdown5 = (props: {
  iconoFlecha: string,
  seleccionarOpcin: string,
  className?: string,
}) => {
  return (
    <div className={`dropdown-5 ${props.className || ""}`}>
      <span className="seleccionar-opcin">
        {props.seleccionarOpcin || "Consultar"}
      </span>
      <img className="icono-flecha" src={props.iconoFlecha || iconoFlecha} />
    </div>
  );
};
export default Dropdown5;
