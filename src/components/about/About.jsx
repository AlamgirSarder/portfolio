import React from "react";
import Container from "../layouts/Container";
import Flex from "../layouts/Flex";
import about_man from "../../assets/about_man.png";
import about_laptop from "../../assets/about_laptop.png";
import badge from "../../assets/badge.png";

const About = () => {
  return (
    <div className="bg-basecolor">
      <Container>
        <div className="pb-[244px]">
          <div>
            <p className="font-primary text-2xl font-semibold text-[#00C0FF] text-center mb-5">
              About Me
            </p>
            <h2 className="font-primary font-semibold text-[64px] text-white w-[783px] mx-auto text-center leading-[123%] mb-[131px]">
              A Passionate Developer Who Loves to Code
            </h2>

            <Flex className="justify-between">
              <div>
                <Flex className="relative w-[667px]">
                <img
                  className="w-[95px] h-[95px] mt-[151px] mr-[108px]"
                  src={badge}
                  alt="bagde"
                />
                <img src={about_man} alt="about manp" />
                <img
                  className="absolute top-0 left-0 mt-[386px]"
                  src={about_laptop}
                  alt="about laptop"
                />
              </Flex>
              </div>
              <div className="w-[607px]">
                <h2 className="font-primary font-semibold text-white text-5xl mb-8">About Me</h2>
                <p className="font-primary font-normal text-lg text-white leading-[123%] w-[597px] text-justify">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occae
                  cat cupidatat non proident, sunt in culpa qui officia dese
                  runt mollit anim id est laborum velit esse cillum dolore eu
                  fugiat.
                </p>
              </div>
            </Flex>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
