import React, { Component } from 'react'
import './style/LoginPolice.css'

class LoginPolice extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             badge_number:'',
             password: ''
        }
    }
    changeBadge_number = (event) =>{
        this.setState({
            badge_number: event.target.value
        })
        
    }
    changePassword = (event) =>{
        this.setState({
            password: event.target.value
        })
        
    }
    
    render() {
        const {badge_number, password} = this.state
        return (
        <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={badge_number} onChange={this.changeBadge_number.bind(this)} />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={this.changePassword.bind(this)} />
        </div>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        )
    }
}

export default LoginPolice
