import React from "react";

const HomeEarlyBirds = () => {
  return (
    <div className="home_earlyBird">
      <div className="home_earlyBird_container">
        <div className="header">
          <h1>EARLY BIRDS TOUR 2022</h1>
          <p>
            Inscríbete para tener la primera opción de compra para los shows de
            OLV y de Paola en 2023. También recibirás sorpresas bellas
          </p>
        </div>

        <div className="content_inputs">
          <div className="input">
            <label htmlFor="name">Nombre Completo</label>
            <input type="text" id="name" />
          </div>
          <div className="input">
            <label htmlFor="name">Email</label>
            <input type="email" id="name" />
          </div>
          <div className="input">
            <label htmlFor="name">Celular</label>
            <input type="text" id="name" />
          </div>
          <div className="input">
            <label htmlFor="name">Ciudad</label>
            <input type="text" id="name" />
          </div>
        </div>

        <div className="contet_button">
          <button>ENVIAR</button>
        </div>
      </div>
    </div>
  );
};

export default HomeEarlyBirds;
