import React from "react";

const Hero = ({frase, hashtag}) => {
  console.log(frase)
  return (
    <div className="hero">
      <img
        src="https://cdn.dribbble.com/users/2008861/screenshots/15204794/media/1030bb3778e87d85708d88041b05a3d6.gif"
        alt=""
      />
      <div className="hero-content">
        <h2>{frase ? frase : 'Ordena tus productos favoritos ahora mismo.'}</h2>
        <h3>{hashtag ? hashtag : '#DeliveryGratis'}</h3>
        {/* <button className="order-btn">Ver ofertas</button> */}
      </div>
    </div>
  );
};

export default Hero;
