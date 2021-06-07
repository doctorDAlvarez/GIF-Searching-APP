import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      loading: true
    };
  }
  
  componentDidMount() {
    this.performSearch();
    // fetch('http://api.giphy.com/v1/gifs/trending?api_key=5QFiSZriKkyjpLxsTxMl3V78E0qtDOrX')
    //   .then( res => res.json())
    //   .then( resjson => {
    //     this.setState({gifs: resjson.data});
    //   })
    //   .catch(error => {
    //     console.log('Error fetching', error)
    //   });
  }

  performSearch = (searchString = 'cats') => {
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchString}&api_key=W1qkPTxUiYKboyoXHLLCPmdYcxaMhzI4&limit=10`)
    .then(response => {
      // handle success
      this.setState({
        gifs: response.data.data,
        loading: false
      });
    })
    .catch(function (error) {
      // handle error
      console.log('Error fetching', error);
    })
    .then(function () {
      console.log('this will always exec')// always executed
});
  }

  render() { 
    console.log(this.state.gifs)
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm performSearch={this.performSearch}/>      
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.loading)
            ? <p>Loading.........</p>
            : <GifList data={this.state.gifs}/> 
          }

          
        </div>
      </div>
    );
  }
}
