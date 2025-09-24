import React from 'react';
import './App.css';
import Home from "./components/home/Home"
import { Route,Routes } from 'react-router-dom';
import User from "./components/AddUser/User"
import Users from "./components/UserDetails/Users"

function App() {
  return (

    <div>
        <React.Fragment>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/mainhome" element={<Home />}/>
            <Route path="/adduser" element={<User />}/>
            <Route path="/userdetails" element={<Users />}/>
          </Routes>
        </React.Fragment>
        
    </div>
  );
}

export default App;
