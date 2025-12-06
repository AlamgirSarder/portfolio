import React from "react";
import Container from "../layouts/Container";
import Flex from "../layouts/Flex";
import bannerimg from "../../assets/banner_img.png";
import banner01 from "../../assets/banner01.png";
import banner02 from "../../assets/banner02.png";
import banner03 from "../../assets/banner03.png";
import TypingEffect from "../layouts/TypingEffect";
const Banner = () => {
  const banner_service = [
    {
      image: banner01,
      heading: "Creative Work",
      description:
        "Kobita tumi sopno charini hodsye ersest labo met, consectetur addsipi ctetur adipisicing eod tempor",
    },
    {
      image: banner02,
      heading: "Creative Work",
      description:
        "Kobita tumi sopno charini hodsye ersest labo met, consectetur addsipi ctetur adipisicing eod tempor",
    },
    {
      image: banner03,
      heading: "Strong Dedication",
      description:
        "Kobita tumi sopno charini hodsye ersest labo met, consectetur addsipi ctetur adipisicing eod tempor",
    },
  ];

  return (
    <div className="bg-basecolor">
      <Container>
        <div>
          <Flex className="justify-between">
            <div className="pt-[237px] pb-[170px]">
              <h1 className="font-primary font-semibold text-white text-[138px] leading-36">
                Alamgir<span className="block text-[#00C0FF]">Sarder</span>
              </h1>
              <p className="font-medium text-[26px] text-white py-14">
                I'm a {" "}
                <span className="text-[#00C0FF]">
                  <TypingEffect/>
                </span>
              </p>
              <button className="py-5 px-9 rounded-[50px] text-white bg-[#00C0FF] text-xl mb-[93px] cursor-pointer shadow-lg shadow-[#00C0FF]/10">
                Get Connected
              </button>
            </div>
            <div className="flex justify-center items-center">
              <img src={bannerimg} alt="banner image" />
            </div>
          </Flex>
          <div>
            <Flex className="justify-between pb-[190px]">
              {banner_service.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#3A2B71] w-[423px] h-[416px] pt-[45px] pl-12 rounded-[14px]"
                >
                  <img src={item.image} alt="banner_image" />
                  <h1 className="font-primary text-2xl text-white font-semibold mb-[18px] mt-[5px]">
                    {item.heading}
                  </h1>
                  <p className="font-primary text-[#B4AFC6] font-semibold text-base w-[280px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </Flex>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
