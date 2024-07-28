import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
        <div>{profileData?.name}</div>
    )
}

export default GitHubProfileFinder;