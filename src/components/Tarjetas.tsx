import * as React from "react";
import "./Tarjetas.css";
import imagenFrailejon from "../assets/imagenFrailejon.svg";
import Button from "./Button";
const Tarjetas = (props: {
  imagenFrailejon: string,
  convocatorias: string,
  titulo: string,
  contenido: string,
  button: {
    icondeprecated: string,
    buttonLabel: string,
  },
  className?: string,
}) => {
  return (
    <div className={`tarjetas ${props.className || ""}`}>
      <div className="contenido-imagen">
        <img
          className="imagen-frailejon"
          src={props.imagenFrailejon || imagenFrailejon}
        />
        <div className="contenido-texto">
          <span className="convocatorias">
            {props.convocatorias || "Convocatorias"}
          </span>
          <div className="contenido-boton">
            <span className="titulo">{props.titulo || "Titulo"}</span>
            <span className="contenido">
              {props.contenido ||
                "Pais con la mayor biodiversidad de aves y orquideas y segundo con la mayor biodiversidad total en el mundo."}
            </span>
            <Button className="button-instance-1" {...props.button} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tarjetas;
