import React from 'react'
import github from "./github-icon.svg"
import insta from "./black-instagram-icon.svg"
import linkdin from  "./linkedin-app-icon.svg"
import { useState ,useEffect } from 'react'
import { Helmet } from "react-helmet";
import { Request } from '../helpers/axios_helper'
const Card = () => {
   

    const [loading, setLoading] = useState(true);
    const [teamMembers, setTeamMembers] = useState([]);
    useEffect(() => {
        
        fetchData();
      }, []);
      const fetchData = async () => {
        try {
          const response = await Request('GET', '/get');
          console.log(response)
          const { team } = response.data;
          setTeamMembers(team);
          setLoading(false); 
        } catch (error) {
          console.error('Error fetching team members:', error);
          setLoading(false);
        }
      };
  return (
    <div>
      <Helmet>
        <title>
          Team
        </title>
      </Helmet>
        {loading ? (
        <div class='flex space-x-2 justify-center items-center h-screen dark:invert'>
        <span class='sr-only'>Loading...</span>
         <div class='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
       <div class='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
       <div class='h-8 w-8 bg-black rounded-full animate-bounce'></div>
   </div>
      ) : (
      <div class="flex flex-wrap justify-center mt-10">
      {teamMembers.map((member) => (
      <div class="p-4 max-w-sm ">
        <div className='text-center font-serif text-lg font-semibold from-neutral-950 hover:underline'>{member.name}</div>
    <div class="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-full w-48 h-48 relative group">
            <div
                class="rounded-full w-48 h-48 z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
            >
                <div>
                    <div
                        class="transform-gpu   p-4 space-y-3 justify-center group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-8 transform transition duration-300 ease-in-out"
                    >
                        {/* <div class="font-bold">Jessie Watsica</div> */}

                        <div class="grid grid-cols-3 gap-3 px-15 py-12">
                            <div><a href={member.github}><img src={github} height={50} width={50}/></a></div>
                            <div><a href={member.instagram} ><img src={insta} height={50} width={50}/></a></div>
                            <div><a href={member.linkdin}> <img src={linkdin} height={50} width={50}/></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <img
            src={member.image}
            alt={member.name}
                class="object-cover rounded-full  border-dashed border-2 p-2 border-indigo-600 w-48 h-48 aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
            />
            
        </div>

        <div className='text-center font-serif text-lg font-semibold from-neutral-950 hover:underline'>{member.role}</div>
        </div>

        ))}
      
      </div>
      )}

    </div>
  )
}

export default Card
