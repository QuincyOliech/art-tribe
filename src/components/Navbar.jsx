// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="flex items-center px-4 py-2">
//       <a href="/" className="flex items-center text-5xl m-4 font-bold space-x-4">
        // <span className="bg-gradient-to-r text-transparent from-red-700 via-orange-500 to-yellow-500 bg-clip-text">
        //   Art
        // </span>{" "}
        // <span className="bg-gradient-to-r text-transparent from-yellow-500 via-orange-500 to-red-700 bg-clip-text">
        //   Tribe
        // </span>
//       </a>
//       <ul className="flex space-x-6 text-lg">
        // {navLinks.map((link) => (
        //   <li key={link.to}>
        //     <NavLink
        //       to={link.to}
        //       exact={link.exact}
        //       activeClassName="active-link"
        //       className="text-red-700 font-bold"
        //     >
        //       {link.label}
        //     </NavLink>
        //   </li>
        // ))}
//       </ul>


//     </nav>
//   );
// };

// const navLinks = [
//   { to: "/", label: "Home", exact: true },
//   { to: "/about", label: "About" },
//   { to: "/products", label: "Products" },
//   { to: "/profile", label: "Profile" },
//   { to: "/signup", label: "Sign Up" },
//   { to: "/login", label: "Login" },
// ];

// export default Navbar;


import React, { useState } from 'react';
import { FiHeart, FiShoppingCart, FiUser, FiMenu } from 'react-icons/fi'; 
import { NavLink } from "react-router-dom";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-white shadow z-50 text-black">
      <div className="container mx-auto flex justify-between items-center px-5 xl:px-12 py-6">
        <a href="/" className="text-5xl font-bold font-heading">
        <span className="bg-gradient-to-r text-transparent from-red-700 via-orange-500 to-yellow-500 bg-clip-text">
          Art
        </span>{" "}
        <span className="bg-gradient-to-r text-transparent from-yellow-500 via-orange-500 to-red-700 bg-clip-text">
          Tribe
        </span>
        </a>
        
        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-8">
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              exact={link.exact}
              activeClassName="active-link"
              className="text-black text-lg p-2 font-bold hover:bg-yellow-300 hover:p-2 hover:rounded-md"
            >
              {link.label}
            </NavLink>
          </li>
        ))}
        </ul>
        
       {/* Desktop Header Icons */}
       <div className="hidden xl:flex items-center space-x-5">
          <a href="#" className="hover:text-gray-200">
            <FiHeart className="h-6 w-6" /> {/* Replace with FiHeart icon */}
          </a>
          <a href="#" className="flex items-center hover:text-gray-200">
            <FiShoppingCart className="h-6 w-6" /> {/* Replace with FiShoppingCart icon */}
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </a>
          <a href="#" className="flex items-center hover:text-gray-200">
            <FiUser className="h-6 w-6" /> {/* Replace with FiUser icon */}
          </a>
        </div>

    
        {/* Mobile Hamburger Menu */}
        <div className="xl:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <FiMenu className="h-6 w-6 hover:text-gray-200" />
          </button>
        </div>
      </div>
      
      
      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="xl:hidden">
          <ul className='space-y-4 font-semibold'>
          {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              exact={link.exact}
              activeClassName="active-link"
              className="text-black text-lg p-2 font-bold m-4 hover:bg-yellow-300 hover:p-2 hover:rounded-md"
            >
              {link.label}
            </NavLink>
          </li>
        ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

const navLinks = [
    { to: "/", label: "Home", exact: true },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/profile", label: "Shop" },
    { to: "/contact-us", label: "Contact Us" },
    { to: "/signup", label: "Sign Up" },
    { to: "/login", label: "Login" },
  ]; 

export default Navbar;


