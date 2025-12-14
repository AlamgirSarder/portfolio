import React from "react";
import Container from "../layouts/Container";
import Flex from "../layouts/Flex";

import service01 from "../../assets/service01.png";
import service02 from "../../assets/service02.png";
import service03 from "../../assets/service03.png";
import service04 from "../../assets/service04.png";
import service05 from "../../assets/service05.png";
import service06 from "../../assets/service06.png";

const Service = () => {
  const services_card = [
    {
      image: service01,
      heading: "Website Design",
      description:
        "Modern, user-focused website designs that ensure smooth navigation, clean layouts, and a seamless digital experience.",
    },
    {
      image: service02,
      heading: "Graphic Design",
      description:
        "Brand-aligned graphics that communicate your story visually—logos, banners, social media creatives, and more.",
    },
    {
      image: service03,
      heading: "Digital Marketing",
      description:
        "Result-driven marketing strategies to boost online visibility, attract customers, and grow your business effectively.",
    },
    {
      image: service04,
      heading: "Photography",
      description:
        "High-quality product and brand photography that enhances your visual identity and increases customer engagement.",
    },
    {
      image: service05,
      heading: "Consultancy",
      description:
        "Professional guidance on branding, development, and digital growth to help you make smart business decisions.",
    },
    {
      image: service06,
      heading: "Web Development",
      description:
        "Fast, secure, and scalable web applications built using modern technologies to power your business online.",
    },
  ];

  return (
    <div className="bg-basecolor pb-20 md:pb-[250px]">
      <Container>
        <div>
          <p className="font-primary text-2xl font-semibold text-primary text-center mb-6">
            Services
          </p>
          <h2 className="font-primary font-semibold text-2xl md:text-[64px] text-white md:w-[783px] mx-auto text-center leading-[123%] mb-13 md:mb-[151px]">
            What I Do for My Clients
          </h2>
          <Flex className="justify-between flex-wrap gap-y-[26px]">
            {services_card.map((item, i) => (
              <div
                key={i}
                className="w-full md:w-[423px] bg-[#432D92] rounded-[15px] md:pt-[75px] md:px-[71px] pb-[50px] md:pb-[108px]"
              >
                <div>
                  <div className="mt-[50px] relative">
                    <div className="absolute top-7 left-28 w-[57px] h-[57px] rounded-full bg-[#51359F] z-0"></div>
                    <img
                      src={item.image}
                      alt="service image"
                      className="pl-[84px] relative z-10"
                    />
                  </div>
                  <h2 className="font-primary font-semibold text-2xl text-white text-center mb-8 mt-16">
                    {item.heading}
                  </h2>
                  <p className="font-primary md:font-semibold md:text-base text-sm text-[#B4AFC6] w-full md:w-[282px] text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default Service;
