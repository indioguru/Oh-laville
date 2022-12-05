import React, { useEffect, useState } from "react";
import respuestas from "./Respuestas.json";
const HomeRespuestasEnRedes = () => {
  const [allResponses, setAllResponses] = useState([]);

  useEffect(() => {
    setAllResponses(respuestas.Respuestas);
  }, []);

  return (
    <div className="home_respuestaEnRedes containerAll">
      <div className="home_respuestaEnRedes_container">
        <div className="header">
          <h1>¿QUÉ ES UNA FELICIDAD ROMÁNTICA?</h1>
          <h3>RESPUESTAS EN REDES</h3>
        </div>

        <div className="content_responses">
          {allResponses.map((item) => (
            <div className="responses" key={item.id}>
              <p>{item.respuesta}</p>
              <p className="name">{item.nombre}</p>
            </div>
          ))}
        </div>

        <div className="content_button">
          <button className="ga4-call_to_action-ir_a_post">IR AL POST</button>
        </div>
      </div>
    </div>
  );
};

export default HomeRespuestasEnRedes;
