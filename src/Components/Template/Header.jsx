import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid p-5 bg-secondary text-white text-center">
                    <h1>Create React App Project</h1>
                    <p>Create your React App Project in a simple way!</p>
                   

                   <nav className="navbar navbar-expand-sm bg-light">
  <div className="container-fluid">
    {/* Links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
    </ul>
  </div>
</nav>


                </div>

            </React.Fragment>
        )
    }
}
