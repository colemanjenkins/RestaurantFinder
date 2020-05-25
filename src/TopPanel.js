import React, {Component} from 'react';
import axios from 'axios'

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export default class TopPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    getData = () => {
        const axios = require("axios");
        
        axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/output?parameters', {
            params: {
                key: GOOGLE_API_KEY
            }
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });  
    }
    render(){
        return <div>
            TopPanel
            <button onClick={this.getData}>Search</button>
        </div>
    }
}