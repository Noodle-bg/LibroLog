import React from "react";
import { Link } from "react-router-dom";
import {usePage} from './PageContext'
const Nonfiction=({bestsellersdata})=>{
  const { updatePage } = usePage();

  const handleClick = (isbn) => {
    // Set the string value you want to send to another page
    updatePage(isbn);
  };

  return(
    <div className="scroll-container">
      {bestsellersdata.map((book)=>{
        // const {book_image,title,rank}=book;
        return(
        <div className="card-container">
          <Link to='/book' onClick={()=>handleClick(book.primary_isbn10)}>
          <div className="card" style={{ backgroundImage: `url(${book.book_image})` }}></div></Link>
          <div className="card-title">{book.title}</div>

        </div>
        )
      })}
    </div>
  )
}
export default Nonfiction;