import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaLinkedin, FaBars } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);

  const menulist = [
    { name: "Home", to: "navbar" },
    { name: "About", to: "about" },
    { name: "Service", to: "service" },
    { name: "Projects", to: "projects" },
    { name: "Blog", to: "blog" },
    { name: "Contact", to: "contact" },
  ];

  const socialIcons = [FaFacebookF, FaTwitter, FaLinkedin, TiSocialInstagram];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-basecolor/95 backdrop-blur-md shadow-xl py-4"
          : "bg-basecolor md:bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between flex-col md:flex-row">
  
          <div className="w-full md:flex-1 flex items-center justify-between">
            <h2 className="font-momo text-primary text-4xl font-bold">
              ALAMGIR
            </h2>

            {show ? (
              <ImCross
                onClick={() => setShow(false)}
                size={30}
                className="text-white md:hidden cursor-pointer"
              />
            ) : (
              <FaBars
                onClick={() => setShow(true)}
                size={30}
                className="text-white md:hidden cursor-pointer"
              />
            )}
          </div>
          <ul className="hidden md:flex gap-x-10 mr-9">
            {menulist.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  activeClass="!text-primary"
                  className="font-secondary text-white text-xl lg:text-2xl cursor-pointer hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex text-white gap-x-5 text-2xl">
            {socialIcons.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-primary transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>

          <div
            className={`md:hidden w-full bg-basecolor rounded-xl shadow-xl overflow-hidden transition-all duration-500 ${
              show ? "max-h-96 py-6 mt-5" : "max-h-0 py-0 mt-0"
            }`}
          >
            <ul className="flex flex-col items-center gap-y-5 mb-6">
              {menulist.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={800}
                    offset={-80}
                    onClick={() => setShow(false)}
                    activeClass="!text-primary"
                    className="font-secondary text-white text-xl cursor-pointer hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex justify-center gap-x-6 text-white text-2xl">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
