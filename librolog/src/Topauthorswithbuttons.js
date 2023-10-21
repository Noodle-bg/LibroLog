import React from "react";
import Topauthors from "./Topauthors";
const scrollAmount = 150; // Adjust this value to control the scroll distance

function scrollContainerLeft() {
  const container = document.querySelectorAll('.scroll-container')[3];
  container.scrollLeft -= scrollAmount;
}
function scrollContainerRight() {
    const container = document.querySelectorAll('.scroll-container')[3];
    container.scrollLeft += scrollAmount;
  }
function Topauthorswithbuttons(){
    return(
        <div>
            <p className="headings"><b>Top Authors </b></p>
            <div className="scroller-buttons">
            <button onClick={scrollContainerLeft}>Scroll Left</button>
            <div><Topauthors /></div>
            <button onClick={scrollContainerRight}>Scroll Right</button>
            </div>
        </div>
    );
};
export default Topauthorswithbuttons;
