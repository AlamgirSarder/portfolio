import React from "react";
import Container from "../layouts/Container";
import Flex from "../layouts/Flex";
import Progressbar from "../layouts/Progressbar";

// import about_man from "../../assets/about_man.png";
// import about_man from "../../assets/ax.png";
// import about_man from "../../assets/abbout.png";
import about_man from "../../assets/aaabbb.png";

import about_laptop from "../../assets/about_laptop.png";
import badge from "../../assets/badge.png";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs,FaFigma } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { MdDownload } from "react-icons/md";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const About = () => {
  const my_details = {
    name: "Alamgir Sarder",
    email: "alamgirsarderinfo@gmail.com",
    phone: "+88 01642-252919",
    address: "Dhaka",
    degree: "B.Sc in Computer Science & Engineering (C.S.E)",
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
      digit: "100",
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
        <div className="pb-20 md:pb-[244px]">
          <div>
            <p className="font-primary text-2xl font-semibold text-primary text-center mb-5">
              About Me
            </p>
            <h2 className="font-primary font-semibold text-2xl md:text-[64px] text-white md:w-[783px] mx-auto text-center leading-[123%] mb-13 md:mb-[131px]">
              A Passionate Developer Who Loves to Code
            </h2>

            <Flex className="justify-between flex-col md:flex-row">
              <div>
                <Flex className="relative md:w-[667px] ">
                  <img
                    className="w-[95px] h-[95px] mt-[151px] mr-[108px] animate-bounce hidden md:block"
                    src={badge}
                    alt="bagde"
                  />
                 <div className="flex items-center justify-center w-[350px] h-[350px] md:w-[462px] md:h-[564px] rounded-2xl mx-auto ">
                   <img src={about_man} alt="about manp" className="w-ful h-full rounded-2xl"/>
                 </div>
                  <img
                    className="absolute top-0 left-0 mt-[386px] hidden md:block"
                    src={about_laptop}
                    alt="about laptop"
                    
                  />
                </Flex>
              </div>
              <div className="md:w-[607px] text-center md:text-left">
                <h2 className="font-primary font-semibold text-white text-2xl md:text-5xl mb-8 mt-8 md:mt-0 text-center md:text-left">
                  About Me
                </h2>
                <p className="font-primary font-normal text-lg text-white leading-[123%] md:w-[597px] md:text-justify text-center">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occae
                  cat cupidatat non proident, sunt in culpa qui officia dese
                  runt mollit anim id est laborum velit esse cillum dolore eu
                  fugiat.
                </p>

                <Flex className="mt-14 flex-col md:flex-row gap-5 md:gap-0 text-left">
                  <div className="pt-8 pl-10 pb-10 md:w-[304px] border border-primary md:rounded-tl-[14px] md:rounded-bl-[14px] rounded-2xl md:rounded-tr-none md:rounded-br-none">
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
                  <div className="pt-8 pl-10 pb-10 md:w-[304px] border border-primary md:rounded-tr-[14px] md:rounded-br-[14px] rounded-2xl md:rounded-tl-none md:rounded-bl-none md:border-l-0">
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
                <button className="py-5 px-9 rounded-[50px] text-white bg-primary text-xl mt-8 md:mt-[77px] cursor-pointer shadow-lg shadow-primary/10">
                  Download CV 
                  <MdDownload size={30} className="inline-block ml-4 animate-bounce"/>
                </button>
              </div>
            </Flex>

            <Flex className="mt-20 md:mt-[357px] mb-20 md:mb-[220px] md:justify-between flex-wrap justify-between gap-y-10 md:gap-y-0 ">
              {about_card.map((item, i) => (
                <div
                  key={i}
                  className="py-10 md:py-20 md:pl-11 bg-[#432D92] md:pr-16 rounded-2xl w-40 h-40 md:w-auto md:h-auto"
                >
                  <Flex className="flex-col md:flex-row text-center md:text-left">
                    <h2 className="font-primary font-bold text-5xl text-primary md:mr-8">
                      {item.digit}
                    </h2>
                    <p className="w-20 mx-auto md:w-[90px] font-primary font-bold text-xl text-white">
                      {item.description}
                    </p>
                  </Flex>
                </div>
              ))}
            </Flex>

            <p className="font-primary text-2xl font-semibold text-primary text-center mb-5">
              Skills
            </p>
            <h2 className="font-primary font-semibold text-2xl md:text-[64px] text-white md:w-[1053px] mx-auto text-center leading-[123%] mb-20 md:mb-[282px]">
              I Work Hard to Improve My Skills Regularly
            </h2>
            <Flex className="justify-between flex-col md:flex-row">
              <div>
                <div>
                  <Flex className="items-center gap-x-4">
                    <h2 className="font-primary font-semibold text-xl text-white">
                      HTML
                    </h2>
                    <FaHtml5 size={40} className="text-white" />
                  </Flex>
                  <Progressbar value={90} />
                </div>
                <div>
                  <Flex className="items-center gap-x-4">
                    <h2 className="font-primary font-semibold text-xl text-white">
                      CSS
                    </h2>
                    <FaCss3Alt size={40} className="text-white" />
                  </Flex>
                  <Progressbar value={75} />
                </div>
                <div>
                  <Flex className="items-center gap-x-4">
                    <h2 className="font-primary font-semibold text-xl text-white">
                      JavaScript
                    </h2>
                    <RiJavascriptFill size={40} className="text-white" />
                  </Flex>
                  <Progressbar value={90} />
                </div>
                <div>
                  <Flex className="items-center gap-x-4">
                    <h2 className="font-primary font-semibold text-xl text-white">
                      Figma
                    </h2>
                    <FaFigma size={40} className="text-white" />
                  </Flex>
                  <Progressbar value={65} />
                </div>
              </div>

              <div>
                <div>
                  <Flex className="items-center gap-x-4">
                    <h2 className="font-primary font-semibold text-xl text-white">
                      React
                    </h2>
                    <FaReact size={40} className="text-white" />
                  </Flex>
                  <Progressbar value={70} />
                </div>
                <div>
                  <Flex className="items-center gap-x-4">
                    <h2 className="font-primary font-semibold text-xl text-white">
                      Express
                    </h2>
                    <SiExpress size={40} className="text-white" />
                  </Flex>
                  <Progressbar value={50} />
                </div>
                <div>
                  <Flex className="items-center gap-x-4">
                    <h2 className="font-primary font-semibold text-xl text-white">
                      Nodejs
                    </h2>
                    <FaNodeJs size={40} className="text-white" />
                  </Flex>
                  <Progressbar value={50} />
                </div>
                  <div>
                  <Flex className="items-center gap-x-4">
                    <h2 className="font-primary font-semibold text-xl text-white">
                      MongoDB
                    </h2>
                    <DiMongodb size={40} className="text-white" />
                  </Flex>
                  <Progressbar value={50} />
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
