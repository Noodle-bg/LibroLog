import React,{useRef} from  "react"
import map from "lodash/map";
import book1 from 'C:/Users/bgpra/OneDrive/Documents/GitHub/LibroLog/librolog/src/Books/The_Book_Thief.webp';
import book2 from 'C:/Users/bgpra/OneDrive/Documents/GitHub/LibroLog/librolog/src/Books/1984.webp';
const books=[book1,book2,book1,book1,book2,book2,book1,book2,book1,book2];
const Newreleases = () => {
    return(
        <div>
            <p className="headings">New Releases This Week</p>
            <div className="scroll-container">
                {books.map((src,index) => (
                <a href="#" key={index} className="card-container">   <div key={src} className="card" style={{backgroundImage:`url(${src})`
                }}></div>
                <span className="card-title">Book Title</span>
                </a>
                ))}
            </div>
        </div>
    );
};
export default Newreleases;