import React, { Component } from 'react'
import axios from 'axios'
import './style/YourOffenses.css'
 class YourOffenses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loader: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            axios.get('http://localhost:8080/api/vWykroPo/').then((response) => {
                this.setState({data: response.data, loader: false})
            })
        }, 2500)
    }
    render() {
        return (
            <div className="table-responsive">
            <h2>Dane Kierowcy</h2>
                <table class="table"> 
                    <tbody>
                    <tr><th>Pesel</th><th>Imie i nazwisko</th><th>Nazwa Wykroczenia</th><th>Liczba punktów karnych</th><th>Kwota mandatu</th><th>Numer rejsetracji pojazdu</th><th>Numer licznika</th><th>Data wykroczenia:</th><th>Dane Policjata wystwaijącego mandat</th><th>Numer służoby policjata</th><th>Numer seryny Fotroadaru</th><th>Współrzedne fotoradaru</th></tr>
                        {this.state.loader ? <div>"Landing..."</div>:
                        <>{this.state.data.map((item) => {
                        return <tr key={item.w_PO}><th>{item.k_PESEL}</th> <th>{item.k_IMIE} {item.k_NAZWISKO}</th> <th>{item.w_NAZW_WYK}</th> <th>{item.w_PO_PUN_KARN}</th> <th>{item.w_PO_KWOTA_MAN}</th> <th>{item.w_PO_NR_REJ_AUTA}</th> <th>{item.w_PO_NR_LICZNIKA}</th> <th>{item.w_PO_DATA}</th> <th>{item.p_STOPIEN} {item.p_IMIE} {item.p_NAZWISKO}</th> <th>{item.p_NR_SLUZ}</th> <th>{item.f_NR_SERYJNY}</th> <th>Wysokść: {item.f_WYSO_GPS} Szerokość: {item.f_SZER_GPS}</th></tr>})}</>}
                    </tbody> 
                </table>
            </div>
        )
    }
}

export default YourOffenses
