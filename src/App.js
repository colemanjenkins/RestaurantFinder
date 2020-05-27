import React, { Component } from 'react';
import './App.css';
import TopPanel from './TopPanel';
import List from "./List";
import Map from "./Map";

import "bootstrap/dist/css/bootstrap.min.css";



const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      SearchText: "",
    }
  }

  setData = (new_data) => {
    this.setState({ data: new_data })
  }

  test = () => {
    console.log("test")
    // require('dotenv').load();

  }

  passSearchInput = (SearchText) => {
    this.setState(() => {
      return {
        SearchText: document.getElementById("SearchText").value
      };
    });
  }

  render() {
    return (
      <div className="App">
        <TopPanel setData={this.setData} passSearchInput={this.passSearchInput} />
        <List />
        <Map />
        <button onClick={this.test}>TEST</button>
      </div>
    );
  }
}

