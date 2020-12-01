import React, { Component } from 'react'
import axios from 'axios'
import '../Driver/style/YourDataD.css'

 class YourData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loader: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            axios.get('http://localhost:8080/api/policja').then((response) => {
                this.setState({data: response.data, loader: false})
            })
        }, 2500)
    }
    render() {
        return (
            <div className="table-responsive">
                <h2>Dane Policjata</h2>
                <table class="table">  
                    <tbody>
                    <tr><th>Numer służbowy</th> <th>Imie i nazwisko</th><th>Jedonstka macierzysta</th><th>Stopień</th></tr>
                        {this.state.loader ? <div>"Landing..."</div>:
                        <>{this.state.data.map((item) => {
                        return <tr key={item.pid}><th>{item.pnrSluz}</th> <th>{item.pimie} {item.pnazwisko}</th> <th>{item.pjednosMacierz}</th> <th>{item.pstopien}</th></tr>})}</>}
                    </tbody> 
                </table>
            </div>
        )
    }
}

export default YourData
