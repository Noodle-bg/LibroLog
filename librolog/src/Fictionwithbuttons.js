import React from "react";
import left from "./less_than.png";
import right from "./greater_than1.png"
import Fiction from "./Fiction";
const scrollAmount = 1000; // Adjust this value to control the croll distance
function scrollContainerLeft() {
  const container = document.querySelectorAll('.scroll-container')[0];
  container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth', 
  });
}

function scrollContainerRight() {
  const container = document.querySelectorAll('.scroll-container')[0];
  container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth', 
  });
}

  function Fictionwithbuttons({bestsellersdata = []}){
    return (
        <div>
            <p className="headings"><b>Fiction</b></p>
            <div className="scroller-buttons">
                <button onClick={scrollContainerLeft} className="arrow-button">
                    <img src={left} className="arrow" alt="left" height="50px" />
                </button>
                <Fiction bestsellersdata={bestsellersdata}/>
                <button onClick={scrollContainerRight} className="arrow-button">
                    <img src={right} className="arrow" alt="right" height="50px" />
                </button>
            </div>
        </div>
    );
}

export default Fictionwithbuttons;
