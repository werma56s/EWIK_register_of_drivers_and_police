import React, {Component} from 'react';
import axios from 'axios';

class AddUser extends Component{
constructor(props) {
    super(props);

    this.state = {
        kpesel: '',
        kimie: '',
        knazwisko: '',
        kadrZam: '',
        knrZam: '',
        knazwMiej: '',

    }
    this.saveUser = this.saveUser.bind(this);
}

    saveUser = (e) =>{
        e.preventDefault();
        let user = {
            kid:this.props.kid,
            kpesel: this.state.kpesel,
            kimie: this.state.kimie,
            knazwisko: this.state.knazwisko,
            kadrZam: this.state.kadrZam,
            knrZam: this.state.knrZam,
            knazwMiej: this.state.knazwMiej

        }
        //console.log(JSON.stringify(user));

        axios.post('http://localhost:8080/api/kierowcy', user).then((response) => {
                this.props.history.push("/HomeDriver/YourData")
        });
    }

    cancel(){
        this.props.history.push('/HomeDriver/YourData');
    }

    changePeselHandler = (event) => {
        this.setState({kpesel: event.target.value});
    }
    changeImieHandler = (event) => {
        this.setState({kimie: event.target.value});
    }
    changeNazwiskoHandler = (event) =>{
        this.setState({knazwisko: event.target.value});
    }
    changeUlicaHandler = (event) => {
        this.setState({kadrZam: event.target.value});
    }
    changeNrDomuHandler = (event) =>{
        this.setState({knrZam: event.target.value});
    }
    changeMiejscowoscHandler = (event) =>{
        this.setState({knazwMiej: event.target.value});
    }

render() {
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h2>Dodaj użytkownia</h2>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> Pesel: </label>
                                    <input placeholder="Pesel" name="pesel" className="form-control"
                                           value={this.state.kpesel} onChange={this.changePeselHandler.bind(this)}/>
                                </div>
                                <div className = "form-group">
                                    <label> Imie: </label>
                                    <input placeholder="Imie" name="imie" className="form-control"
                                           value={this.state.kimie} onChange={this.changeImieHandler.bind(this)}/>
                                </div>
                                <div className = "form-group">
                                    <label> Nazwisko: </label>
                                    <input placeholder="Nazwisko" name="nazwisko" className="form-control"
                                           value={this.state.knazwisko} onChange={this.changeNazwiskoHandler.bind(this)}/>
                                </div>
                                <div className = "form-group">
                                    <label> Ulica: </label>
                                    <input placeholder="Ulica" name="ulica" className="form-control"
                                           value={this.state.kadrZam} onChange={this.changeUlicaHandler.bind(this)}/>
                                </div>
                                <div className = "form-group">
                                    <label> Nr mieszkania: </label>
                                    <input placeholder="Nr mieszkania" name="nrMieszkania" className="form-control"
                                           value={this.state.knrZam} onChange={this.changeNrDomuHandler.bind(this)}/>
                                </div>
                                <div className = "form-group">
                                    <label> Miejscowosc: </label>
                                    <input placeholder="Miejscowosc" name="miejscowosc" className="form-control"
                                           value={this.state.knazwMiej} onChange={this.changeMiejscowoscHandler.bind(this)}/>
                                </div>

                                <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUser;