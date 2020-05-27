import React, { Component } from 'react';
import './App.css';
import TopPanel from './TopPanel';
import List from "./List";
import RestaurantMap from "./Map";

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

  // debugging method, will delete
  test = () => {
    console.log(this.state.data)
  }



  render() {
    return (
      <div className="App">
        <TopPanel
          setData={this.setData}
          passSearchInput={this.passSearchInput} />
        <div className="display">
          <List restaurants={this.state.restaurants} display={this.state.displayRestaurant} />
          <RestaurantMap restaurants={this.state.restaurants} changeDisplayRestaurant={this.changeDisplayRestaurant} />
          {/* <button onClick={this.test}>Print App.js data</button> */}
        </div>
      </div>
    );
  }
}

/*
Price
Rating
Open now
Prominence (just default)
*/