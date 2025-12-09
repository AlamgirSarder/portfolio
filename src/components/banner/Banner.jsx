import React from "react";
import Container from "../layouts/Container";
import Flex from "../layouts/Flex";
import bannerimg02 from "../../assets/ax_bg.png";
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
      
          <Flex className="justify-between items-center flex-col md:flex-row pt-20 md:pt-40 pb-10 md:pb-24">
     
            <div className="text-center md:text-left">
              <h1 className="font-primary font-semibold text-white text-[42px] sm:text-[60px] md:text-[120px] lg:text-[138px] leading-[50px] md:leading-[130px]">
                Alamgir <span className="block text-primary">Sarder</span>
              </h1>

              <p className="w-[200px] md:w-auto text-left md:font-medium text-lg md:text-[26px] text-white py-5 md:py-10">
                I'm a {" "}
                <span className="text-primary">
                  <TypingEffect />
                </span>
              </p>

              <button className="py-3 md:py-5 px-6 md:px-9 rounded-[50px] text-white bg-primary text-lg md:text-xl cursor-pointer shadow-lg shadow-primary/10">
                Get Connected
              </button>
            </div>

            <div className="mt-10 md:mt-0 flex justify-center items-center 
                w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] 
                md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[550px] 
                bg-primary rounded-full overflow-hidden"
            >
              <img src={bannerimg02} alt="banner" className="w-full h-full object-cover" />
            </div>
          </Flex>

        
          <div className="pb-20 md:pb-[190px]">
            <div
              className="
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
              gap-6 md:gap-10 place-items-center
            "
            >
              {banner_service.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#3A2B71] w-full max-w-[420px] h-auto p-8 rounded-[14px]"
                >
                  <img src={item.image} alt="service" className="w-16 h-16" />

                  <h1 className="font-primary text-2xl text-white font-semibold my-4">
                    {item.heading}
                  </h1>

                  <p className="font-primary text-[#B4AFC6] font-medium text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Banner;
