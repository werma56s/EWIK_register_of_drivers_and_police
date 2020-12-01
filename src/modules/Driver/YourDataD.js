import React, { Component } from 'react'
import axios from 'axios'
import './style/YourDataD.css'
 class YourDataD extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loader: true
        }
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
                <table class="table"> 
                    <tbody>
                    <tr><th>Pesel</th> <th>Imie i nazwisko</th><th>Ulica i numer domu/mieszkania</th><th>Miejscowosc i ulica</th></tr>
                        {this.state.loader ? <div>"Landing..."</div>:
                        <>{this.state.data.map((item) => {
                        return <tr key={item.kid}><th>{item.kpesel}</th> <th>{item.kimie} {item.knazwisko}</th> <th>{item.kadrZam} {item.knrZam}</th> <th>{item.knazwMiej} {item.kadrZam} </th></tr>})}</>}
                    </tbody> 
                </table>
            </div>
        )
    }
}

export default YourDataD
