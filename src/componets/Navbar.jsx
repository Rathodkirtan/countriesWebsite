import React from "react";
import { useState } from "react";
import Filter from "./filter.jsx";
import Card from "./card.jsx";

function Navbar() {
  const [mode, setmode] = useState(true);

  return (
    <>
      <div className={mode ? "container-fluid" : "container-fluid dark"}>
        <nav className={mode ? "shadow-sm" : "body"} style={{ width: "100%" }}>
          <div
            className="container d-flex justify-content-between align-items-center"
            style={{ height: "70px" }}
          >
            <h5 style={{ fontWeight: 700 }}>Where in the world?</h5>
            <div className="mode">
              <i className="fa-regular fa-moon"></i>
              <span
                className="ps-2"
                onClick={() => setmode(!mode)}
                style={{ cursor: "pointer" }}
              >
                Dark Mode
              </span>
            </div>
          </div>
        </nav>
        <Filter Mode={mode} />
        
      </div>
    </>
  );
}

export default Navbar;
