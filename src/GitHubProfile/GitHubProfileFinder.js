import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './githubProfile.css';

const GitHubProfileFinder = () => {
    const [profileData,setProfileData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const username = 'khankadir193'

            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log('response...//', response.data);
            setProfileData(response.data);
        }
        fetchData();
    },[0]);
    return (
        <div className='profile-container'>
            <img src={profileData?.avatar_url} alt='gitHub profileImage' />
            <p>{profileData?.login}</p>
            <h3>{profileData?.name}</h3>
            <h3>{profileData?.bio}</h3>
        </div>
    )
}

export default GitHubProfileFinder;