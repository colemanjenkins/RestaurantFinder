import React, { Component } from 'react';

import TopPanel from './TopPanel';
import List from "./List";
import RestaurantMap from "./Map";

import "bootswatch/dist/yeti/bootstrap.min.css";
import './App.css';

import dummyData from "./dummydata"

export default class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         // restaurants: [], // array (will be returned by request)
         restaurants: dummyData, // failsafe in case web requests fail; should be overwritten immediately if they work
         sortField: "Prominence" // default sort returned by Google API
      }
   }

   setData = (new_data) => {
      // prevents setting restaurants to null data; allows sticking to default dummy data
      if (new_data.status === "OK") {
         this.setState({ restaurants: new_data.results })
      }
   }

   setSort = (field) => {
      this.setState({ sortField: field })
   }

   render() {
      return (
         <div className="App">
            <TopPanel
               setData={this.setData}
               passSearchInput={this.passSearchInput}
               setSort={this.setSort} />
            <div className="display">
               <List restaurants={this.state.restaurants}
                  display={this.state.displayRestaurant}
                  sortField={this.state.sortField} />
               <RestaurantMap restaurants={this.state.restaurants} changeDisplayRestaurant={this.changeDisplayRestaurant} />
               {/* <button onClick={this.test}>Print App.js data</button> */}
            </div>
         </div>
      );
   }
}