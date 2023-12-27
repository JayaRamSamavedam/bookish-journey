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
import Imageupload from "./Pages/Imageupload";
import CreateUser from "./Pages/CreateUser";
import Viewusers from "./Pages/Viewusers";
import Events from "./Pages/Events";
import Posts from "./Pages/Joditedit";
import EventContent from "./Pages/EventContent";
import EventForm from "./Pages/CreateEvent";
import ViewEvents from "./Pages/ViewEvents";
import Register from "./Pages/Register";

function App() {
  return (
    <div>
     
    <NavbarDefault/>
    {/* <StarsCanvas/>
    <Tech/> 
    <EarthCanvas/> */}

      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route path="/"  element={<Home />} />
          <Route path="/home"  element={<Home />} />
          <Route path="/info" element={<Info/>}/>
          <Route path="/team" element={<Card/>}/>
          {/* <Route path="/image" element={<Imageupload/>}/>
          <Route path="/create" element={<CreateUser/>}/>
          <Route path="/view" element={<Viewusers/>}/> */}
          <Route path="/event" element={<Events/>}/>
          {/* <Route path="/editor" element={<Posts/>}/> */}
          <Route path="/content" element={<EventContent/>}/>
          {/* <Route path="/createevent" element={<EventForm/>}/>
          <Route path="/viewevent" element={<ViewEvents/>}/> */}
          <Route path="/register" element={<Register/>}/>
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
