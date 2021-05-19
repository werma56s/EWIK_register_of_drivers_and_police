import React, { Component } from 'react'
import { Link } from "react-router-dom";
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
                    <li><Link to="/LoginP" >Police Page</Link></li>
                    <li><Link to="/Login" >Driver Page</Link></li>
                    {/*<li><Link to="/LoginDriver">Driver Log</Link></li>*/}
                </ul>
            </nav>
        </div>
        )
    }
}

export default Menu
