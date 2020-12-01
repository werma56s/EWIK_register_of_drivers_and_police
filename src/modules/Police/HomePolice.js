import React, { Component } from 'react'
import { BrowserRouter as Router, Route, } from "react-router-dom";
import YourIssuedOffenses from './YourIssuedOffenses'
import YourData from './YourData'
import Contact from '../Contact'
import MenuPolice from '../../componets/MenuPolice';
import Baner from '../../componets/Baner';
import Footer from '../../componets/Footer';
import News from '../../componets/News';

 class HomePolice extends Component {
    render() {
        return (
            <div>
                <MenuPolice />
                <Baner />
                {/*<Route path={'/HomePolice'} component={News}/>*/}
                <Route path={'/HomePolice/YourData'} component={YourData}/>
                <Route path={'/HomePolice/YourIssuedOffenses'} component={YourIssuedOffenses}/>
                <Route path={'/HomePolice/Contact'} component={Contact}/>
                <Footer />
                
            </div>

        )
    }
}

export default HomePolice
