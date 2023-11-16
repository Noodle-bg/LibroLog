// MainContent.js
import React, {useEffect, useState, useContext }from 'react';
import axios from 'axios';
import './MainContent.css'


function MainContent({isbn = []}) {
  const [books,Setbooks] = React.useState([]);
  useEffect(() => { 
    const result = async () => {
    const res = await axios(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
    Setbooks(res.data.items[0].volumeInfo);  
    console.log(res.data.items[0]);
    }
    result();

    
  }, [] 
  );

  return (
    <div className="mainshit">
      <div className = 'mainstuff'>
      <div className="title">
        <h1>{books.title}</h1>
      </div>
      <div className="author">
        <h2>{books.authors}</h2>
      </div>
      </div>
      <div className="description2">
        <h2> Description</h2>
        <p>
          {books.description}
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
