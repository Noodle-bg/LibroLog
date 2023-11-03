import { Link } from "react-router-dom";
import React from "react";
const Topseries=({bestsellersdata})=>{

  return(
    <div className="scroll-container">
      {bestsellersdata.map((book,index)=>{
        // const {book_image,title,rank}=book;
        return(
        <div className="card-container" key={index}>
          <Link >
          <div className="card" style={{ backgroundImage: `url(${book.book_image})` }}></div></Link>
          <div className="card-title">{book.title}</div>

        </div>
        )
      })}
    </div>
  )
}
export default Topseries;