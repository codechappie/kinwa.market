import React from "react";
import heroBg from "../../assets/images/hero-bg.gif";
const Hero = ({ frase, hashtag, fondo }) => {
  return (
    <div className="hero">
      <img src={fondo ? fondo : heroBg} alt="" />
      <div className="hero-content">
        <h2>{frase ? frase : "Ordena tus productos favoritos ahora mismo."}</h2>
        <h3>{hashtag ? hashtag : "#DeliveryGratis"}</h3>
        {/* <button className="order-btn">Ver ofertas</button> */}
      </div>
    </div>
  );
};

export default Hero;
