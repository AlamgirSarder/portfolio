import React from "react";
import Container from "../layouts/Container";
import logo from "../../assets/logo.png";
import Flex from "../layouts/Flex";
import { FaFacebookF, FaTwitter, FaBehance } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

const Navbar = () => {
  const menulist = ["Home", "About", "Service", "Portfolio", "Blog", "Contact"];
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
            <img src={logo} alt="logo" />
          </div>
          <div className="mr-9">
            <ul className="flex gap-x-8">
              {menulist.map((item, i) => (
                <li key={i}>
                  <a
                    className="font-primary text-white text-2xl transition-all duration-300 hover:text-[#00C0FF]"
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
                className="hover:text-[#00C0FF] transition-colors duration-300"
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
