import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  function handleClick() {
    !openMenu ? setOpenMenu(true) : setOpenMenu(false)
  }


  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <img src="/images/logo.svg" />
          <div className="hidden space-x-8 font-bold lg:flex">
            <Link
              href="/"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Features
            </Link>
            <Link
              href="/"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Resources
            </Link>
          </div>
        </div>

        {/* Right Buttons Menu */}
        <div className="hidden lg:flex items-center space-x-6 font-bold text-grayishViolet">
          <div className="hover:text-veryDarkViolet">Login</div>
          <a
            href="/"
            className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
          >
            Sign Up
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={ openMenu ? "open block hamburger lg:hidden focus:outline-none" : "block hamburger lg:hidden focus:outline-none"}
          type="button"
          onClick={handleClick}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}

      <div className={openMenu ? "absolute p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100" : "absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100" }>
        <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
          <a href="#" className="w-full text-center">Features</a>
          <a href="#" className="w-full text-center">Pricing</a>
          <a href="#" className="w-full text-center">Resources</a>
          <a href="#" className="w-full text-center pt-6 border-t border-gray-400">Login</a>
          <a href="#" className="w-full text-center py-3 rounded-full bg-cyan">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
