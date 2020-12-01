import React, { Component } from 'react'
import img from '../img/baner.jpg'
import './style/Baner.css'

class Baner extends Component {
    render() {
        return (
            <div className="main-banner">
             <img src={img} alt="Welcome to EWIK"/>
            </div>
        )
    }
}

export default Baner
