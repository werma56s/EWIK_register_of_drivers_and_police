import React, { Component } from 'react'
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Baner from '../../componets/Baner';
import Footer from '../../componets/Footer';
import MenuDriver from '../../componets/MenuDriver';
import News from '../../componets/News';
import Contact from '../Contact'
import YourDataD from './YourDataD'
import YourOffenses from './YourOffenses'

 class HomeDriver extends Component {
    render() {
        return (
            <div>
                <MenuDriver />
                <Baner />
                {/*<Route path={'/HomeDriver/'} component={News}/> */ }            
                <Route path={'/HomeDriver/YourData'} component={YourDataD}/>
                <Route path={'/HomeDriver/YourOffenses'} component={YourOffenses}/>
                <Route path={'/HomeDriver/Contact'} component={Contact}/>
                <Footer />
            </div>
        )
    }
}

export default HomeDriver
