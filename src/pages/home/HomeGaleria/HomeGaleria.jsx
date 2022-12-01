import React from "react";

export const HomeGaleria = () => {
  return (
    <div className="home_galeria containerAll">
      <div className="lyrics">
        <p>Tu felicidad es romántica tu forma de amar enígmatica</p>
        <img src="/assets/consonido.png" alt="consonido" />
      </div>

      <div className="home_galeria_images">
        <div className="imagen">
          <img className="marco" src="/assets/marco1.png" alt="marco1" />
          <img
            className="imagen_back"
            src="/assets/fotos/imagen_2.jpg"
            alt="marco1"
          />
        </div>

        <div className="imagen">
          <img className="marco" src="/assets/marco1.png" alt="marco1" />
          <img
            className="imagen_back"
            src="/assets/fotos/imagen_3.jpg"
            alt="marco1"
          />
        </div>
        <div className="imagen">
          <img className="marco" src="/assets/marco1.png" alt="marco1" />
          <img
            className="imagen_back"
            src="/assets/fotos/imagen_1.jpg"
            alt="marco1"
          />
        </div>
      </div>

      <div className="home_galeria_images home_galeria_images_2">
        {window.innerWidth < 768 && (
          <div className="lyrics">
            <p>
              El brillo blanco de tu pelo Siempre fiel a tu retrato El velo
              blanco de tus ojos Lo que amansa tus demonios
            </p>
            <img src="/assets/consonido.png" alt="consonido" />
          </div>
        )}

        <div className="imagen">
          <img className="marco" src="/assets/marco1.png" alt="marco1" />
          <img
            className="imagen_back"
            src="/assets/fotos/imagen_4.jpg"
            alt="marco1"
          />
        </div>

        <div className="imagen">
          <img className="marco" src="/assets/marco1.png" alt="marco1" />
          <img
            className="imagen_back"
            src="/assets/fotos/imagen_5.jpg"
            alt="marco1"
          />
        </div>
      </div>
    </div>
  );
};
