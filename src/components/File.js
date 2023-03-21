import React, {useEffect, useState} from 'react'

const File = () => {

    const [users, setUsers] = useState([]);

     useEffect (() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
     }, [])

  return (
    <div className='App'>
        <h1>user</h1>
        <div className="card">
           { users.map((user)=>(
                <div className='card-inner'>
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default File