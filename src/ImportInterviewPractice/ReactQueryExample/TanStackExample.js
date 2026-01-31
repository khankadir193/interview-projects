import { useQuery } from '@tanstack/react-query';
import React from 'react';

const TanStackExample = () => {
    const fetchPosts = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        return res.json();
    };

    const {data,isLoading,isError} = useQuery({
        queryKey: ['posts'],
        queryFn:fetchPosts
    });

    if(isLoading) return <p>Loading.......</p>
    if(isError) return <h3>Error fetching data</h3>


    return (
        <div>
            {
                data?.map((item)=>{
                    return <p key={item.id}>{item.title}</p>
                })
            }
        </div>
    )
}

export default TanStackExample