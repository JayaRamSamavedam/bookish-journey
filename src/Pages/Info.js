import React from 'react'
import { useEffect } from 'react';
import  StarsCanvas  from "./canvas/Stars";
import Tech from "./Tech"
import { styles } from "../styles";
import { motion } from 'framer-motion';
import { slideIn } from "../utils/motion";
import EarthCanvas from "./Earth";
import AOS from "aos"
import 'aos/dist/aos.css'
import { Helmet } from "react-helmet";
import Newsletter from './Newsletter';
import { useMediaQuery } from '@react-hook/media-query';
const Info = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <>
    <Helmet>
      <title>Info</title>
    </Helmet>
    <div>

        <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='h-auto md:container  sm:h-[350px] sm:w-full  md:h-[450px] lg:h-[650]'
      >
          <EarthCanvas/>
        </motion.div>
        
        <div className='font-serif lg:container text-center text-4xl delay-100' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" >
            broadband
          </div>
          <div className='sm:container'><Tech/></div>
          {/* <Newsletter/> */}
      
    </div>
</>
  )
}

export default Info
