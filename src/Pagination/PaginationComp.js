import React, { useEffect } from 'react';

const PaginationComp = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.github.com/users/john-smilga/followers?per_page=100');
        if (!res.ok) {
          throw new Error(`getting error.${response.status}`);
        }

        const response = await res.json();
        console.log('response....', response);
      }catch(err){
        console.log('error..',err);
      }   
    };

    fetchData();
  }, [0])

  return (
    <div>PaginationComp</div>
  );
}

export default PaginationComp;