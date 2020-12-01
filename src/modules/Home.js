import React, { Component } from 'react'
import Baner from '../componets/Baner'
import Baner2 from '../componets/Baner2'
import Footer from '../componets/Footer'
import Menu from '../componets/Menu'

export class Home extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Baner2 />
                <Footer />
            </div>
        )
    }
}

export default Home
