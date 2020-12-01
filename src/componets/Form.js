import React, { Component } from 'react'
import './style/From.css'

 class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'',
            surname:'',
            password:'',
            notification:''
        }
    }
    changeName = (event) =>{
        this.setState({
            email: event.target.value
        })
        
    }
    changeSurname =(event) =>{
        this.setState({
            surname: event.target.value
        })
    }
    changePassword = (event) =>{
        this.setState({
            password: event.target.value
        })
        
    }
    changeNotification = (event) =>{
        this.setState({
            notification: event.target.value
        })
        
    }
    
    
    //Wyswietlenie
    handleSubmit = event =>{
        alert(`|( ${this.state.name} )|( ${this.state.password} )|( ${this.state.surname} )|( ${this.state.address2} )|( ${this.state.city} )|( ${this.state.statee} )|( ${this.state.zip} )|`)
        event.preventDefault()
    }
    //naprawic
    render() {
        const {name, password, surname, notification} = this.state
        return (
            <div className="formm">
            <h2>Contact Form</h2>
            <form onSubmit={this.handleSubmit}>
            <div class="form-row">
            <div class="form-group col-md-4">
                <label for="inputEmail4">First name</label>
                <input type="email" class="form-control" id="inputEmail4" value={name} onChange={this.changeName} />
                </div>
                <div class="form-group col-md-4">
                <label for="inputEmail4">Last name</label>
                <input type="email" class="form-control" id="inputEmail4" value={surname} onChange={this.changeSurname} />
                </div>
                <div class="form-group col-md-4">
                <label for="inputPassword4">Password</label>
                <input type="password" class="form-control" id="inputPassword4" value={password} onChange={this.changePassword}/>
                </div>
            </div>
            <div class="form-group">
            <label for="exampleFormControlTextarea1">Notification</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={notification} onChange={this.changeNotification}></textarea>
           </div>
            
            <button type="submit" class="btn btn-outline-secondary">Sign in</button>
            </form>
</div>
        )
    }
}

export default Form
