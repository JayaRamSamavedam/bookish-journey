import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./home.css"
import SvgComponent from './Svgcomponent';
import AOS from "aos"
import 'aos/dist/aos.css'
const Home = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])

  return (
    <div className="home-container delay-100 " data-aos="fade-left">
      
      <SvgComponent props={{}} />
      
    </div>
  );
};

export default Home;
