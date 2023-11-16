// BookCover.js
import React, { useEffect } from 'react';
import './BookCover.css';
import axios from 'axios';
function BookCover({isbn}) {
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


 // function when clicking the buy button it will open the link from api 
  function buy(){
    window.open(books?.webReaderLink);
  }


  return (
    <div className="firstpart">
      <div className="bookcover">
      <div className = "bookcoverimg" style = {{backgroundImage: `url(${books?.imageLinks?.thumbnail})`}}>
        {/* <img className = "imagebookcover" src ={books?.imageLinks?.thumbnail} alt='bookcover' />  */}
         </div>
        <button className="addtoreadlist"> Add to read list </button>
        <button className="buy" onClick={buy}>Buy it on Amazon  </button>
      </div>
    </div>
  );
}


export default BookCover;
