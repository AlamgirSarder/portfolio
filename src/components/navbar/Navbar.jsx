import React, { useState, useEffect } from "react";
import Container from "../layouts/Container";
// import logo from "../../assets/logo.png";
import Flex from "../layouts/Flex";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const menulist = [
    { name: "Home", to: "navbar" },
    { name: "About", to: "about" },
    { name: "Service", to: "service" },
    { name: "Projects", to: "projects" },
    { name: "Blog", to: "blog" },
    { name: "Contact", to: "contact" },
  ];

  const socialIcons = [
    <FaFacebookF />,
    <FaTwitter />,
    <FaLinkedin />,
    <TiSocialInstagram />,
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-basecolor/95 backdrop-blur-md shadow-2xl py-4"
          : "bg-transparent py-9"
      }`}
    >
      <Container>
        <Flex className="items-center">
       
          <div className="flex-1">
            {/* <img className="w-auto h-10" src={logo} alt="logo" /> */}
            <h2 className="font- font-secondary text-primary text-6xl font-bold ">Alamgir</h2>
          </div>

          <div className="mr-9">
            <ul className="flex gap-x-10">
              {menulist.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    duration={800}
                    offset={-100}
                    className="font-secondary text-white text-xl lg:text-2xl cursor-pointer transition-all duration-300 hover:text-primary block"
                    activeClass="!text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        
          <div className="flex text-white gap-x-5 text-2xl">
            {socialIcons.map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                {Icon}
              </a>
            ))}
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Navbar;