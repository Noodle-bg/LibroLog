import React from "react";
import { Link } from "react-router-dom";
import { usePage } from "./PageContext";
function Menubar(){
  const { updatePage } = usePage();

  const handleClick = (stringValue) => {
    // Set the string value you want to send to another page
    updatePage(stringValue);
  };
    return(
<div className="navbar">
   <Link to='/'>Home</Link>
  <div className="dropdown">
    <button className="dropbtn">About
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#">About Us</a>
      <a href="#">Work With Us</a>
      <a href="#">Support Us</a>
    </div>
  </div>
  <div className="dropdown">
    <button className="dropbtn">Community
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
  <Link to='/catdisplay' onClick={()=>handleClick('fiction')}>Fiction</Link>
  {/* <div className="dropdown">
    <button className="dropbtn">Fiction
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#">Classics</a>
      <a href="#">Historical Fiction</a>
      <a href="#">Crime and Mystery</a>
    </div>
  </div> */}
  <Link to='/catdisplay' onClick={()=>handleClick('nonfiction')}>Non-Fiction</Link>
  {/* <div className="dropdown">
    <button className="dropbtn">Non-Fiction
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div> */}
  {/* </div> */}
  <div className="dropdown">
    <button className="dropbtn">Collections
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <Link to='/catdisplay' onClick={()=>handleClick('buisness')}>Buisness</Link>
      <Link to='/catdisplay' onClick={()=>handleClick('series')}>Non-Fiction</Link>
      <Link to='/catdisplay' onClick={()=>handleClick('nonfiction')}>Non-Fiction</Link>
      <Link to='/catdisplay' onClick={()=>handleClick('nonfiction')}>Non-Fiction</Link>
    </div>
  </div>
</div>
    )
}
export default Menubar;