import * as React from "react";
import "./App.css";
import iconoFlecha5 from "./assets/iconoFlecha5.svg";
import iconoFlecha from "./assets/iconoFlecha.svg";
import logoSib from "./assets/logoSib.svg";
import Headermenu from "./components/Headermenu";
const App = () => {
  const propsData = {
    Headermenu: {
      dropdown4: {
        iconoFlecha: iconoFlecha,
        seleccionarOpcin: "Comunidad",
      },
      dropdown3: {
        iconoFlecha: iconoFlecha,
        seleccionarOpcin: "Compartir",
      },
      dropdown2: {
        seleccionarOpcin: "Recursos",
        iconoFlecha: iconoFlecha,
      },
      dropdown5: {
        iconoFlecha: iconoFlecha5,
        seleccionarOpcin: "Acerca de",
      },
      camposDeTexto: {
        placeholder: "Realizar b\xfasqueda...",
      },
      dropdown: {
        seleccionarOpcin: "Consultar",
        iconoFlecha: iconoFlecha,
      },
      logoSib: logoSib,
      dropdown1: {
        seleccionarOpcin: "Consultar",
      },
    },
  };
  return (
    <Headermenu className="headermenu-instance-1" {...propsData.Headermenu} />
  );
};
export default App;
