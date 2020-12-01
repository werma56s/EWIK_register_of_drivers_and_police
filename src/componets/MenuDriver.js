import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from 'axios'
import './style/Menu.css' 
import {isLogged} from '../utilites/Utillities'
 class MenuDriver extends Component {

    render() {
        return (
            <div className="wrapper">
                <h1 className="logo">EWIK.</h1>
                <nav>
                    <h3>Main Navigation</h3>
                    <ul>
                        <li><Link to="/HomeDriver"> Home</Link></li>
                        <li><Link to="/HomeDriver/YourData">Your Data</Link></li>
                        <li><Link to="/HomeDriver/YourOffenses">Your Offensess</Link></li>
                        <li><Link to="/HomeDriver/Contact">Contact</Link></li>
                        <li><Link to="/" >LogOut</Link></li> 
                         {/* na nastepny semest */}
                        {/* <li><button onClick={isLogged() ? () => {
                    sessionStorage.removeItem('userSession');
                    window.location.reload()
                } : () => this.props.history.push('/LoginDriver') }>LogOut</button></li> */}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default MenuDriver
