import React, { useEffect, useRef, useState } from 'react';
import Nav from '../Nav/Nav';
import User from '../User/User';  
import axios from "axios"
import {useReactToPrint} from "react-to-print";
import "./Users.css"; // external css

const URL = "http://localhost:5000/users";

const fetchHandler = async() =>{
  return await axios.get(URL).then((res) => res.data);
};

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    fetchHandler().then((data) => setUsers(data.user));
  },[])

  const ComponentRef = useRef();
  const handlePrint = useReactToPrint({
      contentRef: ComponentRef,
      DocumentTitle:"Users Report",
      onafterprint:()=>alert("Users Report Successfully Download !"),
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then((data) =>{
      const filteredUsers = data.user.filter((user) =>
        Object.values(user).some((field)=>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
      setUsers(filteredUsers);
      setNoResults(filteredUsers.length === 0);
    });
  };

  return (
    <div className="users-page">
      <Nav/>
      <h1 className="page-title">User Details Display Page</h1>

      <div className="search-container">
        <input 
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          name="search"
          placeholder="Search User Details"
          className="search-input"
        />
        <button onClick={handleSearch} className="btn-primary">Search</button>
      </div>

      {noResults ? (
        <div className="no-results">
          <p>No Users Found</p>
        </div>
      ) : (
        <div ref={ComponentRef} className="users-list">
          {users && users.map((user, i) => (
            <div key={i} className="user-card">
              <User user={user}/>
            </div>
          ))}
        </div>
      )}

      <div className="download-btn">
        <button onClick={handlePrint} className="btn-outline">Download Report</button>
      </div>
    </div>
  )
}

export default Users;
