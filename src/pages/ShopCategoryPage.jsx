import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { tableTopDataByCategory } from "../actions/user";
import CardProduct from "../components/cards/CardProduct";
import Carousel from "../components/carousel/Carousel";
import Loading from "../components/commons/Loading";
import LoadingPage from "../components/commons/LoadingPage";
const ShopCategoryPage = () => {
  const { categoryProducts, categories, messages } = useSelector((state) => state.user);
  const { category } = useParams();
  const dispatch = useDispatch();
  const myExcelId = "1GZinXdk1sS1ss8wWuThlevk6Qgl1Tt0UGf9_PjDcwN0";
  console.log(category)
  console.log(categoryProducts)
  useEffect(() => {
    dispatch(tableTopDataByCategory(myExcelId, category));
    return () => {
      
    }    
  }, [dispatch, category]);


  // console.log("vacio", messages.categoryEmpty)



  return !messages.loadingCategoryPage ? (
    <div className="shop-page">
      <div className="categories">
        <Carousel categories={categories} />
        <div className="container-page">
          <div className="cards">
            {messages.categoryEmpty ? (
              <div className="no-products-category">
                <span>😥</span>
                <h3>No hay productos en está categoría</h3>
              </div>
            ) : (
              categoryProducts.map((product) => (
                <CardProduct key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  ): (
    <LoadingPage />
  );
};

export default ShopCategoryPage;
