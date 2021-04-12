import React from "react";
import { useSelector } from "react-redux";
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import mailIcon from "../../assets/icons/mail.svg";

const Footer = () => {
  const logoBU =
    "https://curriculum-theta.vercel.app/static/media/user-image.699a4177.jpg";
  const { company } = useSelector((state) => state.user);

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-image">
          <img src={company[0]?.logo ? company[0]?.logo : logoBU} alt="" />
        </div>
        <div className="social-networking-sites">
          {company[0]?.facebook && (
            <a href={company[0]?.facebook} target="_blank" rel="noreferrer">
              <img src={facebookIcon} alt="" />
            </a>
          )}
          {company[0]?.instagram && (
            <a href={company[0]?.instagram} target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="" />
            </a>
          )}
          {company[0]?.correo && (
            <a
              href={`mailto:${company[0]?.correo}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={mailIcon} alt="" />
            </a>
          )}
        </div>
        <small className="develop-by">
          Desarrollado por
          <a href="https://cutt.ly/NcmC77b" target="_blank" rel="noreferrer">
            @codechappie
          </a>
        </small>
      </div>
    </div>
  );
};

export default Footer;
