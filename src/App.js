
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css'; // Import the external CSS file

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUserData(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-profile-container">
      {userData && (
        <div className="user-profile-card">
          <img className="user-profile-image" src={userData.picture.large} alt="User" />
          <div className="user-profile-info">
            <div className="name_last">
              {`Name: ${userData.name.first} ${userData.name.last}`}
             
              <div className="email">
              {`Email: ${userData.email}`}<br/>
              {`phone:${userData.phone}`}<br/>
              {`gender:${userData.gender}`}<br/>
              {`phone: ${userData.phone}`}<br/>
            </div>
            </div>
           
           
          </div>
        </div>
      )}
    </div>
  );
};
export default UserProfile;

