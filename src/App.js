import React from 'react';
import './App.css';
import Home from "./components/home/Home"
import { Route,Routes } from 'react-router-dom';
import Users from "./components/UserDetails/Users"
import AddUser from './components/AddUser/AddUser';
import UpdateUser from './components/UpdateUser/UpdateUser';  

function App() {
  return (

    <div>
        <React.Fragment>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/mainhome" element={<Home />}/>
            <Route path="/adduser" element={<AddUser />}/>
            <Route path="/userdetails" element={<Users />}/>
            <Route path="/userdetails/:id" element={<UpdateUser />}/>
          </Routes>
        </React.Fragment>
        
    </div>
  );
}

export default App;
