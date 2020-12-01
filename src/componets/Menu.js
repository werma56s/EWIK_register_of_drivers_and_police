import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import LoginDriver from '../modules/Driver/LoginDriver';
import HomePolice from '../modules/Police/HomePolice';
import HomeDriver from '../modules/Driver/HomeDriver';
import './style/Menu.css' 

class Menu extends Component {
    render() {
        return (
            <div className="wrapper">
            <h1 className="logo">EWIK.</h1>
            <nav>
                <h3>Main Navigation</h3>
                <ul>
                    <li><Link to="/"> Home</Link></li>
                    <li><Link to="/HomePolice" >Police Page</Link></li>
                    <li><Link to="/HomeDriver" >Driver Page</Link></li>
                    <li><Link to="/LoginDriver">Driver Log</Link></li>
                </ul>
            </nav>
        </div>
        )
    }
}

export default Menu
