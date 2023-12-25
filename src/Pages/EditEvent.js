import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import JoditEditor from 'jodit-react';
import { Request } from '../helpers/axios_helper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditEvent = (props) => {
    const [loading, setLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);
  const [eventData, setEventData] = useState({
    Eventid: 0,
    Eventname: '',
    EventSpeakers: '',
    EventDate: '',
    EventTime: '',
    EventImage: '',
    EventisActive: false,
    twitter: '',
    instagram: '',
    linkdin: '',
    Eventvenue: '',
    joditcontent: '',
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setEventData((prevData) => ({
          ...prevData,
          EventImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    },
  });

  const handleEditorChange = (content) => {
    setEventData((prevData) => ({
      ...prevData,
      joditcontent: content,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Request('POST', '/event/update', eventData);
      setEventData({
        Eventid: props.id,
        Eventname: '',
        EventSpeakers: '',
        EventDate: '',
        EventTime: '',
        EventImage: '',
        EventisActive: false,
        twitter: '',
        instagram: '',
        linkdin: '',
        Eventvenue: '',
        joditcontent: '',
      });
      
      toast.success('Event created successfully');
    } catch (error) {
        
      toast.error('Failed to create event. Please try again.');
    }
  };

  useEffect(() => {
    if (props.id) {
      fetchData();
    }
  }, [props.id]);

  const fetchData = async () => {
    try {
      const details = await Request('POST', '/event/getid', { Eventid: Number(props.id) });
      console.log(details.data.data);
      const {
        Eventid,
        Eventname,
        EventSpeakers,
        EventDate,
        EventTime,
        EventImage,
        EventisActive,
        twitter,
        instagram,
        linkdin,
        Eventvenue,
        joditcontent
      } = details.data.data;
      setEventData({
        Eventid: Eventid,
        Eventname: Eventname,
        EventSpeakers: EventSpeakers,
        EventDate: EventDate,
        EventTime: EventTime,
        EventImage: EventImage,
        EventisActive: EventisActive,
        twitter: twitter,
        instagram: instagram,
        linkdin: linkdin,
        Eventvenue: Eventvenue,
        joditcontent: joditcontent,
      });
      setLoading(false); 
      setImagePreview(EventImage);
    } catch (error) {
        setLoading(false); 
      alert('Please re-check the ID');
    }
  };

  return (
    <div>
         {loading ? (
        <div class='flex space-x-2 justify-center items-center h-screen dark:invert'>
        <span class='sr-only'>Loading...</span>
         <div class='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
       <div class='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
       <div class='h-8 w-8 bg-black rounded-full animate-bounce'></div>
   </div>
      ) : (
      <form onSubmit={handleSubmit}>
        <label>
          Event ID:
          <input type="number" disabled value={eventData.Eventid} onChange={handleInputChange} name="Eventid" />
        </label>

        <label>
          Event Name:
          <input type="text" value={eventData.Eventname} onChange={handleInputChange} name="Eventname" />
        </label>

        <label>
          Event Speakers:
          <input type="text" value={eventData.EventSpeakers} onChange={handleInputChange} name="EventSpeakers" />
        </label>

        <label>
          Event Start Date:
          <input type="date" value={eventData.EventDate} onChange={handleInputChange} name="EventDate" />
        </label>

        <label>
          Event time:
          <input type="text" value={eventData.EventTime} onChange={handleInputChange} name="EventTime" />
        </label>

        <div {...getRootProps()} style={{ marginTop: '20px', border: '2px dashed #ccc', padding: '20px', cursor: 'pointer' }}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop an image here, or click to select an image</p>
        </div>

        {imagePreview && (
          <div>
            <p>Image Preview:</p>
            <img src={imagePreview} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
          </div>
        )}

        <label>
          Event is Active:
          <input
            type="radio"
            name="EventisActive"
            value="true"
            checked={eventData.EventisActive === true}
            onChange={(e) => setEventData({ ...eventData, EventisActive: e.target.value === 'true' })}
          />
          True
        </label>
        <label>
          <input
            type="radio"
            name="EventisActive"
            value="false"
            checked={eventData.EventisActive === false}
            onChange={(e) => setEventData({ ...eventData, EventisActive: e.target.value === 'true' })}
          />
          False
        </label>

        <label>
          Twitter:
          <input type="text" value={eventData.twitter} onChange={handleInputChange} name="twitter" />
        </label>

        <label>
          Instagram:
          <input type="text" value={eventData.instagram} onChange={handleInputChange} name="instagram" />
        </label>

        <label>
          LinkedIn:
          <input type="text" value={eventData.linkdin} onChange={handleInputChange} name="linkdin" />
        </label>

        <label>
          Event Venue:
          <input type="text" value={eventData.Eventvenue} onChange={handleInputChange} name="Eventvenue" />
        </label>

        <JoditEditor value={eventData.joditcontent} onChange={handleEditorChange} />

        <button type="submit">Submit</button>
      </form>
       )}
    </div>
  );
};

export default EditEvent;
