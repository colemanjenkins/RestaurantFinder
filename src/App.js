import React, { Component } from 'react';
import './App.css';
import TopPanel from './TopPanel';
import List from "./List";
import Map from "./Map";

import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [], // array (will be returned by request)
      SearchText: "",
    }
  }

  setData = (new_data) => {
    if (new_data.status === "OK") {
      this.setState({ restaurants: new_data.results })
    }
  }

  test = () => {
    console.log(this.state.data)
    // require('dotenv').load();
  }



  render() {
    return (
      <div className="App">
        <TopPanel setData={this.setData} passSearchInput={this.passSearchInput} />
        <List restaurants={this.state.restaurants} />
        <Map />
        <button onClick={this.test}>Print App.js data</button>
      </div>
    );
  }
}

