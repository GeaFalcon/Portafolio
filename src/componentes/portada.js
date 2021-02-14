import React from "react";

const Portada = () => {
  return (
    <div id="container">
      <div className="portada-principal">
        <h3 className="portada-subtitulo">
          Junior
          <hr></hr>
        </h3>
        <div className="subtitulo-rombo"></div>
        <h1 className="portada-titulo">Front-end development</h1>
        <div className="portada-rombos">
          <div className="rombo"></div>
          <div className="rombo"></div>
          <div className="rombo"></div>
          <div className="rombo"></div>
        </div>
        <div className="container-proyectos">
          <h3 className="portada-proyectos">Proyectos</h3>
          <a
            class="ca3-scroll-down-link ca3-scroll-down-arrow"
            data-ca3_iconfont="ETmodules"
            data-ca3_icon=""
          ></a>
        </div>
      </div>
      <div className="portada-contacto">
        <h2 className="contactar"> contactar</h2>
      </div>
    </div>
  );
};

export default Portada;
