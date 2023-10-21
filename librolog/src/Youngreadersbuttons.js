import React from "react";
import Youngreaders from "./Youngreaders";
const scrollAmount = 150; // Adjust this value to control the scroll distance

function scrollContainerLeft() {
  const container = document.querySelectorAll('.scroll-container')[2];
  container.scrollLeft -= scrollAmount;
}
function scrollContainerRight() {
    const container = document.querySelectorAll('.scroll-container')[2];
    container.scrollLeft += scrollAmount;
  }
function Youngreadersbutton(){
    return(
        <div>
            <p className="headings"><b>Books for Kids and Young Readers </b></p>
            <div className="scroller-buttons">
            <button onClick={scrollContainerLeft}>Scroll Left</button>
            <div><Youngreaders/></div>
            <button onClick={scrollContainerRight}>Scroll Right</button>
            </div>
        </div>
    );
};
export default Youngreadersbutton;
