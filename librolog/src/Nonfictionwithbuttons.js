import left from "./less_than.png";
import right from "./greater_than1.png"
import Nonfiction from "./Nonfiction";
import { Link } from "react-router-dom";
import { usePage } from './PageContext';
const scrollAmount = 1000; 
function scrollContainerLeft() {
  const container = document.querySelectorAll('.scroll-container')[1];
  container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
  });
}

function scrollContainerRight() {
  const container = document.querySelectorAll('.scroll-container')[1];
  container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
  });
}

  function Nonfictionwithbuttons({bestsellersdata=[]}){
    const { updatePage } = usePage();

    const handleClick = () => {
      const stringValue = 'nonfiction';
      updatePage(stringValue);
    };

    return (
        <div>
            <Link to='./catdisplay' onClick={handleClick}><p className="headings"><b>Non-Fiction</b></p></Link>
            <div className="scroller-buttons">
                <button onClick={scrollContainerLeft} className="arrow-button">
                    <img src={left} className="arrow" alt="left" height="50px" />
                </button>
                <Nonfiction bestsellersdata={bestsellersdata}/>
                <button onClick={scrollContainerRight} className="arrow-button">
                    <img src={right} className="arrow" alt="right" height="50px" />
                </button>
            </div>
        </div>
    );
}

export default Nonfictionwithbuttons;
