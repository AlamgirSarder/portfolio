import React from "react";
import Container from "../layouts/Container";
import Flex from "../layouts/Flex";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import InputFeild from "../layouts/InputFeild";
import Textarea from "../layouts/Textarea";


const Contact = () => {

    const handle = (e)=>{
        e.preventDefault()
        console.log("ok collk");
        
        
    }
  return (
    <div className="bg-basecolor pb-5">
      <Container>
        <div>
          <p className="font-primary text-2xl font-semibold text-primary text-center mb-6">
            Contact
          </p>
          <h2 className="font-primary font-semibold text-[64px] text-white w-[783px] mx-auto text-center leading-[123%] mb-[151px]">
            I Want to Hear from You
          </h2>
 
          <Flex className="justify-between items-center">
            <div className="w-[400px]">
              <Flex className="items-center gap-x-[25px] mb-[60px]">
                <div className="w-[87px] h-[87px] rounded-full bg-primary flex items-center justify-center">
                  <FaLocationDot size={30} className="text-white" />
                </div>
                <div>
                  <h2 className="font-primary font-semibold text-4xl text-white">
                    Address
                  </h2>
                  <p className="font-primary font-semibold text-xl text-[#B4AFC6]">
                    20, Somewhere in world
                  </p>
                </div>
              </Flex>
              <Flex className="items-center gap-x-[25px] mb-[60px]">
                <div className="w-[87px] h-[87px] rounded-full bg-primary flex items-center justify-center">
                  <MdEmail size={30} className="text-white" />
                </div>
                <div>
                  <h2 className="font-primary font-semibold text-4xl text-white">
                    Email
                  </h2>
                  <p className="font-primary font-semibold text-xl text-[#B4AFC6]">
                    alamgirsarderinfo@gmail.com
                  </p>
                </div>
              </Flex>
              <Flex className="items-center gap-x-[25px]">
                <div className="w-[87px] h-[87px] rounded-full bg-primary flex items-center justify-center">
                  <FaPhone size={30} className="text-white" />
                </div>
                <div>
                  <h2 className="font-primary font-semibold text-4xl text-white">
                    Phone
                  </h2>
                  <p className="font-primary font-semibold text-xl text-[#B4AFC6]">
                    +880 1642-252919
                  </p>
                </div>
              </Flex>
            </div>
            <div className="w-[650px]">
              <form>
                <Flex className="flex-wrap gap-6 justify-between">
                  <InputFeild label="Your Name" />
                  <InputFeild label="Your Email" />
                  <InputFeild label="Your Phone" />
                  <InputFeild label="Your Subject" />
                </Flex>
                <div>
                  <Textarea />
                </div>
                <button type="submit" onClick={handle} className="py-5 px-9 rounded-[50px] text-white bg-primary text-xl cursor-pointer mt-4">
                  Submit Now
                </button>
              </form>
            </div>
          </Flex>
          <p className="font-primary text-base text-[#B4AFC6] text-center mt-12">&copy;2025, <span className="text-white">Alamgir Sarder</span> All Rights Reserved</p>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
