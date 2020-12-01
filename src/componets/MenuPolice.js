import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import './style/Menu.css' 

 class MenuPolice extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1 className="logo">EWIK.</h1>
                <nav>
                    <h3>Main Navigation</h3>
                    <ul>
                        <li><Link to="/HomePolice"> Home</Link></li>
                        <li><Link to="/HomePolice/YourData">Your Data</Link></li>
                        <li><Link to="/HomePolice/YourIssuedOffenses">Your Issued Offenses</Link></li>
                        <li><Link to="/HomePolice/Contact">Contact</Link></li>
                        <li><Link to="/">LogOut</Link></li>
                    </ul>
                </nav>
            </div>
            
        )
    }
}

export default MenuPolice
