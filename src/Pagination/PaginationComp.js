import React, { useEffect, useState } from 'react';
import CardComp from './CardComp';

const PaginationComp = () => {
  const [data,setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.github.com/users/john-smilga/followers?per_page=10');
        if (!res.ok) {
          throw new Error(`getting error.${res.status}`);
        }

        const response = await res.json();
        console.log('response....', response);
        setData(response);
      }catch(err){
        console.log('error..',err);
      }   
    };

    fetchData();
  }, [0]);

  return (
    <div className='card-container'>
      {
        data?.map((item)=>{
          return (<>
            <CardComp login={item.login} avatar_url={item.avatar_url} profileUrl={item.html_url} />
          </>) 
        })
      }
    </div>
  );
}

export default PaginationComp;