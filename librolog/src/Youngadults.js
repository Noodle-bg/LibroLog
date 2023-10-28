import React,{useState,useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
const Youngadult=()=>{
  const [books,setBooks]=useState([]);
  useEffect(()=>{
    const fetchbestsellers=async() =>{
      const res=await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/young-adult-hardcover.json?api-key=7ubqTMnaq70yJQFNE10C5wKbO681O102`);
      setBooks(res.data.results.books);
    }
    fetchbestsellers();
  },[]);
  return(
    <div className="scroll-container">
      {books.map((book)=>{

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