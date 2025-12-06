import React from "react";
import Container from "../layouts/Container";
import Flex from "../layouts/Flex";
import Progressbar from "../layouts/Progressbar";

import about_man from "../../assets/about_man.png";
import about_laptop from "../../assets/about_laptop.png";
import badge from "../../assets/badge.png";
import { FaReact,FaHtml5,FaCss3Alt,FaPhp,FaVuejs } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

const About = () => {
  const my_details = {
    name: "Alamgir Sarder",
    email: "alamgirsarderinfo@gmailcom",
    phone: "+88 01642-252919",
    address: "Dhaka",
    degree: "Diploma",
    freelancer: "Available",
  };
  const about_card = [
    {
      digit: "20",
      description: "Digital Products",
    },
    {
      digit: "280",
      description: "Direct Clients",
    },
    {
      digit: "3K",
      description: "Total Projects",
    },
    {
      digit: "9+",
      description: "Awards Win",
    },
  ];

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
                    className="w-[95px] h-[95px] mt-[151px] mr-[108px] animate-bounce"
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
                <h2 className="font-primary font-semibold text-white text-5xl mb-8">
                  About Me
                </h2>
                <p className="font-primary font-normal text-lg text-white leading-[123%] w-[597px] text-justify">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occae
                  cat cupidatat non proident, sunt in culpa qui officia dese
                  runt mollit anim id est laborum velit esse cillum dolore eu
                  fugiat.
                </p>

                <Flex className="mt-14">
                  <div className="pt-8 pl-10 pb-10 w-[304px] border border-[#00C0FF] rounded-tl-[14px] rounded-bl-[14px]">
                    <h3 className="font-primary font-semibold text-2xl text-white">
                      Name
                    </h3>
                    <h2 className="font-medium font-primary text-xl text-[#B4AFC6] mt-1.5">
                      {my_details?.name}
                    </h2>
                    <h3 className="font-primary font-semibold text-2xl text-white mt-5">
                      Email
                    </h3>
                    <h2 className="font-medium font-primary text-lg text-[#B4AFC6] mt-1.5">
                      {my_details?.email}
                    </h2>
                    <h3 className="font-primary font-semibold text-2xl text-white mt-5">
                      Phone
                    </h3>
                    <h2 className="font-medium font-primary text-xl text-[#B4AFC6] mt-1.5">
                      {my_details?.phone}
                    </h2>
                  </div>
                  <div className="pt-8 pl-10 pb-10 w-[304px] border border-[#00C0FF] rounded-tr-[14px] rounded-br-[14px] border-l-0">
                    <h3 className="font-primary font-semibold text-2xl text-white">
                      Address
                    </h3>
                    <h2 className="font-medium font-primary text-xl text-[#B4AFC6] mt-1.5">
                      {my_details?.address}
                    </h2>
                    <h3 className="font-primary font-semibold text-2xl text-white mt-5">
                      Degree
                    </h3>
                    <h2 className="font-medium font-primary text-xl text-[#B4AFC6] mt-1.5">
                      {my_details?.degree}
                    </h2>
                    <h3 className="font-primary font-semibold text-2xl text-white mt-5">
                      Freelancer
                    </h3>
                    <h2 className="font-medium font-primary text-xl text-[#B4AFC6] mt-1.5">
                      {my_details?.freelancer}
                    </h2>
                  </div>
                </Flex>
                <button className="py-5 px-9 rounded-[50px] text-white bg-[#00C0FF] text-xl mt-[77px] cursor-pointer">
                  Download CV
                </button>
              </div>
            </Flex>

            <Flex className="mt-[357px] mb-[220px] justify-between">
              {about_card.map((item, i) => (
                <div
                  key={i}
                  className="py-20 pl-11 bg-[#432D92] pr-16 rounded-2xl"
                >
                  <Flex>
                    <h2 className="font-primary font-bold text-5xl text-[#00C0FF] mr-8">
                      {item.digit}
                    </h2>
                    <p className="w-[90px] font-primary font-bold text-xl text-white">
                      {item.description}
                    </p>
                  </Flex>
                </div>
              ))}
            </Flex>

            <p className="font-primary text-2xl font-semibold text-[#00C0FF] text-center mb-5">
              Skills
            </p>
            <h2 className="font-primary font-semibold text-[64px] text-white w-[1053px] mx-auto text-center leading-[123%] mb-[282px]">
              I Work Hard to Improve My Skills Regularly
            </h2>
            <Flex className="justify-between">
              <div>
                <div>
                   <Flex className="items-center gap-x-4">
                    <h2 className="font-primary font-semibold text-xl text-white">HTML</h2>
                  <FaHtml5 size={40} className="text-white"/>
                  </Flex>
                  <Progressbar value={95} />
                </div>
                <div>
                  <Flex className="items-center gap-x-4">
                    <h2 className="font-primary font-semibold text-xl text-white">CSS</h2>
                  <FaCss3Alt size={40} className="text-white"/>
                  </Flex>
                  <Progressbar value={75} />
                </div>
                <div>
                  <Flex className="items-center gap-x-4">
                    <h2 className="font-primary font-semibold text-xl text-white">JavaScript</h2>
                  <RiJavascriptFill size={40} className="text-white"/>
                  </Flex>
                  <Progressbar value={90} />
                </div>
              </div>

              <div>
                <div>
                  <Flex className="items-center gap-x-4">
                    <h2 className="font-primary font-semibold text-xl text-white">React</h2>
                  <FaReact size={40} className="text-white"/>
                  </Flex>
                  <Progressbar value={70} />
                </div>
                <div>
                  <Flex className="items-center gap-x-4">
                    <h2 className="font-primary font-semibold text-xl text-white">Vue</h2>
                  <FaVuejs size={40} className="text-white"/>
                  </Flex>
                  <Progressbar value={80} />
                </div>
                <div>
                 <Flex className="items-center gap-x-4">
                    <h2 className="font-primary font-semibold text-xl text-white">PHP</h2>
                  <FaPhp size={40} className="text-white"/>
                  </Flex>
                  <Progressbar value={90} />
                </div>
              </div>
            </Flex>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
