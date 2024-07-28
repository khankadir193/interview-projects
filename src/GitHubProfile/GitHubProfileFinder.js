import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './githubProfile.css';

const GitHubProfileFinder = () => {
    const [profileData, setProfileData] = useState();
    const [inputValue, setInputValue] = useState();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const username = 'khankadir193'
    //         const response = await axios.get(`https://api.github.com/users/${username}`);
    //         console.log('response...//', response.data);
    //         setProfileData(response.data);
    //     }
    //     fetchData();
    // }, [0]);

    const handleSubmit = async() => {
        console.log("inputValue...",inputValue);
        if (inputValue) {
            const username = inputValue
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log('response...//', response.data);
            setProfileData(response.data);
        };
    }

        const handleChange = (e) => {
            console.log('e...', e.target.value);
            setInputValue(e.target.value);
        }

        return (
            <div className='profile-container'>
                <img src={profileData?.avatar_url} alt='gitHub profileImage' />
                <p>{profileData?.login}</p>
                <h3>{profileData?.name}</h3>
                <h3>{profileData?.bio}</h3>
                <input type='text' placeholder='enter your github username' onChange={handleChange} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        )
    }

    export default GitHubProfileFinder;