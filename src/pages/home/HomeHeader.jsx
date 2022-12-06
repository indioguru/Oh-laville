import React, { useEffect, useState } from "react";
import Media from "react-media";
export const HomeHeader = () => {
  const [volumeActive, setVolumeActive] = useState(false);

  useEffect(() => {
    const parallax = (e) => {
      document.querySelectorAll(".contet_img").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", parallax);
  }, []);

  return (
    <div className="home_header containerAll">
      <div className="home_header_container">
        <div
          className="content_vol ga4-call_to_action-master_audio"
          onClick={() => setVolumeActive(!volumeActive)}
        >
          <div className="vol">
            {volumeActive ? (
              <img className="noSound" src="/assets/sinsonido.png" alt="" />
            ) : (
              <img className="sound" src="/assets/consonido.png" alt="" />
            )}
          </div>
        </div>

        <div className="content_flex">
          <h1 className="textTop">TÚ / OLV Y PAOLA NAVARRETE</h1>

          <h1 className="textBot">09.12.22</h1>
          <p className="textTopTwo">
            Descubre de qué se trata Tú y ten la primera opción de compra en los
            shows de OLV y de Paola en 2023.
          </p>
          <Media query="(max-width: 750px)">
            {(resolution) => {
              return resolution ? (
                <div className="contet_img" data-speed="2">
                  <img src="/assets/pastilla_derretida.png" alt="" />
                </div>
              ) : (
                ""
              );
            }}
          </Media>

          <div className="contet_button">
            <a target="_blank" href="https://onerpm.link/SmartLink_Tu">
              <button className="ga4-call_to_action-presave">PRESAVE</button>
            </a>
          </div>
        </div>

        <div className="content_decoration">
          <img src="/assets/scroll.png" alt="scroll" />
        </div>

        <Media query="(max-width: 750px)">
          {(resolution) => {
            return resolution ? (
              ""
            ) : (
              <div className="contet_img" data-speed="2">
                <img src="/assets/pastilla_derretida.png" alt="" />
              </div>
            );
          }}
        </Media>
      </div>
    </div>
  );
};
