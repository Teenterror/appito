import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table';
import Pagination from './Pagination'
import { InputGroup,FormControl } from 'react-bootstrap';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchWord: '',
      countries: [],
      currentPage: 1,
      noOfItemsinPage: 5,
      filteredCountries: []
    }
  }

  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((res)=>{
        this.setState({
          countries: res.data
        })
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  setSearchWord = (e) =>{
    let searchWord = e.target.value;
    this.setState({
      searchWord
    })
    if(searchWord){
      this.searchInTable(searchWord);
    } else {
      this.setState({
        searchfilteredCountries: []
      })
    }
  }

  searchInTable = (word) =>{
    this.setState((prevState)=>{
      let countries = prevState.countries
      let searchfilteredCountries = countries.filter((country)=>{
        let countryName = country.name.toLowerCase();
        if(countryName.search(word.toLowerCase())!==-1){
          return country
        } 
      })
      return {
        searchfilteredCountries
      }
    })
  }

  changeCurrentPage = (currentPage) =>{
    this.setState({
      currentPage
    })
  }



  render(){
    const {countries,currentPage,noOfItemsinPage,searchfilteredCountries}= this.state;
    let filteredCountries = countries.slice((currentPage-1)*noOfItemsinPage,noOfItemsinPage*currentPage)
    return (
      <div>
        <h1 className="m-2">Table Mockup</h1>
        <InputGroup  className="m-3">
          <FormControl type="text" placeholder="Search" onChange={this.setSearchWord}/>
        </InputGroup>
        <Pagination currentPage={currentPage} totalRows={countries.length} noOfItemsinPage={noOfItemsinPage} changePage={this.changeCurrentPage}/>
        <Table countries={filteredCountries}/>
      </div>
    );
  }
}

export default App;
