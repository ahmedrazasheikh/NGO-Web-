import { useState } from "react";
import { NavLink , Link } from "react-router-dom";
import img from '../../Images/Asset 12@3x.png'
function Header() {
  const [isMenuHidden, setMenuHidden] = useState(true);

  const toggleMenu = () => {
    setMenuHidden(!isMenuHidden);
  };
  return (
    <nav
    style={{ background: "#0F4A7C"  , "zIndex" : "100"  }}
    className="w-full  border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-md"
  >
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex mt-4 items-center">
          <img src={img} className="h-14	 mr-3" alt="Logo" />
        </a>
      <button
        onClick={toggleMenu}
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown"
        aria-expanded={isMenuHidden ? 'false' : 'true'}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className={`w-full md:block md:w-auto ${isMenuHidden ? 'hidden' : ''}`}
        id="navbar-dropdown"
      >
        <ul className="flex flex-col items-center	 font-medium p-4 md:p-0 mt-16 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <Link
            className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
            to={'/'}
          >
            Home
          </Link>
          <Link
            className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
            to={'/Active_Projects'}
          >
            Active Projects
          </Link>
          
          <Link
            className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
            to={'/Achieved-Projects'}
          >
            Achieved Projects
          </Link>
          <Link
            className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
            to={'/Contact_us'}
          >
            Contact Us
          </Link>


          <Link
            className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
            to={'/Contact_us'}
          >
          <button   style={{"background" : "#232F3F"}} className="w-full md:w-auto  text-white font-bold py-2 px-4 rounded-full  ">
          Donate Now
          </button>
          </Link>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Header;
