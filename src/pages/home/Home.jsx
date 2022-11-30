import React from "react";
import HomeAdelantos from "./homeAdelantos/HomeAdelantos";
import HomeEarlyBirds from "./HomeEarlyBirds";
import HomeRespuestasEnRedes from "./homeRespuestas/HomeRespuestasEnRedes";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container containerAll">
        <HomeAdelantos />
        <HomeRespuestasEnRedes />
        <HomeEarlyBirds />
      </div>
    </div>
  );
};

export default Home;
