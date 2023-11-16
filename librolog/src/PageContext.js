import React, { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('');

  const updatePage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <PageContext.Provider value={{ currentPage, updatePage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePage must be used within a PageProvider');
  }
  return context;
};
