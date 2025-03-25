/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

export const QuickActionItem = ({ children }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <FontAwesomeIcon
        icon={faPenToSquare}
        color="white"
        className="text-[60px] sm:text-4xl"
      />
      <p className="text-sm leading-6 text-white font-gotham sm:text-xs">
        {children}
      </p>
    </div>
  );
};

export const SectionHeader = ({
  letter = "",
  sentence = "",
  color = "white",
  children,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center px-8 w-full">
      <h1
        className={`text-[15.438rem] uppercase text-${color} font-roboto font-bold opacity-15 relative sm:text-[140px]`}
      >
        {letter}
      </h1>
      {sentence && (
        <h1
          className={`text-4xl text-${color} uppercase font-medium font-gotham text-center absolute xl:top-2/4 -translate-y-3/4 sm:hidden md:hidden`}
        >
          {sentence}
        </h1>
      )}
      {children}
    </div>
  );
};

export const FeatureItem = ({ icon, title, description }) => (
  <article className="flex flex-col items-center justify-center text-center text-white gap-4 sm:gap-2 md:gap-2">
    <div className="w-32 h-32 rounded-full bg-[#2e85aa] flex items-center justify-center sm:w-20 sm:h-20 md:w-24 md:h-24">
      <FontAwesomeIcon
        icon={icon}
        className="text-5xl sm:text-3xl md:text-4xl"
      />
    </div>
    <h3 className="text-xl uppercase leading-9 font-medium font-gotham sm:text-base">
      {title}
    </h3>
    <p className="text-xs leading-6 font-gotham max-w-xs">{description}</p>
  </article>
);

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

export const MobileHeader = ({ navLinks, iconLinks, handleClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav
      ref={menuRef}
      className="flex flex-row gap-12 flex-grow items-center justify-center h-full sm:justify-end sm:pr-3 md:justify-end md:pr-10"
    >
      <ul
        id="nav-links"
        className={`flex flex-row gap-12 list-none items-center text-white h-full sm:flex-col sm:fixed sm:top-0 sm:left-0 sm:bg-[rgba(0,0,0,0.7)] sm:h-auto sm:w-full sm:py-5 sm:transition-transform sm:duration-300 sm:transform ${
          isMenuOpen ? "sm:translate-y-0" : "sm:-translate-y-full"
        } sm:gap-3 md:flex-col md:fixed md:top-0 md:left-0 md:bg-[rgba(0,0,0,0.7)] md:h-auto md:w-full md:py-5 md:transition-transform md:duration-300 md:transform ${
          isMenuOpen ? "md:translate-y-0" : "md:-translate-y-full"
        } md:gap-3`}
      >
        <FontAwesomeIcon
          icon={faX}
          className="hidden sm:block md:block absolute right-7 top-8 text-3xl cursor-pointer md:right-14"
          onClick={() => setIsMenuOpen(false)}
        />
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="flex items-center h-full border-0 transition-all ease-in-out text-xl font-myriad-pro hover:border-b-8 border-b-[#11749e] cursor-pointer sm:border-0 sm:py-2 md:border-0 md:py-2"
          >
            <Link
              to={{ pathname: "/", hash: link.href }}
              onClick={(e) => handleClick(e, link.href)}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      {!isMenuOpen && (
        <FontAwesomeIcon
          id="menu-bar"
          icon={faBars}
          className="hidden text-white text-3xl cursor-pointer sm:block md:block"
          onClick={() => setIsMenuOpen(true)}
        />
      )}
      <ul
        id="icon-links"
        className="flex flex-row gap-6 text-white text-xl sm:hidden md:hidden"
      >
        {iconLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={link.icon} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
