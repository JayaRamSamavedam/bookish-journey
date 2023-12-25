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
     <div className="home-container delay-100 p-15" data-aos="fade-left">
      
      <SvgComponent props={{}} />
    </div>
    <div className='rounded-lg'>
    <div className='  text-center text-2xl font-serif font-thin shadow-2xl bg-white' >
    Certainly! Let's infuse a bit more uniqueness into the description:

"Broadband Networks: Pioneers of Digital Speedways 🚀
Imagine data as a high-speed traveler, and broadband networks as their sleek express lanes. From the reliable DSL weaving through telephone lines to the robust Fiber Optic blazing trails with light signals, broadband is the heartbeat of fast, reliable connectivity. It's the engine propelling e-learning adventures, virtual business meetings, and streaming extravaganzas.
These networks are the unsung heroes of our digital age, transforming the mundane into the extraordinary. They're not just lanes; they're gateways to education revolutions, business evolution, and entertainment revelations. Yet, in their brilliance, they face challenges - the quest for broader infrastructure, the pursuit of connectivity in remote corners, and the constant vigilance against digital marauders.
In the grand tapestry of the internet, broadband networks are the vibrant threads, weaving a story of speed, connectivity, and endless possibilities. Buckle up as we ride the digital expressways, fueled by the power of broadband!"    
    </div>
    </div>
    </>

  );
};

export default Home;
