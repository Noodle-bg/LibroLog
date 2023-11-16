import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from './logo.svg';
import "./App.css";
import Menubar from "./Menubar";
import { usePage } from './PageContext';
import Searchbar from "./Searchbar";

const Categorydisplay = () => {
  const [bestsellers, setBooks] = useState([]);
  const { currentPage } = usePage();
  const { updatePage } = usePage();

  const handleClick = (isbn) => {
    // Set the string value you want to send to another page
    updatePage(isbn);
  };

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${currentPage}&maxResults=30&fields=items(volumeInfo(title,authors,imageLinks,industryIdentifiers))`);
        if (res.data.items && res.data.items.length > 0) {
          setBooks(res.data.items);
          console.log(res.data);
        } else {
          console.log("Data is missing or empty.");
        }
      } catch (error) {
        console.error("Error fetching bestsellers:", error);
      }
    };
    fetchBestsellers();
  }, [currentPage]);

  return (
    <div>
      <header className="header">
        <nav className="App-header">
          <div className='logo-background'>
            <Link to='/' className="logo-link">
              <img src={logo} className="App-logo" alt="logo" height="100px" />
            </Link>
          </div>
          <Searchbar/>
          <ul className="nav-items">
            <li><Link>Login</Link></li>
            <li><Link>Sign-up</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      <Menubar/>
      <p className="headings"><b>Showing Results for "{currentPage}"</b></p>
      <div className="book-grid">
        {bestsellers.map((book,index) => (
                  <div className="card-container-cat" key={index}>
                  <Link to='/book' onClick={()=>handleClick(book.volumeInfo.industryIdentifiers[1].identifier)}>
                  <div className="card-cat" style={{ backgroundImage: `url(${book.volumeInfo.imageLinks?.thumbnail})` }}></div></Link>
                  <div className="card-title-cat"><b>{book.volumeInfo.title}</b></div>
                  <div className="card-title-cat">{book.volumeInfo.authors&&book.volumeInfo.authors[0]}</div>
        
                </div>
        ))}
      </div>
    </div>
  );
};

export default Categorydisplay;
