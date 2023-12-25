import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Request } from '../helpers/axios_helper';
import JSONPretty from 'react-json-pretty';
import JoditEditor from 'jodit-react';
import EditEvent from "./EditEvent"

const ViewEvents = () => {
  const [events, setEvents] = useState([]);
  const [id,setId]=useState(null);
  useEffect(() => {
    // Fetch events when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await Request("GET",'/event/get');
      const { events } = response.data;
      setEvents(events);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <div>
      <h2>All Events</h2>
      
      {events.map((event) => (
        <div key={event._id}>
          <h3>{event.Eventname}</h3>
          <p>Event ID: {event.Eventid}</p>
          <p>Event Date: {event.EventStartDate}</p>

          <p>Event Registered users: {event.RegisteredUsers}</p>
          <p>{}</p>
          
          {event.EventImage && (
            <div>
              <p>Image:</p>
              <img src={event.EventImage} alt="Event" style={{ maxWidth: '100px', maxHeight: '100px' }} />
            </div>
          )}
          {/* Add more details as needed */}

          <button onClick={() => {if(id === null) setId(event.Eventid); else setId(null)}}>Update</button>
          
        
        </div>
        
      )
      )

      }

{id && <EditEvent id={id} />}
    </div>
  );
};

export default ViewEvents;
