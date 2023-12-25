import React from 'react'
import Poster from "./poster.jpg"
import { Link } from 'react-router-dom'
import { Request } from '../helpers/axios_helper'
import github from "./github-icon.svg"
import insta from "./black-instagram-icon.svg"
import linkdin from  "./linkedin-app-icon.svg"
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { Helmet } from "react-helmet";
const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    
    fetchDatas();
  }, []);

  const fetchDatas = async () => {
    try {
      const response = await Request("GET",'/event/get');
      const { events } = response.data;
      setEvents(events);
      setLoading(false); 
    } catch (error) {
      setLoading(false);
      console.error('Error fetching events:', error);
    }
  };


    const navigate=useNavigate("");

    // ---------------------- for the getting into specific id element--------------
    const handleClick = (id) => {
      navigate('/register', { state: { Eventid: id } });
    }

    // const handleDetail = (id)=>{
    //   navigate("/content",{state :{Eventid:id}});
    // }
    // onClick={() => handleClick(item.id)}
  return (
    <div>
      <Helmet>
        <title>Events</title>
      </Helmet>
       {loading ? (
        <div class='flex space-x-2 justify-center items-center h-screen dark:invert'>
        <span class='sr-only'>Loading...</span>
         <div class='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
       <div class='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
       <div class='h-8 w-8 bg-black rounded-full animate-bounce'></div>
   </div>
      ) : (
       <div class="flex flex-wrap justify-center mt-10  ">
        
 {events.map((event) => (

   <div class="p-4 max-w-sm ">
   
<div class="h-fit max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src={event.EventImage} alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{event.Eventname}</h5>
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{event.EventDate}<br></br><strong>{event.EventTime}</strong></h5>
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{event.Eventvenue}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse py-3">
            <div className='px-3'><a href={event.github}><img src={github} height={50} width={50}/></a></div>
            <div  className='px-3'><a href={event.instagram} ><img src={insta} height={50} width={50}/></a></div>
            <div className='px-3' ><a href={event.linkdin}> <img src={linkdin} height={50} width={50}/></a></div>
            </div>
            {/* <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span> */}
        </div>
        <div class="flex items-center justify-between">
            <span class="text-lg font-bold text-gray-900 dark:text-white">{event.RegisteredUsers}</span>
            {!event.EventisActive ? (
        <button
          className='text-white bg-gray-400 cursor-not-allowed hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-500 dark:focus:ring-gray-800'
          disabled
        >
          <span role="img" aria-label="Lock" className="mr-2">
            🔒
          </span>
          Register
        </button>
      ) : (
        <>
          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={() => handleClick(event.Eventid)} >
            Register
          </button>
          {/* <button
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={() => navigate(`content/${event.Eventid}`)}
          >
            GetMore
            </button> */}
           <Link to={`/content?id=${event.Eventid}`}>Get More</Link>
        </>
      )}
            {/* <Link href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</Link> */}
        </div>
    </div>
</div>

</div>

 ))}


       </div>
        )}
    </div>
  )
}

export default Events
