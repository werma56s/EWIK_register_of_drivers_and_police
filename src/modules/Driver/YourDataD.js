import React, { Component } from 'react'
import axios from 'axios'
import './style/YourDataD.css'
 class YourDataD extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loader: true,
            isEditUser: false,
            isAddPUser: false
        }
        this.addUser = this.addUser.bind(this);
        this.deletePersonData = this.deletePersonData.bind(this);
        this.editPersonData = this.editPersonData.bind(this);
    }

     addUser(){
        this.props.history.push('add-user');
     }

     editPersonData(userId){
         this.props.history.push(`update-user/${userId}`);
     }

     deletePersonData=(userId,e) =>{
        console.log(userId);
         axios.delete(`http://localhost:8080/api/kierowcy/${userId}`).then((response) => {
             this.setState({data: this.state.data.filter(user => user.k_ID !== userId)})
            alert(`deleted`);
             window.location.reload();
         })
     }

     componentDidMount() {
         setTimeout(() => {
         axios.get('http://localhost:8080/api/kierowcy').then((response) => {
             this.setState({data: response.data, loader: false})
         })
         }, 2500)
     }

     render() {
         return (
             <div class="table-responsive">
                 <h2>Dane Kierowcy</h2>
                 <div>
                     <button className="btn btn-primary" onClick={this.addUser}>Dodaj uzytkownia</button>
                 </div>
                 <table class="table">
                     <thead>
                     <tr>
                         <th>Pesel</th>
                         <th>Imie i nazwisko</th>
                         <th>Miejscowosc i ulica</th>
                         <th>Akcje</th>
                     </tr>
                     </thead>
                     <tbody>
                     {this.state.loader ? <div>"Landing..."</div>:
                     <>{this.state.data.map((item) => {
                     return <tr key={item.kid}><th>{item.kpesel}</th> <th>{item.kimie} {item.knazwisko}</th> <th>{item.knazwMiej} {item.kadrZam} {item.knrZam} </th><td>
                         <button className="btn btn-primary" onClick={(e) => this.editPersonData(item.kid,e)}>Edit</button>
                         <button className="btn btn-danger" onClick={(e) => this.deletePersonData(item.kid, e)}>Delete</button>
                         {/*<button className="btn btn-primary" onClick={(e)=>this.deletePersonData(item.id, e)}>Delete</button>*/}
                     </td></tr>})}</>}
                     </tbody>
                 </table>
             </div>
         )
     }
}

export default YourDataD
