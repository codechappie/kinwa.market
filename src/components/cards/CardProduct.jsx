import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart, numberWithCommas } from "../../actions/user";
import ModalAdded from "../cart/ModalAdded";
import Modal from "../modal/Modal";

import cartIcon from "../../assets/icons/cart.svg";
import Fade from 'react-reveal/Fade';

const CardProduct = ({ product }) => {
  const { id, nombre, descripcion, precio, imagen, medida, stock } = product;
  const dispatch = useDispatch();
  const [unitValue, setUnitValue] = useState(0);
  const [gramsValue, setGramsValue] = useState(0);
  const [modalAdded, setModalAdded] = useState(false);

  let stockUpper = stock.toUpperCase();
  console.log(stockUpper)
  const handleQuitProduct = (e, medida) => {
    e.preventDefault();
    if (medida === "unidad") {
      if (unitValue === 0) return;
      setUnitValue(unitValue - 1);
    }
    if (medida === "gramos") {
      if (gramsValue === 0) return;
      setGramsValue(gramsValue - 1000);
    }
  };

  const handleAddProduct = (e, medida) => {
    e.preventDefault();
    if (medida === "unidad") {
      setUnitValue(unitValue + 1);
    }
    if (medida === "gramos") {
      setGramsValue(gramsValue + 1000);
    }
  };

  const handleAddToCart = (e, id, nombre, precio, imagen, medida) => {
    e.preventDefault();

    let value;
    if (medida === "unidad") {
      value = unitValue;
    }
    if (medida === "gramos") {
      value = gramsValue;
    }
    if (value === 0) return;
    const productDto = {
      id,
      nombre,
      precio,
      imagen,
      medida,
      cantidad: value,
    };
    dispatch(addProductToCart(productDto));
    setModalAdded(true);
    setGramsValue(0);
    setUnitValue(0);
  };

  return (
    <Fade bottom>
      <div className="card">
        <Modal modalIsOpen={modalAdded}>
          <ModalAdded setModal={setModalAdded} />
        </Modal>
        {
          stockUpper !== 'SI' && (
            <div className="unavailable">
              <span>Sin stock 😞</span>
            </div>
          )
        }
        <div className="image">
          <img src={imagen} alt={imagen} />
        </div>
        <div className="product-details">
          <div className="product-info">
            <div className="title">{nombre}</div>
            <div className="description">{descripcion}</div>
            <small className="price">$ {numberWithCommas(precio)}</small>
          </div>
          <div className="buying-buttons">
            <div className="buttons">
              <button
                className="decrease button" aria-label="decrementar"
                onClick={(e) => handleQuitProduct(e, medida)}
              >
                -
              </button>
              <div className="value">
                {medida === "unidad" ? (
                  <span className="values">{unitValue}</span>
                ) : (
                  <span className="values">{gramsValue / 1000}</span>
                )}
                {medida === "unidad" ? (
                  <span></span>
                ) : (
                  <span className="units">kg</span>
                )}
              </div>
              <button
                className="increase button" aria-label="incrementar"
                onClick={(e) => stock === 'SI' && handleAddProduct(e, medida)}
              >
                +
              </button>
            </div>

            <button
              className="add-product-btn" aria-label="agregar producto"
              onClick={(e) =>
                handleAddToCart(e, id, nombre, precio, imagen, medida)
              }
            >
              <img src={cartIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default CardProduct;
