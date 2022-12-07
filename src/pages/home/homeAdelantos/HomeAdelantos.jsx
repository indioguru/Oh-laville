import React, { useEffect, useState } from "react";
import Adelantos from "./Adelantos.json";
const HomeAdelantos = () => {
  const [adelantos, setAdelantos] = useState([]);
  const [versoTres, setVersoTres] = useState(true);

  useEffect(() => {
    setAdelantos(Adelantos.Adelantos);
  }, []);

  return (
    <div className="home_adelantos containerAll">
      <div className="home_adelantos_container">
        <audio id="versThree" src="/assets/audios/landing-tu-v3.mp3"></audio>
        <div className="header">
          <h1> ADELANTOS</h1>
        </div>

        <div className="content_videos">
          {adelantos.map((item) => (
            <div
              className="content_iframe ga4-call_to_action-video"
              key={item.id}
            >
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
            El frío blanco de tu pelo <br /> siempre fiel a su retrato <br /> el
            velo negro de tus ojos <br /> lo que amanza tus demonios <br /> tus
            palabras son un río <br /> desbordándose en tu boca <br /> tus
            emociones son espuma <br /> que se absorbe con zapina.
          </p>

          {!versoTres ? (
            <img
              onClick={() => {
                setVersoTres(!versoTres);
                document.getElementById("versThree").pause();
              }}
              className="ga4-call_to_action-verso_audio"
              src="/assets/consonido.png"
              alt="consonido"
            />
          ) : (
            <img
              onClick={() => {
                setVersoTres(!versoTres);
                document.getElementById("versThree").play();
              }}
              src="/assets/sinsonido.png"
              className="ga4-call_to_action-verso_audio"
              alt="sinsonido"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeAdelantos;
