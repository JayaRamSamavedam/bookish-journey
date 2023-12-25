import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import "./home.css"
import SvgComponent from './Svgcomponent';
import AOS from "aos"
import 'aos/dist/aos.css'
// import { Helmet } from 'react-helmet-async';
const Home = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])

  return (
    <>   

    <Helmet>
<title>Home</title>
{/* <link rel="apple-touch-icon" href="" /> */}
<meta name='description' content='Beginner friendly page for learning React Helmet.' />
</Helmet>
     <div className="home-container delay-100 " data-aos="fade-left">
      
      <SvgComponent props={{}} />
      
    </div>
    </>

  );
};

export default Home;
