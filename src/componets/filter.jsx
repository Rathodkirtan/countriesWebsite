import React, { useState } from "react";
import Card from "./card";

function filter({ Mode }) {
  const [Text, setText] = useState('');
  const [select, setselect] = useState('');

  return (
    <div className={Mode ? "container mt-5" : "dark container mt-5"}>
      <div className="row">
        <div
          className="col-12 col-md-12 col-lg-6 shadow-sm d-flex aling-items-center"
          style={{ height: "40px" }}
        >
          {/* <i className="fa-solid fa-magnifying-glass"></i> */}
          <div className="">
            <input
              type="text"
              className={
                Mode ? "form-control border-0" : "body form-control border-0"
              }
              id="exampleFormControlInput1"
              placeholder="Search for a country..."
              onChange={(e)=>setText(e.target.value)}
            />
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6 d-flex justify-content-lg-end ">
          <select
            className={
              Mode
                ? "form-select mt-5 mt-lg-0"
                : "form-select mt-5 mt-lg-0 body"
            }
            aria-label="Default select example"
            style={{ width: "40%" }}
            onChange={(e)=>setselect(e.target.value)}
          >
            <option selected>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <Card Mode={Mode} Text={Text} Select={select}/>
    </div>
  );
}

export default filter;
