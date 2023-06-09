import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks, resumeUrl } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const workSection = document.getElementById("work");
      const techSection = document.getElementById("tech");
      const contactSection = document.getElementById("contact");
      const scrollPosition = window.scrollY;

      if (
        scrollPosition >=
          aboutSection.getBoundingClientRect().top + scrollPosition - 44 &&
        scrollPosition <
          workSection.getBoundingClientRect().top + scrollPosition - 60
      ) {
        setActive("About");
      } else if (
        scrollPosition >=
          workSection.getBoundingClientRect().top + scrollPosition &&
        scrollPosition <
          techSection.getBoundingClientRect().top + scrollPosition - 100
      ) {
        setActive("Work");
      } else if (
        scrollPosition >=
        contactSection.getBoundingClientRect().top + scrollPosition - 372
      ) {
        setActive("Contact");
      } else {
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active]);

  return (
    <header>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Augustus Chong &nbsp;
              <span className="sm:block hidden">|&nbsp; Portfolio Website</span>
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            <li
              id="resumeLink"
              className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
              onClick={() => {
                window.open(resumeUrl, "_blank", "noopener noreferrer");
              }}
            >
              Resume
            </li>
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
                <li
                  id="resumeLink"
                  className="text-secondary hover:text-white text-[16px] font-medium cursor-pointer"
                  onClick={() => {
                    window.open(resumeUrl, "_blank", "noopener noreferrer");
                  }}
                >
                  Resume
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
