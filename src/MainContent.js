// MainContent.js
import React from 'react';

function MainContent() {
  return (
    <div className="mainshit">
      <div className = 'mainstuff'>
      <div className="title">
        <h1>Book Title</h1>
      </div>
      <div className="author">
        <h2>Book author</h2>
      </div>
      </div>
      <div className="description">
        <h2>Description:</h2>
        <p>
          {/* Your book description content here */}
        </p>
      </div>
      <div className="abouttheauthor">
        <h2>About the author:</h2>
        <p>
          {/* Author description content here */}
        </p>
      </div>
    </div>
  );
}

export default MainContent;
