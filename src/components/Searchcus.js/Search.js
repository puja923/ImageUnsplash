import React, { useState } from 'react'
import { data } from '../../datasource/data';

const Search = () => {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState(data);

    const handleChange = (e) =>{
    setSearch(e.target.value);
    searchData();
}
  
    const searchData = () =>{
        let res = data.filter((item, index) =>{
            if(item.name.includes(search)){
                return true;
            }
            return false;
        });
        setResult(res)
        console.log("Result", res);
    }
    const handleReset = () => {
        setResult(data);
        setSearch("");
    }
  return (
    <div className='container'>
        <h2>Data of user</h2>
        <p>
            <input type="text"
             value={search}
             onChange={(e)=> handleChange(e)}
             placeholder="enter the name" />

             <button onClick={handleReset}>Reset</button>
        </p>
        <table>
            <thead>
            <tr>
                <th>Username</th>
                <th>Website</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
                {data.map ((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.username}</td>
                            <td>{item.website}</td>
                            <td>{item.email}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Search