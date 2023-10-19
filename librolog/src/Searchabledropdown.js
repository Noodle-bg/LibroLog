import Searchbar from "./Searchbar";
import { books } from "./books";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Seachabledropdown() {
  const [value, setValue] = useState("");

  return (
    <div className="search-bar">
    <div>
      <Searchbar
        options={books}
        label="name"
        id="id"
        selectedVal={value}
        handleChange={(val) => setValue(val)}
      />
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="-100 -100 550 550"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
    </div>
  );
}

