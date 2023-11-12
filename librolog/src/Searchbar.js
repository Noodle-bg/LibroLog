import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";// Import useHistory from react-router-dom
import { usePage } from './PageContext';

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const { updatePage } = usePage(); // Assuming you have a context function to update the page
  const inputRef = useRef(null);
  const navigate = useNavigate(); // Get the history object from react-router-dom

  useEffect(() => {
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // If you are using context API to update the page
      updatePage(query);
      navigate(`/search`);

      // If you want to navigate using react-router-dom
    }
  };

  function toggle(e) {
    if (inputRef.current && e.target === inputRef.current) {
      return;
    }

    // You can handle other logic here when clicking outside the input

    setQuery("");
  }

  return (
    <div className="search-bar">
    <div className="dropdown-search">
      <div className="control">
        <div className="selected-value">
          <input
            ref={inputRef}
            type="text"
            value={query}
            name="searchTerm"
            placeholder="Search For Books, Authors or ISBN's"
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            onClick={toggle}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Searchbar;
