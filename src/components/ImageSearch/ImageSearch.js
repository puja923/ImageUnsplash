import React, { useState } from "react";
import Unsplash from "../../api/Unsplash";
import './ImageSearch.css'

const ImageSearch = () => {
  const [search, setSearch] = useState();
  const [result, setResult] = useState([]);

  const handleClick = async () => {
    const response = await Unsplash.get("/search/photos", {
      params: {
        query: search,
      },
    });
    console.log(response.data.results);
    setResult(response.data.results);
  };

  return (
    <div className="container">
      <div className="navbar">
      <h2>Search the Image you want</h2>
      <p className="write">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleClick} className="btn">Search</button>
      </p>
      </div>
      <br />
      <br />
      
      <div className="ImageGallery">
        {result.map((item, index) => {
          return <img src={item.urls.small} height="200" />;
        })}
      </div>
    </div>
  );
};

export default ImageSearch;
