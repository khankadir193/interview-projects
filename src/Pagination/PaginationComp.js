import React, { useEffect, useState } from 'react';
import CardComp from './CardComp';
import ButtonTab from './ButtonTab';

const PaginationComp = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.github.com/users/john-smilga/followers?per_page=100'); // Fetch all data
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }

        const response = await res.json();
        console.log('Response:', response);
        setData(response);
        setPageSize(Math.ceil(response.length / 10)); // Calculate total pages
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  // Pagination logic: Get current page data
  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    return data.slice(startIndex, endIndex);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="card-container">
        {getPaginatedData().map((item) => (
          <CardComp
            key={item.id}
            login={item.login}
            avatar_url={item.avatar_url}
            profileUrl={item.html_url}
          />
        ))}
      </div>

      <ButtonTab
        totalPages={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationComp;
