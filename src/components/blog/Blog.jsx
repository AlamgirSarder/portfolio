import React from 'react'
import Container from '../layouts/Container'
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import Flex from '../layouts/Flex'

const Blog = () => {

    const blog_card = [
        {
            img: blog01,
            name:"Branding",
            date: "August 27, 2022",
            description: "When the musics over turn off the light now"
        },
         {
            img: blog02,
            name:"Design",
            date: "August 20, 2022",
            description: "How good designers can collaborate better"
        },
          { 
            img: blog03,
            name:"Cyber",
            date: "August 12, 2022",
            description: "How to be appreciated for your hard work"
        },
    ]

  return (
    <div className='bg-basecolor'>
        <Container>
            <div className='pb-[156px]'>
                  <p className="font-primary text-2xl font-semibold text-primary text-center mb-6">
              Blog
            </p>
            <h2 className="font-primary font-semibold text-[64px] text-white w-[783px] mx-auto text-center leading-[123%] mb-24">
              Latest Blog Posts
            </h2>

            <Flex className='justify-between'>

                {
                    blog_card.map((item,i)=>(
                        <div key={i}>
                            <div className='w-[423px] h-[258px] rounded-tl-2xl rounded-tr-2xl'>
                                <img src={item.img} alt="blog image" className='w-full h-full rounded-tl-2xl rounded-tr-2xl' />
                            </div>
                            <div className='w-[423px] h-[200px] bg-[#432D92] rounded-bl-2xl rounded-br-2xl pt-[22px] pl-11'>
                                <h3 className='font-primary font-semibold text-xl text-[#B4AFC6]'><span className='font-primary font-semibold text-xl text-primary mr-2'>{item.name}</span>{item.date}</h3>
                            <p className='font-primary font-semibold text-2xl text-white leading-[123%] w-[277px] mt-3.5'>{item.description}</p>

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

export default Blog