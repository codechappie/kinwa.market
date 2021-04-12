import React, { useState } from "react";
// import searchIcon from "../../assets/icons/search.svg";
import cartIcon from "../../assets/icons/cart.svg";
import Modal from "../modal/Modal";
import ShoppingCart from "../cart/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router";

const Navbar = () => {
  const logoBU = 'https://curriculum-theta.vercel.app/static/media/user-image.699a4177.jpg';
  const [shoppingCartIsOpen, setShoppingCartIsOpen] = useState(false);
  let body = document.body;
  if (shoppingCartIsOpen === true) {
    body.style.overflowY = "hidden";
  } else {
    body.style.overflowY = "scroll";
  }
  const { cart, company } = useSelector((state) => state.user);


  return (
    <div className="navbar">
      <Modal modalIsOpen={shoppingCartIsOpen}>
        <ShoppingCart seModalIsOpen={setShoppingCartIsOpen} />
      </Modal>
      <div className="navbar-container">
        {company.length > 0 ? (
          <Link to="/" className="logo">
            <img src={company[0]?.logo ? company[0]?.logo : logoBU} alt={company[0]?.empresa ? company[0]?.empresa : 'codechappiescroll'} />
          </Link>
        ) : (
          <div className="logo-esqueleton">
            <span className="sombra"></span>
          </div>
        )}
        {/* <Link to="/" className="logo">
           <img
            src={company[0]?.logo}
            alt={company[0]?.empresa}
          /> 
        </Link> */}

        <div className="options">
          {/* <p className="button">
            nombre
          </p> */}
          {/* <div className="search-btn button">
            <img src={searchIcon} alt="" />
          </div> */}
          <div
            className="cart-btn button"
            onClick={() => setShoppingCartIsOpen(true)}
          >
            <span className="number">{cart.length}</span>
            <img src={cartIcon} alt="" />
          </div>
          {/* <div className="cart-btn button" onClick={handleLogout}>
            Salir
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
