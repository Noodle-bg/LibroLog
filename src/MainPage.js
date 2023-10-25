// MainPage.js
import React from 'react';
import BookCover from './BookCover';
import MainContent from './MainContent';
import OtherContent from './OtherContent';
import ReadersAlsoEnjoyed from './ReadersAlsoEnjoyed';
import './App.css'; // Import your CSS file
import CommentList from './Commentlist';


function MainPage() {
  return (
    <div className="main-page">
    <div className = "main-page-container">
      <div className = "main-page-content">
        
      <BookCover />
      
    <div className='content'>
      <MainContent />
      <OtherContent />
      </div>
      <CommentList/>
      
      </div>
      
      
      </div>
      
      

      <ReadersAlsoEnjoyed />

    </div>
    
  );
}

export default MainPage;
