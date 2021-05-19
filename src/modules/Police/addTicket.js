import React, {Component} from 'react';
import axios from "axios";
//dokonczyc?

class AddTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //id_w_PO: this.state.id_w_PO,
            w_PO_NR_LICZNIKA: '',
            w_PO_NR_REJ_AUTA: '',
            w_PO_SZER_GPS: '',
            w_PO_WYSO_GPS: '',
            w_PO_DATA: '',
            w_PO_KWOTA_MAN: '',
            w_PO_PUN_KARN: '',

            w_ID: '',
            w_NAZW_WYK: '',

            k_ID: '',
            k_PESEL:'',
            k_IMIE: '',
            k_NAZWISKO: '',

            p_ID: '',
            p_IMIE: '',
            p_NAZWISKO: '',
            p_STOPIEN: '',
            p_NR_SLUZ: '',


            f_ID: '',
            f_NR_SERYJNY: '',
            f_WYSO_GPS: '',
            f_SZER_GPS: ''

        }
        this.saveTicket = this.saveTicket.bind();
    }
    saveTicket = (e) => {
        e.preventDefault();
        let ticet ={
            //id_w_PO: this.state.id_w_PO,
            w_PO_NR_LICZNIKA: this.state.w_PO_NR_LICZNIKA,
            w_PO_NR_REJ_AUTA: this.state.w_PO_NR_REJ_AUTA,
            w_PO_SZER_GPS: this.state.w_PO_SZER_GPS,
            w_PO_WYSO_GPS: this.state.w_PO_WYSO_GPS,
            w_PO_DATA: this.state.w_PO_DATA,
            w_PO_KWOTA_MAN: this.state.w_PO_KWOTA_MAN,
            w_PO_PUN_KARN: this.state.w_PO_PUN_KARN,

            w_ID: this.state.w_ID,
            w_NAZW_WYK: this.state.w_NAZW_WYK,

            k_ID: this.state.k_ID,
            k_PESEL: this.state.k_PESEL,
            k_IMIE: this.state.k_IMIE,
            k_NAZWISKO: this.state.k_NAZWISKO,

            p_ID: this.state.p_ID,
            p_IMIE: this.state.p_IMIE,
            p_NAZWISKO: this.state.p_NAZWISKO,
            p_STOPIEN: this.state.p_STOPIEN,
            p_NR_SLUZ: this.state.p_NR_SLUZ,


            f_ID: this.state.f_ID,
            f_NR_SERYJNY: this.state.f_NR_SERYJNY,
            f_WYSO_GPS: this.state.f_WYSO_GPS,
            f_SZER_GPS: this.state.f_SZER_GPS

        }

        try{
        axios.post('http://localhost:8080/api/vWykroPo', ticet).then((response) => {
            this.props.history.push("/HomePolice/YourIssuedOffenses")
        }) }
        catch(error){
            console.log(error);
        }
    }

    cancel(){
        this.props.history.push('/HomePolice/YourIssuedOffenses');
    }

    changeLicznikHandler = (e) =>{
        this.setState({w_PO_NR_LICZNIKA: e.target.value});
    }
    changeKwotaManHandler = (e) =>{
        this.setState({w_PO_KWOTA_MAN: e.target.value});
    }
    changeDataHandler = (e) =>{
        this.setState({w_PO_DATA: e.target.value});
    }
    changeWyskGPSHandler = (e) =>{
        this.setState({w_PO_WYSO_GPS: e.target.value});
    }
    changeSzerGPSHandler = (e) =>{
        this.setState({w_PO_SZER_GPS: e.target.value});
    }

    render() {
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h2>Dodaj użytkownia</h2>
                        <div className = "card-body">
                            <form className="row g-2">
                                <div className = "form-group">
                                    <label> Licznik: </label>
                                    <input placeholder="nr licznika" name="wLicznika" className="form-control"
                                           value={this.state.w_PO_NR_LICZNIKA} onChange={this.changeLicznikHandler.bind(this)}/>
                                </div>
                                <div className = "form-group">
                                    <label> Kwota mandatu: </label>
                                    <input placeholder="kwota mandatu" name="wMandatu" className="form-control"
                                           value={this.state.w_PO_KWOTA_MAN} onChange={this.changeKwotaManHandler.bind(this)}/>
                                </div>
                                <div className = "form-group">
                                    <label> Data wykroczenia: </label>
                                    <input placeholder="Data wykroczenia" name="wdata" className="form-control"
                                           value={this.state.w_PO_DATA} onChange={this.changeDataHandler.bind(this)}/>
                                </div>
                                <div className = "form-group">
                                    <label> Wyskosc geograficzna: </label>
                                    <input placeholder="Wyskosc geograficzna" name="Wgeograf" className="form-control"
                                           value={this.state.w_PO_WYSO_GPS} onChange={this.changeWyskGPSHandler.bind(this)}/>
                                </div>
                                <div className = "form-group">
                                    <label> Szerokosc geograficzna: </label>
                                    <input placeholder="Szerokość geograficzna" name="sGeograf" className="form-control"
                                           value={this.state.w_PO_SZER_GPS} onChange={this.changeSzerGPSHandler.bind(this)}/>
                                </div>


                                <button className="btn btn-success" onClick={this.saveTicket}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTicket;