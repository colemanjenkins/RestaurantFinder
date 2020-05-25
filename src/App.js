import React, {Component} from 'react';
import './App.css';
import TopPanel from './TopPanel';
import List from "./List";
import Map from "./Map";

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <TopPanel />
        <List />
        <Map />
      </div>
    );
  }
}

