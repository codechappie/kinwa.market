import React from "react";

const Hero = () => {
  return (
    <div className="hero">
        {/* https://cdn.dribbble.com/users/2008861/screenshots/14293050/media/81c828595bd4135765fa3df8087dd467.gif https://cdn.dribbble.com/users/1129235/screenshots/9838294/media/af6bd0e65ea6c19ad9133796f05293ec.gif*/}
      <img
        src="https://cdn.dribbble.com/users/2008861/screenshots/15204794/media/1030bb3778e87d85708d88041b05a3d6.gif"
        alt=""
      />
      <div className="hero-content">
        <h2>Ordena tus productos favoritos ahora mismo.</h2>
        <h3>#DeliveryGratis</h3>
        {/* <button className="order-btn">Ver ofertas</button> */}
      </div>
    </div>
  );
};

export default Hero;
