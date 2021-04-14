import Tabletop from "tabletop";
import { types } from "../types/types";

export const tableTopData = (myExcelId) => {
  return (dispatch) => {
    Tabletop.init({
      key: myExcelId,
      simpleSheet: false,
    })
      .then((data) => {
        // console.log(data)
        dispatch(
          getUserData(
            data.productos.elements,
            data.empresa.elements,
            data.categorias.elements
          )
        );
        // console.log(data.productos.elements);
      })
      .catch((err) => console.warn(err));
  };
};

export const tableTopDataByCategory = (myExcelId, category) => {
  return (dispatch) => {
    dispatch(getCategoryData([], [], [], category));
    Tabletop.init({
      key: myExcelId,
      simpleSheet: false,
    })
      .then((data) => {
        dispatch(
          getCategoryData(
            data.productos.elements,
            data.empresa.elements,
            data.categorias.elements,
            category
          )
        );
        // console.log(data.productos.elements);
      })
      .catch((err) => console.warn(err));
  };
};

export const getUserData = (products, company, categories) => ({
  type: types.userData,
  payload: {
    products,
    company,
    categories,
  },
});

export const addProductToCart = (product) => ({
  type: types.addProductToCart,
  payload: product,
});

export const incrementProductToCart = (product) => ({
  type: types.incrementProductToCart,
  payload: product,
});
export const getCategoryData = (products, company, categories, category) => ({
  type: types.getCategoryData,
  payload: {
    products,
    company,
    categories,
    category,
  },
});

export const getCurrentTime = () => {
  const date = new Date();
  let saludo = "Hola";
  if (date.getHours() < 12 && date.getHours() >= 5) saludo = "Buenos dias";
  if (date.getHours() >= 12 && date.getHours() < 19) saludo = "Buenos tardes";
  if (date.getHours() >= 19 && date.getHours() < 24) saludo = "Buenos noches";
  return saludo;
};

export const numberWithCommas = (numberWo) => {
  return numberWo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const removeProductToCart = (product) => ({
  type: types.removeProductToCart,
  payload: product,
});
