import React, { useState } from "react";
import Media from "react-media";
export const HomeHeader = () => {
  const [volumeActive, setVolumeActive] = useState(false);

  return (
    <div className="home_header containerAll">
      <div className="home_header_container">
        <div
          className="content_vol"
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
          <Media query="(max-width: 750px)">
            {(resolution) => {
              return resolution ? (
                <div className="contet_img">
                  <img src="/assets/pastilla_derretida.png" alt="" />
                </div>
              ) : (
                ""
              );
            }}
          </Media>

          <h1 className="textBot">19.20.2022</h1>

          <div className="contet_button">
            <button>PRESAVE</button>
          </div>
        </div>

        <Media query="(max-width: 750px)">
          {(resolution) => {
            return resolution ? (
              <div className="content_decoration">
               <img src="/assets/scroll.png" alt="scroll" />
              </div>
            ) : (
              <div className="contet_img">
                <img src="/assets/pastilla_derretida.png" alt="" />
              </div>
            );
          }}
        </Media>
      </div>
    </div>
  );
};
