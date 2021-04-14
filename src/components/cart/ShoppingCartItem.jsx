import React from "react";
import { useDispatch } from "react-redux";
import { incrementProductToCart, numberWithCommas } from "../../actions/user";

const ShoppingCartItem = ({ id, nombre, precio, imagen, cantidad, medida }) => {
  const dispatch = useDispatch();

  const handleQuitProduct = (e, id, nombre, precio, imagen, medida) => {
    e.preventDefault();
    let value;
    if (medida === "unidad") {
      // if (unitValue === 0) return;
      // setUnitValue(unitValue - 1);
      value = cantidad - 1;
    }
    if (medida === "gramos") {
      // if (gramsValue === 0) return;
      value = cantidad - 100;
    }
    console.log({value})
    const productDto = {
      id,
      nombre,
      precio,
      imagen,
      medida,
      cantidad: value,
    };
    dispatch(incrementProductToCart(productDto));
  };

  const handleAddProduct = (e,id, nombre, precio, imagen, medida) => {
    e.preventDefault();
    let value;
    if (medida === "unidad") {
      // setUnitValue(unitValue + 1);
      value = cantidad + 1;
    }
    if (medida === "gramos") {
      // setGramsValue(gramsValue + 100);
      value = cantidad + 100;
    }
    console.log({value})
    const productDto = {
      id,
      nombre,
      precio,
      imagen,
      medida,
      cantidad: value,
    };
    dispatch(incrementProductToCart(productDto));
  };

  return (
    <div className="product-item">
      <div className="product-detail">
        <div className="image">
          <img src={imagen} alt="" />
        </div>
        <div className="product-info">
          <div className="title">{nombre}</div>
          <div className="prices">
            <div className="unit-price">unidad: $ {numberWithCommas(precio)}</div>
            {/* <span>➝</span> */}
            <div className="subtotal">
              subtotal: $
              {medida === "unidad"
                ? `${numberWithCommas((precio * cantidad).toFixed(2))}`
                : `${numberWithCommas(((precio * cantidad) / 1000).toFixed(2))}`}
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <div
          className="increase"
          onClick={(e) =>
            handleAddProduct(e, id, nombre, precio, imagen, medida)
          }
        >
          +
        </div>
        <div className="amount">
          {medida === "unidad" ? (
            <span className="values">{cantidad}</span>
          ) : (
            <span className="values">{cantidad / 1000}</span>
          )}
          {medida === "unidad" ? (
            <span></span>
          ) : (
            <span className="units">kg</span>
          )}
        </div>
        <div className="decrease" onClick={(e) =>
            handleQuitProduct(e, id, nombre, precio, imagen, medida)
          }>-</div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
