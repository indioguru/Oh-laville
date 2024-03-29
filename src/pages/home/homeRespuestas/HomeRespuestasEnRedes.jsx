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
          {allResponses.map((item, i) => (
            <div className="responses" id={`responses_${i}`} key={item.id}>
              <p>{item.respuesta}</p>
              <p className="name">
                <span>@</span>
                {item.nombre}
              </p>
            </div>
          ))}
        </div>

        <div className="content_button">
          <a
            className="ga4-call_to_action-ir_a_post"
            target="_blank"
            href="https://instagram.com/p/Clj01sANAv8/"
          >
            <button>IR AL POST</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeRespuestasEnRedes;
