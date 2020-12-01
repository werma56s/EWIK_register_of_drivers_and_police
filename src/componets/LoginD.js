import React, { Component } from 'react'
import './style/FormLog.css'
export class LoginD extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             pesel: '',
             redirect: false
        }
    }

    changeLastName = (event) =>{
        this.setState({
            name: event.target.value
        })
    }     

   changePesel = (event) =>{
       this.setState({
           pesel: event.target.value
       })
   } 
   
   /**/
   Log() {
       sessionStorage.setItem('userSession', JSON.stringify(this.state))
       alert('You are logged in!')
       this.setState({redirect: true})
   } 

   render() {
       const {name, pesel} = this.state
       return (
           <div className="formmm">
               <form >
               <h2>Login</h2>
               <div class="form-group">
                   <label for="exampleInputEmail1">Last Name</label>
                   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={name} onChange={this.changeLastName.bind(this)}/>
               </div>
               <div class="form-group">
                   <label for="exampleInputPassword1">Pesel</label>
                   <input type="password" class="form-control" id="exampleInputPassword1" value={pesel} onChange={this.changePesel.bind(this)}/>
               </div>
               <button type="submit" class="btn btn-outline-secondary" onClick={()=>this.Log()}>Login</button>
               </form>
           </div>
       )
   }
}

export default LoginD
