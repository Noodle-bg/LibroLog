import React,{useState,useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
const Business=({bestsellersdata})=>{

  return(
    <div className="scroll-container">
      {bestsellersdata.map((book)=>{
        const {book_image,title,rank}=book;
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
export default Business;