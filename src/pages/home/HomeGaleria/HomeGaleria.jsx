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
      <div className="lyrics">
        <p>Tu felicidad es romántica tu forma de amar enígmatica</p>

        {versoUno ? (
          <img
            onClick={() => setVersoUno(!versoUno)}
            className="ga4-call_to_action-verso_audio"
            src="/assets/consonido.png"
            alt="consonido"
          />
        ) : (
          <img
            onClick={() => setVersoUno(!versoUno)}
            className="ga4-call_to_action-verso_audio"
            src="/assets/sinsonido.png"
            alt="sinsonido"
          />
        )}
      </div>

      <div className="home_galeria_images">
        <div className="imagen" data-speed="2">
          <img className="marco" src="/assets/marco1.png" alt="marco1" />
          <img className="imagen_back" src="/assets/fotos/2.png" alt="marco1" />
        </div>

        <div className="imagen" data-speed="1.5">
          <img className="marco" src="/assets/marco1.png" alt="marco1" />
          <img className="imagen_back" src="/assets/fotos/3.png" alt="marco1" />
        </div>
        <div className="imagen" data-speed="2">
          <img className="marco" src="/assets/marco1.png" alt="marco1" />
          <img className="imagen_back" src="/assets/fotos/1.png" alt="marco1" />
        </div>
      </div>

      <div className="home_galeria_images home_galeria_images_2">
        {window.innerWidth < 768 && (
          <div className="lyrics lyrics_2">
            <p>
              El brillo blanco de tu pelo Siempre fiel a tu retrato El velo
              blanco de tus ojos Lo que amansa tus demonios
            </p>
            {versoDos ? (
              <img
                onClick={() => setVersoDos(!versoDos)}
                className="ga4-call_to_action-verso_audio"
                src="/assets/consonido.png"
                alt="consonido"
              />
            ) : (
              <img
                onClick={() => setVersoDos(!versoDos)}
                className="ga4-call_to_action-verso_audio"
                src="/assets/sinsonido.png"
                alt="sinsonido"
              />
            )}
          </div>
        )}

        <div className="imagen" data-speed="2">
          <img className="marco" src="/assets/marco1.png" alt="marco1" />
          <img className="imagen_back" src="/assets/fotos/4.png" alt="marco1" />
        </div>

        <div className="imagen" data-speed="1.5">
          <img className="marco" src="/assets/marco1.png" alt="marco1" />
          <img className="imagen_back" src="/assets/fotos/6.png" alt="marco1" />
        </div>
      </div>

      {window.innerWidth > 768 && (
        <div className="lyrics lyrics_2">
          <p>
            El brillo blanco de tu pelo Siempre fiel a tu retrato El velo blanco
            de tus ojos Lo que amansa tus demonios
          </p>
          {versoDos ? (
            <img
              onClick={() => setVersoDos(!versoDos)}
              className="ga4-call_to_action-verso_audio"
              src="/assets/consonido.png"
              alt="consonido"
            />
          ) : (
            <img
              onClick={() => setVersoDos(!versoDos)}
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
