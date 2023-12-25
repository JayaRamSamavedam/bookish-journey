import React, { useState, useEffect } from 'react';
import { Request } from '../helpers/axios_helper';
import Updateuser from './Updateuser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Viewusers = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Request('GET', '/get');
        const { team } = response.data;
        setTeamMembers(team);
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ToastContainer/>
      <h2>Team Members</h2>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>
            <strong>Name:</strong> {member.name}<br />
            <strong>Role:</strong> {member.role}<br />
            <strong>Instagram:</strong> {member.instagram}<br />
            <strong>LinkedIn:</strong> {member.linkdin}<br />
            <strong>GitHub:</strong> {member.github}<br />
            {member.image && (
              <div>
                <strong>Image:</strong><br />
                <img src={member.image} alt={member.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
              </div>
            )}
            <button onClick={() => {if(updateId === null) setUpdateId(member.id); else setUpdateId(null)}}>Update</button>
            <button onClick={async ()=>{
              const res = await Request("POST","/del",{id:member.id})
              if(res){
                toast.success("user removed sucessfully");
                window.location="/view";
              }
              else{
                toast.error(JSON.stringify(res.error));
              }
            }} >Delete me</button>
            <hr />
          </li>
        ))}
      </ul>
      {updateId && <Updateuser id={updateId} />}
    </div>
  );
};

export default Viewusers;
