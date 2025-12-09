import React, { useState, useEffect } from "react";
import Container from "../layouts/Container";
import Flex from "../layouts/Flex";
import { FaFacebookF, FaTwitter, FaLinkedin, FaBars } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { Link } from "react-scroll";
import { ImCross } from "react-icons/im";

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


  const socialIcons = [
    FaFacebookF,
    FaTwitter,
    FaLinkedin,
    TiSocialInstagram,
  ];

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
      <Container>
        <Flex className="items-center flex-col md:flex-row">
          
    
          <div className="md:flex-1 flex items-center justify-between w-full">
            <h2 className="font-playfair text-primary text-4xl font-bold">
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

     
          <div className="hidden md:block mr-9">
            <ul className="flex gap-x-10">
              {menulist.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="font-secondary text-white text-xl lg:text-2xl cursor-pointer hover:text-primary transition-all"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

    
          <div className="hidden md:flex text-white gap-x-5 text-2xl">
            {socialIcons.map((Icon, i) => (
              <a key={i} href="#" className="hover:text-primary transition-colors">
                <Icon />
              </a>
            ))}
          </div>

          {show && (
            <div className="w-full mt-5 bg-basecolor md:hidden rounded-xl py-6 shadow-xl transition-all duration-500">
              
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
                      className="font-secondary text-white text-xl cursor-pointer hover:text-primary transition-all"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center gap-x-6 text-white text-2xl">
                {socialIcons.map((Icon, i) => (
                  <a key={i} href="#" className="hover:text-primary transition-all">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          )}
        </Flex>
      </Container>
    </div>
  );
};

export default Navbar;
