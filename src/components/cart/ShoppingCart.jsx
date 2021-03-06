import React from "react";
import ShopingCartItem from "./ShoppingCartItem";
import closeIcon from "../../assets/icons/close.svg";
import { useSelector } from "react-redux";
import { getCurrentTime, numberWithCommas } from "../../actions/user";
import shopCartIcon from "../../assets/icons/shop-cart.svg";
import Fade from 'react-reveal/Slide'
const ShoppingCart = ({ seModalIsOpen }) => {
  const { cart, company } = useSelector((state) => state.user);

  const handleOrderCompleted = () => {
    // const devDomain = '%0ahttps://cutt.ly/NcmC77b';
    const devDomain = "";
    let message = `๐ค ${getCurrentTime()}, quiero comprar ๐:%0a%0aโโโโโโโโโโโโโโโโโโโโ%0a๐๐ *Orden de compra* ๐๐%0aโโโโโโโโโโโโโโโโโโโโ`;
    let finalMessage = `%0a%0a*${company[0].empresa}* va a confirmar tu orden poco despues de recibir tu mensaje%0aMuchas Gracias%0a%0aแดฐแตหขแตสณสณแตหกหกแตแตแตสณ--แถแตแตแตแถสฐแตแตแตแถฆแต${devDomain}`;
    let finalPayment = 0;
    cart.map((product) => {
      message += `%0a%0a*โ๏ธ Producto:* ${product.nombre}%0a    ยป *Preciox${
        product.medida === "unidad" ? "Unidad" : "Kilo"
      }:* $ ${numberWithCommas(product.precio)}%0a    ยป *Cantidad:* ${
        product.medida === "unidad" ? product.cantidad : product.cantidad / 1000
      }${product.medida === "unidad" ? "" : "kg"}
      %0a    ยป *Subtotal:* $ ${
        product.medida === "unidad"
          ? numberWithCommas((product.precio * product.cantidad).toFixed(2))
          : numberWithCommas(
              ((product.precio * product.cantidad) / 1000).toFixed(2)
            )
      }`;
      return message;
    });

    cart.forEach((product) => {
      if (product.medida === "unidad") {
        finalPayment += product.precio * product.cantidad;
        console.log("unidad", product.precio);
      } else {
        finalPayment += (product.precio * product.cantidad) / 1000;
        console.log("gramos", product.precio);
      }

      console.log({ finalPayment });
    });

    if (cart.length < 1) return;

    window.open(
      `https://wa.me/${
        company[0]?.whatsapp
      }?text=${message}%0a%0a%0a*๐ฐ El monto final a pagar es de:*%0a ยปยป $ ${numberWithCommas(
        finalPayment.toFixed(2)
      )}${finalMessage}`,
      "_blank"
    );
  };
  return (
    <>
      <div className="shopping-modal">
        <div
          className="shopping-overlay"
          onClick={() => seModalIsOpen(false)}
        />
        <Fade duration={300} right>
        <div className="shopping-cart">
          <div className="header">
            <h3>Carrito de compras</h3>
            <span className="close-img" onClick={() => seModalIsOpen(false)}>
              <img src={closeIcon} alt="" />
            </span>
          </div>

          <div className="shopping-container">
            <div className="shopping-items">
              {cart.length > 0 ? (
                cart
                  .sort(function (a, b) {
                    var nameA = a.nombre.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.nombre.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                    // names must be equal
                    return 0;
                  })
                  .map((item) => <ShopingCartItem key={item.id} {...item} />)
              ) : (
                <div className="empty-cart">
                  <img src={shopCartIcon} alt="" />
                  <p>Aรบn no tienes ningรบn producto en la bolsa</p>
                </div>
              )}
            </div>
          </div>
          <div className="footer">
            <button
              className="close-btn btn"
              onClick={() => seModalIsOpen(false)}
            >
              Cerrar
            </button>
            <button
              className="send-order-btn btn"
              onClick={handleOrderCompleted}
            >
              Finalizar compra
            </button>
          </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default ShoppingCart;
