import React, {Component} from 'react';
import axios from "axios";

class LoginP extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            nrSluz: '',
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

    changenrSluz = (event) =>{
        this.setState({
            nrSluz: event.target.value
        })
    }


    Log=(e)=>{
        axios.get(`http://localhost:8080/api/kierowcy/login?pesel=${this.state.nrSluz}&nazwisko=${this.state.name}`).then((response) => {
            this.setState({data: response.data, isLogin: false})
            window.location.replace('/HomePolice')
            sessionStorage.setItem('Police', JSON.stringify(this.state))
            alert("login");
        })
    }

    render() {
        const {name, nrSluz} = this.state
        return (
            <div className="formmm">
                <form >
                    <h2>Login</h2>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Last Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={name} onChange={this.changeLastName.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Nr Slużbowy</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" value={nrSluz} onChange={this.changenrSluz.bind(this)}/>
                    </div>
                    <button type="submit" class="btn btn-outline-secondary" onClick={()=>this.Log()}>Login</button>
                </form>
                {this.state.isLogin ? <h2>"login?..."</h2>: <h2>"You login"</h2>}
            </div>
        )
    }
}

export default LoginP;