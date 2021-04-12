import React from "react";
import Fade from "react-reveal/Slide";
import itemAddedGif from "../../assets/icons/cart-filled.gif";
const ModalAdded = ({ setModal }) => {
  return (
    <>
      <div className="modal-overlay" onClick={() => setModal(false)}></div>
      <Fade duration={300} bottom>
        <div className="modal-content modal-added">
          <div className="content animate__bounce">
            <h3>Producto añadido con éxito</h3>
            {/* <img src={happyIcon} alt="" /> */}
            <img src={itemAddedGif} alt="" />
            <div className="buttons">
              {/* <button>Ir al carrito</button> */}
              <button
                className="continue-shopping"
                onClick={() => setModal(false)}
              >
                Seguir comprando
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default ModalAdded;
