import React, { useEffect, useState } from "react";
import Adelantos from "./Adelantos.json";
const HomeAdelantos = () => {
  const [adelantos, setAdelantos] = useState([]);

  useEffect(() => {
    setAdelantos(Adelantos.Adelantos);
  }, []);

  return (
    <div className="home_adelantos containerAll">
      <div className="home_adelantos_container">
        <div className="header">
          <h1> ADELANTOS</h1>
        </div>

        <div className="content_videos">
          {adelantos.map((item) => (
            <div className="content_iframe" key={item.id}>
              <iframe
                className="iframe ga4-call_to_action-reproduccion"
                srcDoc={`
              <style>
                  img{object-fit:cover}
                  *{padding:0;margin:0;overflow:hidden}
                  html,body{height:100%;}
                  img,span{position:absolute;width:100vw;height:100%;top:0;bottom:0;margin:auto}
                  span{height:1.5em;text-align:center;font:120px/1.5 sans-serif;color:#FF4D00;text-shadow:0 0 0.5em black}
              </style>
              <a href=${item.urlVideo}> 
                  <img src="${item.mineaturaAdelanto}">
                
            
              </a>
                `}
                src={`${item.urlVideo}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                muted
                autoPlay
              ></iframe>
            </div>
          ))}
        </div>

        <div className="content_footer">
          <p>
            Tus palabras son un río Desbordándose en tu boca Tus emociones son
            espuma Que se absorbe con zapina
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAdelantos;
