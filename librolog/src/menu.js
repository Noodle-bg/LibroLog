import React from  "react"
import map from "lodash/map";
import range from "lodash/range";
import Container from "./Container"
function Menu(){
    return(
        <div>
            <div className="Browse">
                Browse By
                <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
        {map(range(8), _ => (
          <Container />
        ))}
      </div>
            </div>
            <div className="Search">Search</div>
        </div>

    )
}
export default Menu;