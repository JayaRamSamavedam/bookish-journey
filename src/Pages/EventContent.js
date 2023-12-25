import React, { useEffect, useState } from 'react';
import Poster from "./poster.jpg";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Request } from '../helpers/axios_helper';
const EventContent = () => {
  const [queryParameters] = useSearchParams();
  const postData = {};
  postData.Eventid = Number(queryParameters.get("id"));
  console.log(postData);
  const [event, setEvent] = useState(null);

  // ---------------------- for getting into a specific id element--------------
  useEffect(() => {
    fetchDatap();
  }, [postData.Eventid]); // Include postData.Eventid in the dependency array

  const fetchDatap = async () => {
    if (postData.Eventid) {
      console.log("i am invoked");
      const res = await Request("POST", "/event/getid", { Eventid: postData.Eventid });
      if (res.status === 200) {
        setEvent(res.data.data);
        console.log(res.data.data);
      }
    }
  };
  
  return (
    <div className='flex flex-wrap justify-center mt-10'>
      <div className='abcd flex-initial'>
        <div className='text-center flex-initial font-serif font-extrabold text-2xl'>
          {event && event.Eventname}
        </div>
        <br></br>
        <div className='flex-initial font-serif font-thin text-lg'>
          <div className="content-output p-44 bg-pink">
            <div dangerouslySetInnerHTML={{ __html: event && event.joditcontent }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventContent;
