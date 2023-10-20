import React from "react";
import Bestsellers from "./Bestsellers";
const scrollAmount = 150; // Adjust this value to control the scroll distance

function scrollContainerLeft() {
  const container = document.querySelectorAll('.scroll-container')[1];
  container.scrollLeft -= scrollAmount;
}

function scrollContainerRight() {
  const container = document.querySelectorAll('.scroll-container')[1];
  container.scrollLeft += scrollAmount;
}
function Bestsellerswithbuttons(){
    return(
        <div>
            <p className="headings"><b>Current Best Sellers</b></p>
            <div>
            <button onClick={scrollContainerLeft}>Scroll Left</button>
            <Bestsellers />
            <button onClick={scrollContainerRight}>Scroll Right</button>
            </div>
        </div>
    )

}
export default Bestsellerswithbuttons;