// OtherContent.js
import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './OtherContent.css'

function OtherContent({isbn = []}) {
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

  function StarImage() {
    if (books.averageRating <= 1) {
      return <img className = "s1" src="/1stars-removebg-preview.png" alt="1 star" />;
    }
    if (books.averageRating <= 2) {
      return <img className = "s2" src="/2stars-removebg-preview.png" alt="2 stars" />;
    }
    if (books.averageRating <= 3) {
      return <img className = "s3" src="/3stars-removebg-preview.png" alt="3 stars" />;
    }
    if (books.averageRating <= 4) {
      return <img className = "s4" src="/4stars-removebg-preview.png" alt="4 stars" />;
    }
    if (books.averageRating <= 5) {
      return <img className = "s5" src="/5stars-removebg-preview.png" alt="5 stars" />;
    }


  }

  return (
    <div className= "infoshit">
    <div className="ratings">
    <div className="rating">
      <h1>Rating: {books.averageRating}/5 </h1>
      <StarImage/>
    </div>  
    </div>
    <div className="pages">
      <h2>{books.pageCount} pages </h2>
    </div>
    <div className = "publisher">
      <p>Published Date: {books.publishedDate}</p>
    </div>
    <div className="genre">
      <p>Genre: {books.categories} </p>
      <p></p>
    </div>
    
    
 
  </div>

  
  
  


  );
}

export default OtherContent;
