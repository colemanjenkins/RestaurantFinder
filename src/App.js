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
      sortField: "Prominence" // default sort returned by Google API
    }
  }

  setData = (new_data) => {
    if (new_data.status === "OK") {
      this.setState({ restaurants: new_data.results })
    }
  }

  // debugging method, will delete
  test = () => {
    console.log(this.state.data)
  }

  setSort = (field) => {
    // console.log("button clicked");
    // console.log(field);
    this.setState({sortField: field})
  }



  render() {
    return (
      <div className="App">
        <TopPanel
          setData={this.setData}
          passSearchInput={this.passSearchInput} 
          setSort={this.setSort}/>
        <List 
          restaurants={this.state.restaurants} 
          sortField={this.state.sortField}/>
        <Map />
        <button onClick={this.test}>Print App.js data</button>
      </div>
    );
  }
}

