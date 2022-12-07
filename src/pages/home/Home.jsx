import React, { useEffect } from "react";
import HomeAdelantos from "./homeAdelantos/HomeAdelantos";
import { HomeBackground } from "./HomeBackground";
import HomeEarlyBirds from "./HomeEarlyBirds";
import { HomeGaleria } from "./HomeGaleria/HomeGaleria";
import { HomeHeader } from "./HomeHeader";
import HomeRespuestasEnRedes from "./homeRespuestas/HomeRespuestasEnRedes";

const Home = () => {

  return (
    <div className="home">
      <HomeBackground />
<button></button>
      <div className="home_container">
        <HomeHeader />
        <HomeGaleria />
        <HomeAdelantos />
        <HomeRespuestasEnRedes />
        <HomeEarlyBirds />
      </div>
    </div>
  );
};

export default Home;
