import React, { Component } from 'react'
import './style/LoginDriver.css'
import {Redirect, Route} from "react-router-dom";
import LoginD from '../../componets/LoginD';
import Footer from '../../componets/Footer';
import MenuDriver from '../../componets/MenuDriver';
import Baner from '../../componets/Baner';

 class LoginDriver extends Component {
    render() {
        return (
            <div>
            <MenuDriver />
            <LoginD/>
            <Footer/>
            </div>
        )
    }
}

export default LoginDriver
