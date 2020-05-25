import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export default class TopPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    getData = () => {
        const axios=require("axios");
        // axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?", {
        //     params: {
        //         key: "000",
        //         radius: 100000,
        //         location: "38.0293,78.4767"
        //     }
        // })
        //     .then(function (response) {
        //         console.log("response received")
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
        //     .then(function () {
        //         // always executed
        //     });
        axios({
            "method":"GET",
            "url":"https://transloc-api-1-2.p.rapidapi.com/stops.json",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"transloc-api-1-2.p.rapidapi.com",
            "x-rapidapi-key":"c96a129019msh032ff6b90f063edp12836cjsn86ac9b68c0ab",
            "useQueryString":true
            },"params":{
            "callback":"call",
            "geo_area":"35.80176%2C-78.64347%7C35.78061%2C-78.68218",
            "agencies":"12%2C16"
            }
            })
            .then((response)=>{
              console.log(response)
            })
            .catch((error)=>{
              console.log(error)
            })
    }
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlID="SearchBar">
                        <Form.Label>Restaurant Search Bar</Form.Label>
                        <Form.Control type="textarea" placeholder="Search for a restaurant" />
                    </Form.Group>
                </Form>
                <Button onClick={this.getData}>Search</Button>
            </div >
        )
    }
}