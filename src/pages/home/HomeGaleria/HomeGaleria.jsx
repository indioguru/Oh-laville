import React, { useEffect } from "react";
import { useState } from "react";

export const HomeGaleria = () => {
  const [versoUno, setVersoUno] = useState(true);
  const [versoDos, setVersoDos] = useState(true);

  useEffect(() => {
    const parallax = (e) => {
      document.querySelectorAll(".imagen").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", parallax);
  }, []);

  return (
    <div className="home_galeria containerAll">
      <audio id="versTwo" src="/assets/audios/landing-tu-v2.mp3"></audio>
      <div className="lyrics">
        <p>
          Tu felicidad es romántica <br /> Tu forma de amar enigmática.{" "}
        </p>
        <audio id="versOne" src="/assets/audios/landing-tu-v1.mp3"></audio>
        {!versoUno ? (
          <img
            onClick={() => {
              setVersoUno(!versoUno);
              document.getElementById("versOne").pause();
            }}
            className="ga4-call_to_action-verso_audio"
            src="/assets/consonido.png"
            alt="consonido"
          />
        ) : (
          <img
            onClick={() => {
              setVersoUno(!versoUno);
              document.getElementById("versOne").play();
            }}
            className="ga4-call_to_action-verso_audio"
            src="/assets/sinsonido.png"
            alt="sinsonido"
          />
        )}
      </div>

      <div className="home_galeria_images">
        <div className="imagen" data-speed="2.2">
          <img className="marco" src="/assets/marco1.png" alt="marco1" />
          <img className="imagen_back" src="/assets/fotos/8.jpg" alt="marco1" />
        </div>

        <div className="imagen" data-speed="1.8">
          <img className="marco" src="/assets/marco1.png" alt="marco1" />
          <img className="imagen_back" src="/assets/fotos/7.jpg" alt="marco1" />
        </div>
        <div className="imagen" data-speed="1.2">
          <img className="marco" src="/assets/marco1.png" alt="marco1" />
          <img className="imagen_back" src="/assets/fotos/2.png" alt="marco1" />
        </div>
      </div>

      <div className="home_galeria_images home_galeria_images_2">
        {window.innerWidth < 768 && (
          <div className="lyrics lyrics_2">
            <p>
              Indescifrable fuente de luz <br />
              Que se prende con la luna <br />
              Que me da vida mientras bailas <br />
              Con el aire que respiras
              <br />
            </p>

            {!versoDos ? (
              <img
                onClick={() => {
                  setVersoDos(!versoDos);
                  document.getElementById("versTwo").pause();
                }}
                className="ga4-call_to_action-verso_audio"
                src="/assets/consonido.png"
                alt="consonido"
              />
            ) : (
              <img
                onClick={() => {
                  setVersoDos(!versoDos);
                  document.getElementById("versTwo").play();
                }}
                className="ga4-call_to_action-verso_audio"
                src="/assets/sinsonido.png"
                alt="sinsonido"
              />
            )}
          </div>
        )}

        <div className="imagen" data-speed="2.1">
          <img className="marco" src="/assets/marco1.png" alt="marco1" />
          <img className="imagen_back" src="/assets/fotos/9.jpg" alt="marco1" />
        </div>

        <div className="imagen" data-speed="2.5">
          <img className="marco" src="/assets/marco1.png" alt="marco1" />
          <img
            className="imagen_back"
            src="/assets/fotos/10.jpg"
            alt="marco1"
          />
        </div>
      </div>

      {window.innerWidth > 768 && (
        <div className="lyrics lyrics_2">
          <p>
            Indescifrable fuente de luz <br />
            Que se prende con la luna <br />
            Que me da vida mientras bailas <br />
            Con el aire que respiras
          </p>
          {!versoDos ? (
            <img
              onClick={() => {
                setVersoDos(!versoDos);
                document.getElementById("versTwo").pause();
              }}
              className="ga4-call_to_action-verso_audio"
              src="/assets/consonido.png"
              alt="consonido"
            />
          ) : (
            <img
              onClick={() => {
                setVersoDos(!versoDos);
                document.getElementById("versTwo").play();
              }}
              className="ga4-call_to_action-verso_audio"
              src="/assets/sinsonido.png"
              alt="sinsonido"
            />
          )}
        </div>
      )}
    </div>
  );
};
