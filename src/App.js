import NavbarDefault from "./Pages/Nav"
import './App.css';
import Home from "./Pages/Home";
import { Link, Routes, Route, NavLink } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import  StarsCanvas  from "./Pages/canvas/Stars";
// import Tech from "./Pages/Tech"
// // import {Tech,StarsCanvas } from "./Pages";
// import EarthCanvas from "./Pages/Earth";
import Footer from "./Pages/Footer";
import Info from "./Pages/Info";
import Team from "./Pages/Team";
import Card from "./Pages/Card";

function App() {
  return (
    <div>
     
    <NavbarDefault/>
    {/* <StarsCanvas/>
    <Tech/> 
    <EarthCanvas/> */}

      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route path="/home"  element={<Home />} />
          <Route path="/info" element={<Info/>}/>
          <Route path="/team" element={<Card/>}/>
          {/* <Route
                    path="*"
                    element={<PageNotFound />}
                /> */}
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>

    <Footer/>
    </div>
  );
}

export default App;
