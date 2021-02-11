import "./App.css";
import Portada from "./componentes/portada";
import Proyectos from "./componentes/proyectos";

import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Portada />
      <Proyectos />
    </Fragment>
  );
}

export default App;
