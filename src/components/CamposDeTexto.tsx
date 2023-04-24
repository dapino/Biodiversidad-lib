import * as React from "react";
import "./CamposDeTexto.css";
const CamposDeTexto = (props: { placeholder: string, className?: string }) => {
  return (
    <div className={`campos-de-texto ${props.className || ""}`}>
      <input
        className="campo-de-texto"
        {...props.camposDeTexto}
        placeholder={props.placeholder || "Realizar b\xfasqueda..."}
        type="text"
      />
    </div>
  );
};
export default CamposDeTexto;
