import React from 'react'
import Nav from "../Nav/Nav";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Nav />
      <div className="home-container">
        <h1 className="home-title">Welcome to User Account System</h1>
        <p className="home-description">
          Manage your users easily. Add, update, delete and view details with a simple interface.
        </p>

        <div className="home-buttons">
              <Link to="/adduser">
                <button className="btn-primary">Get Started</button>
              </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

