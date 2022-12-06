import React from "react";
// import Media from "react-media";
const Footer = () => {
  return (
    <div className="footer containerAll">
      <div className="footer_container">
        <div className="content_icons">
          <div className="youtube">
            <a target="_blank" href="https://youtube.com/ohlaville">
              <img src="/assets/redessociales/youtube.png" alt="" />
            </a>
          </div>
          <div className="instagram">
            <a target="_blank" href="https://instagram.com/ohlaville">
              <img src="/assets/redessociales/instagram.png" alt="" />
            </a>
          </div>
          <div className="facebook">
            <a target="_blank" href="https://fb.com/ohlaville">
              <img src="/assets/redessociales/facebook.png" alt="" />
            </a>
          </div>

          <div className="spotify">
            <a
              target="_blank"
              href="https://open.spotify.com/artist/5uDxyttOUh6KJic2MFbwQ7"
            >
              <img src="/assets/redessociales/spotify.png" alt="" />
            </a>
          </div>
        </div>

        <div className="content_policy">
          <a href="https://www.youtube.com/watch?v=Yabi_nCGXdo&ab_channel=Yanah">
            Politicas de privacidad
          </a>
        </div>

        <div className="content_rights">
          <p>© 2022 OLV </p>
        </div>

        {/* <Media query="(max-width: 750px)">
          {(resolution) => {
            return resolution ? (
              <div className="content_rights">
                <p>© 2022 OLV </p>
              </div>
            ) : (
              ""
            );
          }}
        </Media> */}
      </div>
    </div>
  );
};

export default Footer;
