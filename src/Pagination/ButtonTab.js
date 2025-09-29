import React from 'react';

const ButtonTab = ({ totalPages, currentPage, onPageChange }) => {
  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          style={{
            margin: '0 5px',
            padding: '5px 10px',
            backgroundColor: i === currentPage ? '#007bff' : '#ccc',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return <div style={{ marginTop: '24rem', textAlign: 'center' }}>{renderButtons()}</div>;
};

export default ButtonTab;
