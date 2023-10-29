import left from "./less_than.png";
import right from "./greater_than1.png"
import Nonfiction from "./Nonfction";
const scrollAmount = 1000; // Adjust this value to control the croll distance
function scrollContainerLeft() {
  const container = document.querySelectorAll('.scroll-container')[1];
  container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth', // Add smooth scrolling behavior
  });
}

function scrollContainerRight() {
  const container = document.querySelectorAll('.scroll-container')[1];
  container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth', // Add smooth scrolling behavior
  });
}

  function Nonfictionwithbuttons(){

    return (
        <div>
            <p className="headings"><b>Non-Fiction</b></p>
            <div className="scroller-buttons">
                <button onClick={scrollContainerLeft} className="arrow-button">
                    <img src={left} className="arrow" alt="left" height="50px" />
                </button>
                <Nonfiction/>
                <button onClick={scrollContainerRight} className="arrow-button">
                    <img src={right} className="arrow" alt="right" height="50px" />
                </button>
            </div>
        </div>
    );
}

export default Nonfictionwithbuttons;
