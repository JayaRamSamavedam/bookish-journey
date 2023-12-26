import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import SvgComponent from "./Svgcomponent"
import AOS from "aos"
import 'aos/dist/aos.css'
import "./home.css"

const Home = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])

  const slides = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const items = document.querySelectorAll('[data-carousel-item]');
    items.forEach((item, index) => {
      if (index === current) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }, [current]);

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name='description'
          content='Beginner-friendly page for learning React Helmet.'
        />
      </Helmet>

      <div className='flex  flex-wrap place-content-center'><div className='rounded-xl h-96 w-screen'>
      <div id='default-carousel' className='relative w-full overflow-hidden' data-carousel='slide'>
        {slides.map((src, index) => (
          <div
            key={index}
            className={`${
              index === current ? 'duration-700 ease-in-out block' : 'hidden'
            }`}
            data-carousel-item
          >
            <img
              src={src}
              className='block w-screen h-96 object-cover'
              alt={`slide-${index}`}
            />
          </div>
        ))}

        {/* Buttons for carousel navigation */}
        <button
          type='button'
          className='absolute top-1/2 start-0 z-30 transform -translate-y-1/2 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-prev
          onClick={previousSlide}
        >
          <BsFillArrowLeftCircleFill className='w-8 h-8 text-white' />
        </button>
        <button
          type='button'
          className='absolute top-1/2 end-0 z-30 transform -translate-y-1/2 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-next
          onClick={nextSlide}
        >
          <BsFillArrowRightCircleFill className='w-8 h-8 text-white' />
        </button>
      </div>
      </div>
      </div>
      <div className=' flex-wrap grid grid-cols-2 rounded-lg p-10'>
        <div className='description text-center font-serif text-xl rounded-lg bg-white text-slate-600'>
        BroadBand Networks is a dynamic and innovative club dedicated to exploring and advancing the world of high-speed internet connectivity. Established in 2022, the club has made significant strides in promoting awareness about broadband technologies and their impact on society. Until now, the club has organized seminars, workshops, and networking events, bringing together professionals, researchers, and enthusiasts in the field.

Currently, BroadBand Networks is actively involved in researching emerging technologies such as 5G, fiber optics, and satellite internet. The club serves as a hub for members to exchange ideas, stay updated on industry trends, and participate in collaborative projects. Ongoing initiatives include hackathons focused on optimizing broadband infrastructure, panel discussions with industry experts, and field trips to technology hubs.

Looking ahead, BroadBand Networks plans to contribute to the community by launching outreach programs to educate underserved populations about the importance of broadband access. The club aims to foster partnerships with local businesses and government agencies to support the development of high-speed internet infrastructure in remote areas. Additionally, members are working on a community-driven project to implement low-cost broadband solutions, ensuring that technology is accessible to everyone.

In summary, BroadBand Networks has a rich history of promoting knowledge and collaboration in the field of high-speed internet connectivity. With a focus on cutting-edge technologies, community outreach, and inclusive initiatives, the club is poised to make significant contributions to the ever-evolving landscape of broadband networks.
        </div>
        <div className="home-container delay-100 p-15" data-aos="fade-left">
      
      <SvgComponent props={{}} />
    </div>
      </div>

    </>
  );
};

export default Home;
