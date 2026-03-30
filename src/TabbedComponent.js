import React, { useState, useEffect, useMemo } from 'react';
import CardComp from './Pagination/CardComp';
import ButtonTab from './Pagination/ButtonTab';
import './TabbedComponent.css';

const TabbedComponent = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Generate large-scale dummy data for each tab
  const tabData = useMemo(() => ({
    1: Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
      description: `This is a description for item ${i + 1}. It contains some dummy text to simulate real content.`,
      category: `Category ${(i % 10) + 1}`
    })),
    2: Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      login: `user${i + 1}`,
      avatar_url: `https://via.placeholder.com/100?text=U${i + 1}`,
      html_url: `https://github.com/user${i + 1}`
    })),
    3: Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      title: `Post ${i + 1}`,
      content: `This is the content of post ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      author: `Author ${(i % 20) + 1}`,
      date: new Date(Date.now() - i * 86400000).toLocaleDateString()
    }))
  }), []);

  const currentData = tabData[activeTab];
  const totalPages = Math.ceil(currentData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = currentData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to first page when switching tabs
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <div className="tab-content">
            <h2>Tab 1 - Items List ({currentData.length} items)</h2>
            <div className="items-list">
              {paginatedData.map((item) => (
                <div key={item.id} className="item-card">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span className="category">{item.category}</span>
                </div>
              ))}
            </div>
            <ButtonTab
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        );
      case 2:
        return (
          <div className="tab-content">
            <h2>Tab 2 - User Profiles ({currentData.length} users)</h2>
            <div className="card-container">
              {paginatedData.map((item) => (
                <CardComp
                  key={item.id}
                  login={item.login}
                  avatar_url={item.avatar_url}
                  profileUrl={item.html_url}
                />
              ))}
            </div>
            <ButtonTab
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        );
      case 3:
        return (
          <div className="tab-content">
            <h2>Tab 3 - Blog Posts ({currentData.length} posts)</h2>
            <div className="posts-list">
              {paginatedData.map((post) => (
                <div key={post.id} className="post-card">
                  <h3>{post.title}</h3>
                  <p>{post.content.substring(0, 100)}...</p>
                  <div className="post-meta">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
            <ButtonTab
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tabbed-component">
      <div className="tabs">
        <button
          className={activeTab === 1 ? 'tab active' : 'tab'}
          onClick={() => handleTabChange(1)}
        >
          Tab 1 (Items)
        </button>
        <button
          className={activeTab === 2 ? 'tab active' : 'tab'}
          onClick={() => handleTabChange(2)}
        >
          Tab 2 (Users)
        </button>
        <button
          className={activeTab === 3 ? 'tab active' : 'tab'}
          onClick={() => handleTabChange(3)}
        >
          Tab 3 (Posts)
        </button>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default TabbedComponent;