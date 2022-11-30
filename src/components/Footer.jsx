import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="content_icons">
          <div className="youtube">
            <img src="/assets/redessociales/youtube.png" alt="" />
          </div>
          <div className="instagram">
            <img src="/assets/redessociales/instagram.png" alt="" />
          </div>
          <div className="facebook">
            <img src="/assets/redessociales/facebook.png" alt="" />
          </div>

          <div className="spotify">
            <img src="/assets/redessociales/spotify.png" alt="" />
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
      </div>
    </div>
  );
};

export default Footer;
