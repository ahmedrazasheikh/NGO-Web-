import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer     className="text-white md:py-8 py-8 md:px-0  px-6  footer-image">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          <div className=" sm:col-span-1">
          <a className="flex items-center">
        <span className="self-center text-white  text-2xl font-semibold whitespace-nowrap dark:text-white">
         Khalaf Foundation
        </span>
      </a>
            <p className="text-sm py-4 sm:py-6">
            KHALAF AL SALIH started working in 2009 from a small camp that provided rescue and disaster management services. It expanded its branches and succeeded to establish an effective infrastructure that deals with social services, and welfare nationwide.
            </p>
         
          </div>

          <div className="sm:mt-0">
            <h2 className="text-2xl font-bold mb-2">Active Projects</h2>
            
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/Corporate">Jamshoro</Link>
              </li>
              <li>
                <Link to="/TechnicalService">Moro</Link>
              </li>
              <li>
                <Link to="/Corporate">Ghotki</Link>
              </li>
              <li>
                <Link to="/OurDocument">Khairpur</Link>
              </li>
            </ul>
          </div>

          <div className="sm:mt-0">
            <h2 className="text-2xl font-bold mb-2">Achieved Projects</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#">Jacobabad</a></li>
              <li><a href="#">Larkana</a></li>
              <li><a href="#">Dadu</a></li>
              <li><a href="#">Badin</a></li>
            </ul>
          </div>

          <div className="sm:mt-0">
            <h2 className="text-2xl font-bold mb-2">Pages</h2>
            
            <ul className="mt-4 space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#"></a>Contact-us</li>
              <li><a href="#"></a>Active Projects</li>
              <li><a href="#">Achieved Projects</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <hr className="w-4/5 sm:w-3/5 border border-gray-300" />
      </div>

      <div className="flex flex-col justify-center items-center ">
  <div className="text-sm text-white mt-2 font-2xl">
    <Link to="https://radiantcortex.com/" target="_blank">
      &copy; 2023 <span style={{ textDecoration: "underline" }}>Radiant Cortex</span>. All rights reserved.
    </Link>
  </div>
</div>

    </footer>
  );
}

export default Footer;
