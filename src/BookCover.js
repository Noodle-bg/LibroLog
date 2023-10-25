// BookCover.js
import React from 'react';
import './BookCover.css';
function BookCover() {
  return (
    <div className="firstpart">
      <div className="bookcover">
        <img className="bookcoverimg" src="./images/bookcover.jpg" alt="Book Cover" />
        <button className="addtoreadlist">Add to read list</button>
        <button className="buy">Buy it on Amazon</button>
      </div>
    </div>
  );
}

export default BookCover;
