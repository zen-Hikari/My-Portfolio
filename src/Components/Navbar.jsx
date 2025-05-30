import { useState, useEffect } from "react";
import Logo from "./assets/logo.png";
import "./Global.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex fixed top-0 right-0 left-0 z-50 justify-center items-center  ${
        isScrolled ? " py-6 " : "bg-transparent py-6"
      }`}
    >
      <div
        className=" w-full max-w-full mx-auto px-4 "
        style={{ maxWidth: "1450px" }}
      >
        <nav className="text-white flex justify-between items-center">
          <div className="logo">
            <img src={Logo} width="80px" alt="logo" />
          </div>
          <div
            className={`link-menu flex gap-8 text-lg font-semibold py-3 px-6 xl:rounded-full lg:rounded-full md:rounded-full rounded-3xl xl:mt-0 lg:mt-0 md:mt-0 mt-9 ${
              menuOpen
                ? "fixed top-20 left-0 right-0 flex flex-col mx-5 text-xl items-center bg-black backdrop-blur-md border border-white/20 py-15 pb-29"
                : "hidden md:flex"
            }`}
          >
            <a href="#about">About</a>
            <a href="#service">Service</a>
            <a href="#work">Works</a>
            <a href="#blog">Blog</a>
          </div>
          <div
            className={`contact text-md py-3 px-6 rounded-full xl:mt-0 lg:mt-0 md:mt-0 mt-1 cursor-pointer ${
              menuOpen
                ? "fixed top-100 justify-center text-xl left-0 right-0 flex items-center"
                : "hidden md:flex"
            }`}
          >
            <a href="https://www.linkedin.com/in/zen-hikari-703125316/" target="_blank" className="cursor-pointer">
              Connect Me
            </a>
          </div>
          <button
            className="hamburger space-y-2 px-4 py-2"
            onClick={toggleMenu}
          >
            <span
              className={`${
                menuOpen ? "rotate-45 translate-y-2" : ""
              } transition-all transform origin-center flex w-6 h-[2px] bg-white rounded-full`}
            ></span>
            <span
              className={`${
                menuOpen ? "opacity-0" : ""
              } transition-all transform origin-center flex w-6 h-[2px] bg-white rounded-full`}
            ></span>
            <span
              className={`${
                menuOpen ? "-rotate-45 -translate-y-3" : ""
              } transition-all transform origin-center flex w-6 h-[2px] bg-white rounded-full`}
            ></span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
