import React from 'react'
import { Request } from '../helpers/axios_helper'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState,useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const Updateuser = (props) => {


  const [imagePreview, setImagePreview] = useState(null);

    const [formData, setFormData] = useState({
        id: 0,
        name: '',
        role: '',
        instagram: '',
        linkedin: '',
        github: '',
        image: '',
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    function convertToBase64(e) {
        if (e.target.files.length > 0) {
          var reader = new FileReader();
          
          reader.readAsDataURL(e.target.files[0]);
    
          reader.onload = () => {
            
            setImagePreview(reader.result);
            setFormData((prevData) => ({
                ...prevData,
                image: reader.result,
              }));

            console.log(reader.result);
          };
    
          reader.onerror = (error) => {
            console.log('Error: ', error);
          };
        } else {
          console.log('No file selected');
        }
      }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            // Make a request to your server to save the data
            const res = await Request("POST","/update",formData);
            // Clear the form after successful submission
            props.id = null;
            toast.success("user updated sucessfully")
            setImagePreview(null);
      
            // You can add further actions after successful submission
          } catch (error) {
            console.error('Error submitting form:', error);
          }
        };
  // const [id,setid] = useState(props.id);
  const [data,setdata] = useState(null);
  useEffect(() => {
    if (props.id) {
      fetchData();
    }
  },[]); // Run this effect when props.id changes

  const fetchData = async () => {
    try {
      const details = await Request('POST', '/getbyid', { id: Number(props.id) });
      console.log(details.data);
      setdata(JSON.stringify(details.data.data));
      const { id, name, role, instagram, linkdin, github, image } = details.data.data;
      setFormData({
        id: id,
        name: name,
        role: role,
        instagram: instagram,
        linkdin: linkdin,
        github: github,
        image: image,
      });
      setImagePreview(image);
    } catch (error) {
      alert('Please re-check the ID');
    }
  };
  
    
  return (
    <div>
      {props.id}
{data}
<ToastContainer />
       <Form onSubmit={handleSubmit}>
      {/* Other form fields */}
      <Form.Group controlId="id">
        <Form.Label>Id</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Id"
          name="id"
          value={formData.id}
          onChange={handleInputChange}
        />
        </Form.Group>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="role">
        <Form.Label>Role</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter role"
          name="role"
          value={formData.role}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="instagram">
        <Form.Label>Instagram</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Instagram username"
          name="instagram"
          value={formData.instagram}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="linkdin">
        <Form.Label>LinkedIn</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter LinkedIn profile URL"
          name="linkdin"
          value={formData.linkdin}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="github">
        <Form.Label>GitHub</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter GitHub username"
          name="github"
          value={formData.github}
          onChange={handleInputChange}
        />
      </Form.Group>
      
      <Form.Group controlId="image">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" accept="image/*" onChange={convertToBase64} />
        {imagePreview && (
          <div>
            <p>Image Preview:</p>
            <img src={imagePreview} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
          </div>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

      </div>
  )
}

export default Updateuser
