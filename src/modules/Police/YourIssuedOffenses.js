import React, { Component } from 'react'
import axios from 'axios'
import '../Driver/style/YourOffenses.css'
 class YourIssuedOffenses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loader: true
        }
        this.deleteWykroczenie = this.deleteWykroczenie.bind(this);
        this.addTicket = this.addTicket.bind(this);
    }
    componentDidMount() {
        setTimeout(() => {
            axios.get('http://localhost:8080/api/vWykroPo/').then((response) => {
                this.setState({data: response.data, loader: false})
            })
        }, 2500)}


     deleteWykroczenie(id){
         axios.delete('http://localhost:8080/api/vWykroPo/'+ this.props.id).then( res => {
             this.setState({data: this.state.data.filter(data => data.id !== id)});
         });
     }
     updatePolice(){
        this.props.history.push('police-data-update');
     }

     addTicket(){
        this.props.history.push('add-ticket');
     }

    render(){
        return (
            <div className="table-responsive">
                <h2>Dane wykroczeń wystawionych</h2>
                <div>
                    <button className="btn btn-primary" onClick={this.addTicket}>Dodaj uzytkownia</button>
                </div>
                <table className="table">
                    <tbody>
                    <tr><th>Pesel</th><th>Imie i nazwisko</th><th>Nazwa Wykroczenia</th><th>Liczba punktów karnych</th><th>Kwota mandatu</th><th>Numer rejsetracji pojazdu</th><th>Numer licznika</th><th>Data wykroczenia:</th><th>Dane Policjata wystwaijącego mandat</th><th>Numer służoby policjata</th><th>Numer seryny Fotroadaru</th><th>Współrzedne fotoradaru</th></tr>
                        {this.state.loader ? <div>"Landing..."</div>:
                        <>{this.state.data.map((item) => {
                        return <tr key={item.w_PO}><th>{item.k_PESEL}</th> <th>{item.k_IMIE} {item.k_NAZWISKO}</th> <th>{item.w_NAZW_WYK}</th> <th>{item.w_PO_PUN_KARN}</th> <th>{item.w_PO_KWOTA_MAN}</th> <th>{item.w_PO_NR_REJ_AUTA}</th> <th>{item.w_PO_NR_LICZNIKA}</th> <th>{item.w_PO_DATA}</th> <th>{item.p_STOPIEN} {item.p_IMIE} {item.p_NAZWISKO}</th> <th>{item.p_NR_SLUZ}</th> <th>{item.f_NR_SERYJNY}</th> <th>Wysokść: {item.f_WYSO_GPS} Szerokość: {item.f_SZER_GPS}</th>
                            <button onClick={ () => this.updatePolice(item.pid)} className="btn btn-info">Update </button>
                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteWykroczenie(item.pid)} className="btn btn-danger">Delete </button>                        </tr>})}</>}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default YourIssuedOffenses
