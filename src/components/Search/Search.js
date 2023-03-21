import React, { useState } from "react";
import { data } from "../../datasource/data";
import "./search.css";
const Search = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(data);
  const handleChange = (e) => {
    setSearch(e.target.value);
    searchData();
  };

  const searchData = () => {
    let res = data.filter((item, index) => {
      if (item.name.includes(search)) {
        return true;
      }
      return false;
    });
    setResult(res);
    console.log("Result", res);
  };

  const handleReset = () => {
    setResult(data);
    setSearch("");
  };

  return (
    <div className="container">
      <h2>User Data</h2>
      <p>
        <input
          className="inp"
          type="text"
          placeholder="Search By name"
          value={search}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handleReset}>Reset</button>
      </p>
      <table
        rules="all"
        border="1"
        align="center"
        cellPadding="1"
        cellSpacing="1"
        bgcolor="orange"
        border-color="white"
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Website</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.website}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
