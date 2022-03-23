/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_api, Fetch_api } from "../Redux/Action";
function Thunkwith() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const handleChange = () => {
    setProducts(() => {
      console.log(query, data);
      return data.filter((a) => {
        return a.category == query;
      });
    });
     
  };
    console.log(products);
  useEffect(() => {
    dispatch(Fetch_api());
  }, []);
  return (
    <div>
      <input
        placeholder="enter"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button
        onClick={() => {
          // dispatch(Fetch_api());
          handleChange();
        }}
      >
        Search
      </button>
      <div>
        {!products.length
          ? "...Nothing to show here"
          : products.map((product,i) => {
              return (
                <div key={i}>
                  <h1>{product.category}</h1>
                  <p>{product.title}</p>
                  <img src={product.image} />
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Thunkwith;
