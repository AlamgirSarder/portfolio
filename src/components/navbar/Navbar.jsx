import React from "react";
import Container from "../layouts/Container";
import logo from "../../assets/logo.png";
import Flex from "../layouts/Flex";
import { FaFacebookF, FaTwitter, FaBehance } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

const Navbar = () => {
  const menulist = ["Home", "About", "Service", "Projects", "Blog", "Contact"];
  const socialIcons = [
    <FaFacebookF />, 
    <FaTwitter />,
    <FaBehance />,
    <TiSocialInstagram />,
  ];
  return (
    <div className="bg-basecolor">
      <Container>
        <Flex className=" pt-9 items-baseline">
          <div className="flex-1">
            <img className="w-auto" src={logo} alt="logo" />
          </div>
          <div className="mr-9">
            <ul className="flex gap-x-8 relative after:absolute after:content-[''] after:w-px after:h-[26px] after:bg-white after:top-1/2 after:-translate-y-1/2 after:-right-2.5">
              {menulist.map((item, i) => (
                <li key={i}>
                  <a
                    className="font-secondary text-white text-2xl transition-all duration-300 hover:text-primary"
                    href="#"
                  >
                    {item}
                  </a>
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
