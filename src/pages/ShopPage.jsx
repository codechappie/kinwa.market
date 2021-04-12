import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tableTopData } from "../actions/user";
import CardProduct from "../components/cards/CardProduct";
import Carousel from "../components/carousel/Carousel";
import Loading from "../components/commons/Loading";
import LoadingPage from "../components/commons/LoadingPage";
import Hero from "../components/hero/Hero";
// import Carousel from "../components/carousel/Carousel";
const ShopPage = () => {
  // const { products, categories } = useSelector((state) => state.user);
  const { company, products, categories, messages } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const myExcelId = "1GZinXdk1sS1ss8wWuThlevk6Qgl1Tt0UGf9_PjDcwN0";

  useEffect(() => {
    dispatch(tableTopData(myExcelId));
  }, [dispatch]);

  console.log(company[0]?.frase);

  return !messages.loadingPage ? (
    <div className="shop-page">
      <Hero
        frase={company[0]?.frase}
        hashtag={company[0]?.hashtag}
        fondo={company[0]?.fondo}
      />
      <div className="categories">
        <Carousel categories={categories} />
        <div className="container-page">
          <div className="cards">
            {products.length < 1 ? (
              <Loading />
            ) : (
              products.map((product) => (
                <CardProduct key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <LoadingPage />
  );
};

export default ShopPage;
