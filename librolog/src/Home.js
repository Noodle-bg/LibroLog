import Topauthorswithbuttons from "./Topauthorswithbuttons";
import Searchabledropdown from "./Searchabledropdown";
import logo from './logo.svg';
import { Link } from "react-router-dom";
import Menubar from "./Menubar";
import Fictionwithbuttons from "./Fictionwithbuttons";
import Nonfictionwithbuttons from "./Nonfictionwithbuttons";
import Youngadultswithbuttons from "./Youngadultswithbuttons";
import Businesswithbuttons from "./Buisnesswithbuttons";
import React,{useState,useEffect} from "react";
import axios from 'axios';

function Home(){
  const [bestsellers,setBooks]=useState([]);
  useEffect(()=>{
      const fetchbestsellers = async () => {
    try {
      const apikey=process.env.REACT_APP_NYT_BOOKS_API;
      const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${apikey}`);
      if (res.data.results && res.data.results.lists && res.data.results.lists.length > 0) {
        setBooks(res.data.results.lists);
      } else {
        console.log("Data is missing or empty.");
      }
    } catch (error) {
      console.error("Error fetching bestsellers:", error);
    }
  };
  fetchbestsellers();
  },[]);
    return(
        <div>
        <header className="header">
        <nav className="App-header">
          <div className='logo-background'>
          <Link to='/' className="logo-link">
            <img src={logo} className="App-logo" alt="logo" height="100px" />
          </Link>
          </div>
          <Searchabledropdown/>
          <ul className="nav-items">
            <li><Link>Login</Link></li>
            <li><Link>Sign-up</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </header>
        <div>
          <Menubar/>
          {/* ... Add other components here */}
          <Fictionwithbuttons bestsellersdata={bestsellers[0]?.books}/>
          <Nonfictionwithbuttons bestsellersdata={bestsellers[1]?.books}/>
          <Youngadultswithbuttons bestsellersdata={bestsellers[10]?.books}/>
          <Businesswithbuttons bestsellersdata={bestsellers[13]?.books}/>
          <Topauthorswithbuttons/>
        </div>
        </div>
    )
}
export default Home;