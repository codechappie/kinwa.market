import { types } from "../types/types";

const initialState = {
  products: [],
  categoryProducts: [],
  company: [],
  categories: [],
  cart: [],
  messages: {
    loadingPage: true,
    loadingCategoryPage: true,
    categoryEmpty: true,
  },
};

export const userReducer = (state = initialState, action) => {
  // switch (action.type) {
  if (types.userData === action.type) {
    const { products, company, categories } = action.payload;
    return {
      ...state,
      products,
      company,
      categories,
      messages: {
        ...state.messages,
        loadingPage: false,
      },
    };
  }
  if (types.addProductToCart === action.type) {
    let product = action.payload;
    let existingProduct = state.cart.filter((item) => item.id === product.id);
    if (existingProduct.length > 0) {
      const withOutProduct = state.cart.filter(
        (item) => item.id !== product.id
      );

      const updatedProduct = {
        ...existingProduct[0],
        cantidad: existingProduct[0].cantidad + product.cantidad,
      };
      return {
        ...state,
        cart: [...withOutProduct, updatedProduct],
      };
    } else {
      return {
        ...state,
        cart: [...state.cart, product],
      };
    }
  }
  if (types.incrementProductToCart === action.type) {
    let incrementProduct = action.payload;
    let existingIncrementProduct = state.cart.filter(
      (item) => item.id === incrementProduct.id
    );
    console.log("cart", state.cart);
    if (incrementProduct.cantidad === 0) {
      const withOutProduct = state.cart.filter(
        (item) => item.id !== incrementProduct.id
      );
      return {
        ...state,
        cart: [...withOutProduct],
      };
    }

    if (existingIncrementProduct.length > 0) {
      const withOutProduct = state.cart.filter(
        (item) => item.id !== incrementProduct.id
      );
      console.log(incrementProduct.cantidad);
      const updatedProduct = {
        ...existingIncrementProduct[0],
        cantidad: incrementProduct.cantidad,
      };
      return {
        ...state,
        cart: [...withOutProduct, updatedProduct],
      };
    } else {
      return {
        ...state,
        cart: [...state.cart, incrementProduct],
      };
    }
  }
  if (types.getCategoryData === action.type) {
    const { products, company, category, categories } = action.payload;
    // console.log(products, category);
    const categoryProducts = products.filter(
      (product) => product.categoria === category
    );
    let empty = true;
    let loadingCategoryPage = true;
    if (categories.length > 0) {
      loadingCategoryPage = false;
    }
    if (categoryProducts.length > 0) {
      empty = false;
    } else if (categoryProducts.length < 0) {
      empty = true;
    }
    // console.log({ categoryProducts });
    return {
      ...state,
      company,
      categories,
      categoryProducts,
      messages: {
        ...state.messages,
          loadingCategoryPage,
          categoryEmpty: empty,
        }
    };
  }
  // case types.removeProductToCart:
  //   const removeProduct = action.payload;
  //   let existingItemRemoved = state.cart.filter(item => item.id === removeProduct.id)
  //   console.log(existingItemRemoved)
  //   return state;
  else {
    return state;
  }
};
