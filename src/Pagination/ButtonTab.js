import React from 'react';
import './ButtonTab.css';

const ButtonTab = ({ totalPages, currentPage, onPageChange }) => {
  const renderButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 7;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    if (endPage - startPage + 1 < maxVisibleButtons) {
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    // Previous button
    if (currentPage > 1) {
      buttons.push(
        <button
          key="prev"
          className="page-btn prev-btn"
          onClick={() => onPageChange(currentPage - 1)}
        >
          ‹
        </button>
      );
    }

    // First page if not in range
    if (startPage > 1) {
      buttons.push(
        <button
          key={1}
          className="page-btn"
          onClick={() => onPageChange(1)}
        >
          1
        </button>
      );
      if (startPage > 2) {
        buttons.push(<span key="start-ellipsis" className="ellipsis">...</span>);
      }
    }

    // Page buttons
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`page-btn ${i === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    // Last page if not in range
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(<span key="end-ellipsis" className="ellipsis">...</span>);
      }
      buttons.push(
        <button
          key={totalPages}
          className="page-btn"
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    // Next button
    if (currentPage < totalPages) {
      buttons.push(
        <button
          key="next"
          className="page-btn next-btn"
          onClick={() => onPageChange(currentPage + 1)}
        >
          ›
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="pagination-container">
      <div className="pagination">
        {renderButtons()}
      </div>
    </div>
  );
};

export default ButtonTab;
