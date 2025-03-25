import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faSkype,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useMediaQuery } from "react-responsive";
import { MobileHeader } from "./Constants"; // Import the MobileHeader component

const Header = () => {
  const navLinks = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Features", href: "#features" },
    { text: "News", href: "#news" },
    { text: "Blog", href: "#blog" },
    { text: "Contact us", href: "#contact" },
  ];

  const iconLinks = [
    { href: "https://www.facebook.com/login/", icon: faFacebookF },
    { href: "https://twitter.com/i/flow/login", icon: faTwitter },
    { href: "https://www.skype.com/en/", icon: faSkype },
    { href: "https://www.linkedin.com/home", icon: faLinkedinIn },
  ];

  const navigate = useNavigate();

  const handleClick = (e, href) => {
    e.preventDefault();
    navigate(`${href}`);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isSmallOrMedium = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <div className="w-full h-24 bg-[rgba(0,0,0,0.4)] px-4 items-center flex justify-between border-b-2 border-b-[#7b7b7b] fixed top-0 z-10 backdrop-blur-sm sm:h-20 md:h-20">
      <div className="w-1/5 flex items-center justify-end lg:justify-center">
        <Link
          to={{ pathname: "/", hash: "#home" }}
          onClick={(e) => handleClick(e, "#home")}
        >
          <img
            src="/Images/Logo.png"
            alt="Logo"
            className="aspect-square object-cover w-[67px] h-[67px] sm:w-[45px] sm:h-[45px] md:w-[45px] md:h-[45px]"
          />
        </Link>
      </div>
      {isSmallOrMedium ? (
        <MobileHeader
          navLinks={navLinks}
          iconLinks={iconLinks}
          handleClick={handleClick}
        />
      ) : (
        <nav className="flex flex-row gap-12 flex-grow items-center justify-center h-full sm:justify-end sm:pr-3 md:justify-end md:pr-3">
          <ul
            id="nav-links"
            className="flex flex-row gap-12 list-none items-center text-white h-full"
          >
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="flex items-center h-full border-0 transition-all ease-in-out text-xl font-myriad-pro hover:border-b-8 border-b-[#11749e] cursor-pointer lg:text-lg"
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
          <ul
            id="icon-links"
            className="flex flex-row gap-6 text-white text-xl"
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
      )}
    </div>
  );
};

export default Header;
