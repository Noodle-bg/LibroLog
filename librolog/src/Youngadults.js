import React from "react";
import { Link } from "react-router-dom";
const Youngadult=({bestsellersdata})=>{
  return(
    <div className="scroll-container">
      {bestsellersdata.map((book)=>{

        return(
        <div className="card-container">
          <Link >
          <div className="card" style={{ backgroundImage: `url(${book.book_image})` }}></div></Link>
          <div className="card-title">{book.title}</div>

        </div>
        )
      })}
    </div>
  )
}
export default Youngadult;