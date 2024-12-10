import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";

function Card({ Mode,Text,Select }) {
  const [datas, setdata] = useState([]);

  useEffect( () => {
    return async()=>{
      let response = await Axios.get("https://restcountries.com/v3.1/all");
      setdata(response.data);
    }
  },[]);

  useEffect(()=>{
    return async()=>{
      let response = await Axios.get(`https://restcountries.com/v3.1/translation/${Text}`);
      setdata(response.data);
    }
  },[Text])

  useEffect(()=>{
    return async()=>{
      let response = await Axios.get(`https://restcountries.com/v3.1/region/${Select}`);
      setdata(response.data);
    }
  },[Select])
  return (
    <div
      className={
        Mode
          ? "container d-flex justify-content-between flex-wrap"
          : "dark container d-flex justify-content-between flex-wrap"
      }
    >
      {/* {Select} */}
      {datas.map((ele, index) => {
        return (
          <div
            className={
              Mode
                ? "cart mt-4 shadow-sm rounded"
                : "body cart mt-4 shadow-sm rounded"
            }
            key={index}
            style={{ width: "18rem" }}
          >
            <img
              src={ele.flags.png}
              alt="flag"
              style={{ width: "18rem", height: "200px" }}
            />
            <div className="card-body p-3">
              <h6 className="mt-3 mb-4">{ele.name.common}</h6>
              <p>
                Population:<span>{ele.population}</span>
              </p>
              <p>
                Region:<span>{ele.region}</span>
              </p>
              <p>
                Capital:<span>{ele.capital}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
