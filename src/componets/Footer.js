import React, { Component } from 'react'
import './style/Footer.css'
import img1 from '../img/icon1.png'
import img2 from '../img/icon2.png'

class Footer extends Component {
    render() {
        return (
            <div className="footer"> 
                <div className="contentFooter">
                    <h4>Contact:</h4>
                        <ul>
                            <li>Phon: 112</li>
                            <li>Email: policja@xyz.pl</li>
                            <li>Fax: 0000000</li>
                        </ul>
                    </div>
                <div className="contentFooter">
                    <h4>Social Media</h4>
                        <ul>
                            <li><img src={img1} /></li>
                            <li><img src={img2} /></li>
                        </ul> 
                </div>
                <div className="contentFooter">
                    <h4>Information</h4>
                        <ul>
                            <li>The police are available 24 hours a day. If something bad happens, call the emergency number!</li>
                        </ul> 
                </div>
                <div className="copyrighting"> <h6><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />Weronika Górska - na potrzeby stażu i portfolio </h6></div>
                
            </div>
        )
    }
}

export default Footer
