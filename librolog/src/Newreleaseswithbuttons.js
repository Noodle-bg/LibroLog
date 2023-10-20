import React from "react";
import Newreleases from "./Newreleases";
const scrollAmount = 150; // Adjust this value to control the scroll distance

function scrollContainerLeft() {
  const container = document.querySelectorAll('.scroll-container')[0];
  container.scrollLeft -= scrollAmount;
}
function scrollContainerRight() {
    const container = document.querySelectorAll('.scroll-container')[0];
    container.scrollLeft += scrollAmount;
  }
function Newreleaseswithbuttons(){
    return(
        <div>
            <p className="headings"><b>New Releases This Week </b></p>
            <div className="scroller-buttons">
            <button onClick={scrollContainerLeft}>Scroll Left</button>
            <div><Newreleases /></div>
            <button onClick={scrollContainerRight}>Scroll Right</button>
            </div>
        </div>
    );
};
export default Newreleaseswithbuttons;
