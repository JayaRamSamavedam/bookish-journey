import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [image, setImage] = useState('');
  // const [img,setImg] = useState(null);
  function convertToBase64(e) {
    if (e.target.files.length > 0) {
      var reader = new FileReader();
      
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = () => {
        setImage(reader.result);
        console.log(reader.result);
      };

      reader.onerror = (error) => {
        console.log('Error: ', error);
      };
    } else {
      console.log('No file selected');
    }
  }

  async function upload() {
    try {
        const imageData =image; // Replace this with your actual base64-encoded image

        const response = await axios.post(
            'http://localhost:8888/upload-image',
            { image: imageData },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*', // Replace with the actual origin of your server
                },
            },
            
        );

        console.log(response.data);
    } catch (error) {
        console.error('Error uploading image:', error);
    }
}

  
  

  return (
    <div className="imageupload" style={{ width: 'auto' }}>
      <input accept="image/*" type="file" onChange={convertToBase64} />
      {image === '' || image === null ? (
        ''
      ) : (
        <>
          <img width={100} height={100} src={image} alt="preview" />
          <button type='submit' onClick={upload}>Upload</button>
        </>
      )}
    </div>
  );
}

export default ImageUpload;
