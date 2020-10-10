import React, { Component } from 'react'
import { Table } from 'react-bootstrap';

export default class CustomTable extends Component {
    render() {
        let  {countries} = this.props;
        return (
                <Table striped bordered hover className="m-2">
                    <thead>
                        <tr>
                        <th>Country</th>
                        <th>Capital</th>
                        <th>Region</th>
                        <th>Population</th>
                        <th>Area</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            countries.map((country,key)=>{
                                return( 
                                <tr key={key}>
                                    <td>{country.name}</td>
                                    <td>{country.capital}</td>
                                    <td>{country.region}</td>
                                    <td>{country.population}</td>
                                    <td>{country.area}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </Table>
        )
    }
}
