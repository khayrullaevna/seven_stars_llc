import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0b283c] text-white py-8 sm:py-2 footer pb-5 pt-5">
      <div className="footer__container mx-auto py-2 px-2 pt-5 pb-5">
        <div className="footer__div flex flex-wrap justify-center md:justify-between text-center md:text-left">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 px-4">
            <img className="footer__logo" src="img/logo.png" alt="logo" />

            <div className="footer__social flex justify-center space-x-5 mb-8 pt-5">
              <a
                href="https://www.facebook.com/sevenstarslogistic?mibextid=fVIIUt
"
                className="footer__social-link footer__text text-gray-100 hover:text-gray-200 text-4xl"
              >
                <FaFacebook
                  className="footer__icon"
                  style={{ fontSize: "2em" }}
                />
              </a>
              <a
                href="#"
                className="footer__social-link footer__text text-gray-100 hover:text-gray-200 text-4xl"
              >
                <FaTwitter
                  className="footer__icon"
                  style={{ fontSize: "2em" }}
                />
              </a>
              <a
                href="#"
                className="footer__social-link footer__text text-gray-100 hover:text-gray-200 text-4xl"
              >
                <FaInstagram
                  className="footer__icon"
                  style={{ fontSize: "2em" }}
                />
              </a>
              <a
                href="#"
                className="footer__social-link footer__text text-gray-100 hover:text-gray-200 text-4xl"
              >
                <FaLinkedin
                  className="footer__icon"
                  style={{ fontSize: "2em" }}
                />
              </a>
              <a
                href="https://t.me/alexegamov"
                className="footer__social-link footer__text text-gray-100 hover:text-gray-200 text-4xl"
              >
                <FaTelegram
                  className="footer__icon"
                  style={{ fontSize: "2em" }}
                />
              </a>
            </div>

            <div className="text-center text-gray-400 mt-10 sm:mt-12 font-light">
              ©Seven Stars LLC {new Date().getFullYear()}. All rights reserved.
            </div>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0 px-4">
            <h5 className="footer__title uppercase mb-4 font-bold"></h5>
            <ul className="text-gray-400">
              <li className="footer__link mb-2">
                <NavLink to="/home" className="footer__text hover:underline">
                  Home
                </NavLink>
              </li>
              <li className="footer__link mb-2">
                <NavLink to="/about" className="footer__text hover:underline">
                  About
                </NavLink>
              </li>
              <li className="footer__link mb-2">
                <NavLink to="/drivers" className="footer__text hover:underline">
                  Drivers
                </NavLink>
              </li>
              <li className="footer__link mb-2">
                <NavLink to="/contact" className="footer__text hover:underline">
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 px-4 mt-2">
            <h5 className="footer__title uppercase mb-4 font-bold">Contact</h5>
            <p className="footer__text text-gray-400">dispatch@7starsllc.com</p>
            <p className="footer__text text-gray-400">+1-800-470-0804 </p>
            <p className="footer__text text-gray-400">Call us 8 AM to 5 PM</p>
            <p className="footer__text text-gray-400">Monday- Friday</p>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0 px-4 mt-5">
            <h5 className="footer__title uppercase mb-4 font-bold">Location</h5>
            <p className="footer__text text-gray-400">
              32401 8 mile rd, Livonia, MI 48390
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
