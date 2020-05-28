import React, { Component } from 'react';

import TopPanel from './TopPanel';
import List from "./List";
import RestaurantMap from "./Map";

import "bootswatch/dist/yeti/bootstrap.min.css"; 
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";

import dummyData from "./dummydata"
console.log(dummyData);
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [], // array (will be returned by request)
      SearchText: "",
      sortField: "Prominence" // default sort returned by Google API
    }
  }

//   componentDidMount = () => {
//     this.setData(dummyData);
//   }

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
        <div className="display">
          <List restaurants={this.state.restaurants} 
          display={this.state.displayRestaurant} 
          sortField={this.state.sortField}/>
          <RestaurantMap restaurants={this.state.restaurants} changeDisplayRestaurant={this.changeDisplayRestaurant} />
          {/* <button onClick={this.test}>Print App.js data</button> */}
        </div>
      </div>
    );
  }
}