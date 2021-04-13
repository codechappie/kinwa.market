// import React from "react";
// import { Swiper, SwiperSlide } from "framework7-react";
// import "swiper/swiper.min.css";
// import { Link } from "react-router-dom";

// const Carousel = ({ categories }) => {
//   return (
//     <Swiper navigation loop={true} slidesPerView={6} spaceBetween={20}>
//       {categories.map((category, index) => (
//         <SwiperSlide key={index} className="category-card">
//           <Link to={`/tienda/${category.categoria}`} >
//             <div className="icon">
//               <img src={category.icono} alt={category.categoria} />
//             </div>
//             <h3>{category.categoria}</h3>
//           </Link>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default Carousel;
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowHook";
import moreIcon from "../../assets/icons/more-than.svg";
import lessIcon from "../../assets/icons/less-than.svg";

const Carousel = ({ categories }) => {
  const { width } = useWindowDimensions();
  let numberVisibleSlides;
  console.log(width);
  if (width <= 5000) {
    numberVisibleSlides = 5;
  }
  if (width <= 1200) {
    numberVisibleSlides = 4;
  }
  if (width <= 768) {
    numberVisibleSlides = 3;
  }
  if (width <= 500) {
    numberVisibleSlides = 2;
  }
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={50}
      infinite={true}
      totalSlides={categories?.length}
      visibleSlides={numberVisibleSlides}
    >
      <Slider>
        {categories.map((category, index) => (
          <Slide key={index} index={index} aria-label={category.categoria}>
            <Link to={`/categoria/${category.categoria}`} aria-label={category.categoria}>
              <div className="icon">
                <img src={category.icono} alt={category.categoria} />
              </div>
              <h3>{category.categoria}</h3>
            </Link>
          </Slide>
        ))}
      </Slider>
      {width > 768 && (
        <>
          <ButtonBack>
            <img src={lessIcon} alt="" />
          </ButtonBack>
          <ButtonNext>
            <img src={moreIcon} alt="" />
          </ButtonNext>
        </>
      )}
    </CarouselProvider>
  );
};

export default Carousel;
