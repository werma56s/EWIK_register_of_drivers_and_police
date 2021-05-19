import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Baner from '../../componets/Baner';
import Footer from '../../componets/Footer';
import MenuDriver from '../../componets/MenuDriver';
import Contact from '../Contact'
import YourDataD from './YourDataD'
import YourOffenses from './YourOffenses'
import AddUser from "./addUser";
import UpdateUser from "./UpdateUser";


 class HomeDriver extends Component {
    render() {
        return (
            <div>
                <MenuDriver />
                <Baner />
                {/*<Route exact path={'/HomeDriver'} component={HomeDriver}/>*/}
                <Route path={'/HomeDriver/YourData'} component={YourDataD}/>
                <Route path={'/HomeDriver/YourOffenses'} component={YourOffenses}/>
                <Route path={'/HomeDriver/Contact'} component={Contact}/>
                <Route path={'/HomeDriver/add-user'} component={AddUser}/>
                <Route path={'/HomeDriver/update-user/:id'} component={UpdateUser}/>
                <Footer />
            </div>
        )
    }
}

export default HomeDriver
