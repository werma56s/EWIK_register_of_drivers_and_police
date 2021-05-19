import React, { Component } from 'react'
import './style/FormLog.css'
import axios from "axios";

export class LoginD extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             pesel: '',
             isLogin: true,
             data: []
        }
        this.Log = this.Log.bind(this);
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


   Log=(e)=>{
       axios.get(`http://localhost:8080/api/kierowcy/login?pesel=${this.state.pesel}&nazwisko=${this.state.name}`).then((response) => {
           this.setState({data: response.data, isLogin: false})
           //this.props.history.push("/HomeDriver")
           window.location.replace('/HomeDriver')
           sessionStorage.setItem('Driver', JSON.stringify(this.state))
           alert("login");
       })
   }

    render() {
       const {name, pesel} = this.state
       return (
           <div className="formmm">
               <form >
               <h2>Login</h2>
               <div className="form-group">
                   <label for="exampleInputEmail1">Last Name</label>
                   <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={name} onChange={this.changeLastName.bind(this)}/>
               </div>
               <div className="form-group">
                   <label for="exampleInputPassword1">Pesel</label>
                   <input type="password" class="form-control" id="exampleInputPassword1" value={pesel} onChange={this.changePesel.bind(this)}/>
               </div>
               <button type="submit" class="btn btn-outline-secondary" onClick={()=>this.Log()}>Login</button>
               </form>
               {this.state.isLogin ? <h2>"login?..."</h2>: <h2>"You login"</h2>}
           </div>
       )
   }
}

export default LoginD
