import React from "react";
import Container from "../layouts/Container";
import Flex from "../layouts/Flex";
import about_man from "../../assets/about_man.png";
import about_laptop from "../../assets/about_laptop.png";
import badge from "../../assets/badge.png";

const About = () => {
  const my_details = 
    {
      name: "Alamgir Sarder",
      email: "alamgirsarderinfo@gmailcom",
      phone: "+88 01642-252919",
      address: "Dhaka",
      degree: "Dimploma",
      freelancer: "Available",
    }
 

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
                       <h3 className="font-primary font-semibold text-2xl text-white">Name</h3>
                    <h2 className="font-medium font-primary text-xl text-[#B4AFC6] mt-1.5">{my_details?.name}</h2>
                    <h3 className="font-primary font-semibold text-2xl text-white mt-5">Email</h3>
                    <h2 className="font-medium font-primary text-lg text-[#B4AFC6] mt-1.5">{my_details?.email}</h2>
                     <h3 className="font-primary font-semibold text-2xl text-white mt-5">Phone</h3>
                    <h2 className="font-medium font-primary text-xl text-[#B4AFC6] mt-1.5">{my_details?.phone}</h2>
                    </div>
                    <div className="pt-8 pl-10 pb-10 w-[304px] border border-[#00C0FF] rounded-tr-[14px] rounded-br-[14px] border-l-0">
                       <h3 className="font-primary font-semibold text-2xl text-white">Address</h3>
                    <h2 className="font-medium font-primary text-xl text-[#B4AFC6] mt-1.5">{my_details?.address}</h2>
                    <h3 className="font-primary font-semibold text-2xl text-white mt-5">Degree</h3>
                    <h2 className="font-medium font-primary text-xl text-[#B4AFC6] mt-1.5">{my_details?.degree}</h2>
                     <h3 className="font-primary font-semibold text-2xl text-white mt-5">Freelancer</h3>
                    <h2 className="font-medium font-primary text-xl text-[#B4AFC6] mt-1.5">{my_details?.freelancer}</h2>
                    </div>
                  </Flex>
              </div>
            </Flex>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
