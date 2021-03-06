import React, { Component } from 'react'
import { BrowserRouter as Router, Route, } from "react-router-dom";
import YourIssuedOffenses from './YourIssuedOffenses'
import YourData from './YourData'
import Contact from '../Contact'
import MenuPolice from '../../componets/MenuPolice';
import Baner from '../../componets/Baner';
import Footer from '../../componets/Footer';
import News from '../../componets/News';
import UpdateDataPolice from "./UpdateDataPolice";
import AddTicket from "./addTicket";

 class HomePolice extends Component {
    render() {
        return (
            <div>
                <MenuPolice />
                <Baner />
                {/*<Route path={'/HomePolice'} component={News}/>*/}
                <Route path={'/HomePolice/YourData'} component={YourData}/>
                <Route path={'/HomePolice/police-data-update/:id'} component={UpdateDataPolice}/>
                <Route path={'/HomePolice/YourIssuedOffenses'} component={YourIssuedOffenses}/>
                <Route path={'/HomePolice/add-ticket'} component={AddTicket}/>
                <Route path={'/HomePolice/Contact'} component={Contact}/>
                <Footer />
                
            </div>

        )
    }
}

export default HomePolice
