import React, { useEffect, useRef, useState } from 'react';
import Nav from '../Nav/Nav';
import User from '../User/User';  
import axios from "axios"
import {useReactToPrint} from "react-to-print";

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
  })

  return (
    <div>
      <Nav/>
      <h1>User Details Display Page</h1>
      <div ref={ComponentRef}>
        {users && users.map((user, i) => (
          <div key ={i}>
            <User user={user}/>
          </div>
        ))}
      </div>
      <br/>
      <button onClick={handlePrint}>Download Report</button>
    </div>
  )
}

export default Users
