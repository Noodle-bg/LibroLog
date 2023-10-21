import React from "react";
function Menubar(){
    return(
<div className="navbar">
  <a href="#home">Home</a>
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
  <div className="dropdown">
    <button className="dropbtn">Fiction
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#">Classics</a>
      <a href="#">Historical Fiction</a>
      <a href="#">Crime and Mystery</a>
    </div>
  </div>
  <div className="dropdown">
    <button className="dropbtn">Non-Fiction
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
  <div className="dropdown">
    <button className="dropbtn">Collections
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
</div>
    )
}
export default Menubar;