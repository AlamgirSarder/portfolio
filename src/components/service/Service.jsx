import React from 'react'
import Container from '../layouts/Container'
import Flex from '../layouts/Flex'

import service01 from '../../assets/service01.png'
import service02 from '../../assets/service02.png'
import service03 from '../../assets/service03.png'
import service04 from '../../assets/service04.png'
import service05 from '../../assets/service05.png'
import service06 from '../../assets/service06.png'

const Service = () => {
const services_card = [
{
    image:service01,
    heading:"Website Design",
    description: "Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor"

},
{
    image:service02,
    heading:"Graphic Design",
    description: "Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor"

},
{
    image:service03,
    heading:"Digital Marketing",
    description: "Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor"

},
{
    image:service04,
    heading:"Photography",
    description: "Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor"

},
{
    image:service05,
    heading:"Consultancy",
    description: "Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor"

},
{
    image:service06,
    heading:"Web Development",
    description: "Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor"

},

]

  return (
    <div className='bg-basecolor pb-[250px]'>
       <Container>
        <div>
              <p className="font-primary text-2xl font-semibold text-[#00C0FF] text-center mb-6">
              Services
            </p>
            <h2 className="font-primary font-semibold text-[64px] text-white w-[783px] mx-auto text-center leading-[123%] mb-[151px]">
              What I Do for My Clients
            </h2>
    <Flex className='justify-between flex-wrap gap-y-[26px]'>
        {
            services_card.map((item,i)=>(
                <div key={i} className='w-[423px] bg-[#432D92] rounded-[15px] pt-[75px] px-[71px] pb-[108px]'>
                    <div>
                        <div className='relative'>
                              <div className='absolute top-7 left-28 w-[57px] h-[57px] rounded-full bg-[#51359F] z-0'></div>
                            <img src={item.image} alt="service image" className='pl-[84px] relative z-10' />
                          
                        </div>
                        <h2 className='font-primary font-semibold text-2xl text-white text-center mb-8 mt-16'>{item.heading}</h2>
                        <p className='font-primary font-semibold text-base text-[#B4AFC6] w-[282px] text-center'>{item.description}</p>
                    </div>

                </div>
            ))

        }
    </Flex>

        </div>
       </Container>

    </div>
  )
}

export default Service