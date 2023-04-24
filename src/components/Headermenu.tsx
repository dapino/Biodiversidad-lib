import * as React from "react";
import "./Headermenu.css";
import logoSib from "../assets/logoSib.svg";
import CamposDeTexto from "./CamposDeTexto";
import Dropdown5 from "./Dropdown5";
const Headermenu = (props: {
  dropdown5: {
    iconoFlecha: string,
    seleccionarOpcin: string,
  },
  camposDeTexto: {
    placeholder: string,
  },
  dropdown: {
    iconoFlecha: string,
    seleccionarOpcin: string,
  },
  logoSib: string,
  dropdown2: {
    iconoFlecha: string,
    seleccionarOpcin: string,
  },
  dropdown1: {
    iconoFlecha: string,
    seleccionarOpcin: string,
  },
  dropdown4: {
    iconoFlecha: string,
    seleccionarOpcin: string,
  },
  dropdown3: {
    iconoFlecha: string,
    seleccionarOpcin: string,
  },
  className?: string,
}) => {
  return (
    <div className={`headermenu ${props.className || ""}`}>
      <img className="logo-sib" src={props.logoSib || logoSib} />
      <div className="menubuscador">
        <div className="menu">
          <Dropdown5 {...props.dropdown} />
          <Dropdown5 {...props.dropdown3} />
          <Dropdown5 {...props.dropdown2} />
          <Dropdown5 {...props.dropdown4} />
          <Dropdown5 {...props.dropdown1} />
          <Dropdown5 {...props.dropdown5} />
        </div>
        <CamposDeTexto {...props.camposDeTexto} />
      </div>
    </div>
  );
};
export default Headermenu;
