import React, {Component} from 'react';
import axios from 'axios';

class UpdateDataPolice extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pid: this.props.match.params.id,
            pimie: '',
            pnazwisko: '',
            pstopien: '',
            pnrSluz: '',
            pjednosMacierz: '',

        }
        this.updatePoliceman = this.updatePoliceman.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:8080/api/policja/'+ this.state.pid).then( (res) =>{
            let user = res.data;
            this.setState({pimie: user.pimie,
                pnazwisko: user.pnazwisko,
                pstopien : user.pstopien,
                pnrSluz:  user.pnrSluz,
                pjednosMacierz: user.pjednosMacierz
            });
        })
            .catch(error => {
            console.log(error)
        });
    }

    updatePoliceman = (e) => {
        e.preventDefault();
        let user = {
            pid:  this.state.pid,
            pimie: this.state.pimie,
            pnazwisko: this.state.pnazwisko,
            pstopien: this.state.pstopien,
            pnrSluz: this.state.pnrSluz,
            pjednosMacierz: this.state.pjednosMacierz

        };

        console.log('user => ' + JSON.stringify(user));
        console.log('id => ' + JSON.stringify(this.state.pid));
        console.log('http://localhost:8080/api/policja/'+ this.state.pid );

        axios.put('http://localhost:8080/api/policja/'+ this.state.pid, user).then( res => {
            this.props.history.push('/HomePolice/YourData');
        });
    }

    cancel(){
        this.props.history.push('/HomePolice/YourData');
    }

    changeImieHandler = (event) => {
        this.setState({pimie: event.target.value});
    }
    changeNazwiskoHandler = (event) =>{
        this.setState({pnazwisko: event.target.value});
    }
    changeStopienHandler = (event) => {
        this.setState({pstopien: event.target.value});
    }
    changeNrSluzbowyHandler = (event) =>{
        this.setState({pnrSluz: event.target.value});
    }
    changeJednostkaMaciezystaHandler = (event) =>{
        this.setState({pjednosMacierz: event.target.value});
    }

    render() {
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h2>Update your data</h2>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> Imie: </label>
                                    <input placeholder="Imie" name="pimie" className="form-control"
                                           value={this.state.pimie} onChange={this.changeImieHandler.bind(this)}/>
                                </div>
                                <div className = "form-group">
                                    <label> Nazwisko: </label>
                                    <input placeholder="Nazwisko" name="pnazwisko" className="form-control"
                                           value={this.state.pnazwisko} onChange={this.changeNazwiskoHandler.bind(this)}/>
                                </div>
                                <div className = "form-group">
                                    <label> Stopien: </label>
                                    <input placeholder="Stopien" name="pstopien" className="form-control"
                                           value={this.state.pstopien} onChange={this.changeStopienHandler.bind(this)}/>
                                </div>
                                <div className = "form-group">
                                    <label> Nr mieszkania: </label>
                                    <input placeholder="Nr Służbowy" name="pnrSluz" className="form-control"
                                           value={this.state.pnrSluz} onChange={this.changeNrSluzbowyHandler.bind(this)}/>
                                </div>
                                <div className = "form-group">
                                    <label> Miejscowosc: </label>
                                    <input placeholder="Jednostka Macierzysta" name="pjednosMacierz" className="form-control"
                                           value={this.state.pjednosMacierz} onChange={this.changeJednostkaMaciezystaHandler.bind(this)}/>
                                </div>

                                <button className="btn btn-success" onClick={this.updatePoliceman}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateDataPolice;