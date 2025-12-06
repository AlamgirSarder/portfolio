import React from "react";
import Container from "../layouts/Container";
import Flex from "../layouts/Flex";
import { FaLocationArrow } from "react-icons/fa";

import petroil from "../../assets/petroil.png";
import Digital_Agency from "../../assets/Digital_Agency.png";
import innovatee from "../../assets/innovatee.png"; 


const Project = () => {
  return (
    <div className="bg-basecolor pb-28">
      <Container>
        <div>
          <p className="font-primary text-2xl font-semibold text-primary text-center mb-6">
            Latest Works
          </p>
          <h2 className="font-primary font-semibold text-[64px] text-white w-[900px] mx-auto text-center leading-[123%]">
            Explore My Popular Projects
          </h2>

          <Flex className="mt-[150px] items-center justify-between">
            <div
              className="w-[650px] h-[600px] overflow-y-scroll rounded-2xl
                scrollbar scrollbar-thin scrollbar-thumb-[#00C0FF] scrollbar-track-transparent
                bg-[#0f0f1a]/50 backdrop-blur-md border-2 border-primary/30 
                custom-scrollbar"
            >
              <img src={petroil} alt="agency" className="w-full" />
            </div>

            <div>
              <p className="font-primary text-2xl font-semibold text-primary mb-7">Website Design</p>
              <h3 className="font-primary font-bold text-5xl text-white w-[600px] mb-8">A Simple Website Design with Figma</h3>
              <p className="w-[392px] font-primary text-[#B4AFC6] text-lg">
                Sed ut perspiciatis unde omnin natus totam remaperiam eaque
                inventore veritatis...
              </p>

              <button className="w-[50px] h-[50px] rounded-full bg-primary cursor-pointer flex items-center justify-center mt-12 animate-bounce">
                <FaLocationArrow size={25} className="text-white"/>
              </button>
              
            </div>
          </Flex>

            <Flex className="mt-[150px] items-center justify-between">

                     <div>
              <p className="font-primary text-2xl font-semibold text-primary mb-7">Website Design</p>
              <h3 className="font-primary font-bold text-5xl text-white w-[600px] mb-8">A Simple Website Design with Figma</h3>
              <p className="w-[392px] font-primary text-[#B4AFC6] text-lg">
                Sed ut perspiciatis unde omnin natus totam remaperiam eaque
                inventore veritatis...
              </p>

              <button className="w-[50px] h-[50px] rounded-full bg-primary cursor-pointer flex items-center justify-center mt-12 animate-bounce">
                <FaLocationArrow size={25} className="text-white"/>
              </button>
              
            </div>
            <div
              className="w-[650px] h-[600px] overflow-y-scroll rounded-2xl
                scrollbar scrollbar-thin scrollbar-thumb-[#00C0FF] scrollbar-track-transparent
                bg-[#0f0f1a]/50 backdrop-blur-md border-2 border-primary/30 
                custom-scrollbar"
            >
              <img src={Digital_Agency} alt="agency" className="w-full" />
            </div>

       
          </Flex>

            <Flex className="mt-[150px] items-center justify-between">
            <div
              className="w-[650px] h-[600px] overflow-y-scroll rounded-2xl
                scrollbar scrollbar-thin scrollbar-thumb-[#00C0FF] scrollbar-track-transparent
                bg-[#0f0f1a]/50 backdrop-blur-md border-2 border-primary/30 
                custom-scrollbar"
            >
              <img src={innovatee} alt="agency" className="w-full" />
            </div>

            <div>
              <p className="font-primary text-2xl font-semibold text-primary mb-7">Website Design</p>
              <h3 className="font-primary font-bold text-5xl text-white w-[600px] mb-8">A Simple Website Design with Figma</h3>
              <p className="w-[392px] font-primary text-[#B4AFC6] text-lg">
                Sed ut perspiciatis unde omnin natus totam remaperiam eaque
                inventore veritatis...
              </p>

              <button className="w-[50px] h-[50px] rounded-full bg-primary cursor-pointer flex items-center justify-center mt-12 animate-bounce">
                <FaLocationArrow size={25} className="text-white"/>
              </button>
              
            </div>
          </Flex>

        </div>
      </Container>
    </div>
  );
};

export default Project;
