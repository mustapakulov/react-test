import React from "react";
import "./Footer.css"

const Footer = ({ arr }) => {
  console.log(arr);
  return (
    <div>
      <footer>
        <div className="footer-content bg-dark">
          <h5 className="footer-content-name text-center ">
            Name: Mustapakulov Baktyar
          </h5>
          <h5 className="footer-content-adres text-center">
            Address: Sukhe Bator str., building 32, apt 26
          </h5>
          <h5 className="footer-content-phone text-center">
            Phone :+996 500 17 00 65
          </h5>
          <h5 className="footer-content-email text-center">
            @Mail:scaletto9889@mail.ru
          </h5>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
