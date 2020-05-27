import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import axios from 'axios';
import './TopPanel.css';

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export default class TopPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    getData = () => {
        console.log("test");
        // console.log(process.env.REACT_APP_GOOGLE_API_KEY)
        const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${GOOGLE_API_KEY}&radius=10000&location=38.0293,-78.4767&type=restaurant`;
        
        // let request = new XMLHttpRequest()

        // request.onreadystatechange = function () {
        //     if (request.readyState == XMLHttpRequest.DONE) {
        //         alert(request.responseText);
        //     }
        // }
        // request.open('GET', url, true)
        // request.onload = function () {
        //     // Begin accessing JSON data here
        //     var data = JSON.parse(this.response)

        //     console.log("request")
        //     console.log(data);
            // if (request.status >= 200 && request.status < 400) {
            //     data.forEach(movie => {
            //         console.log(movie.title)
            //     })
            // } else {
            //     console.log('error')
            // }
        // }
        // request.onerror = function () {
        //     console.log("error")
        // }
        // request.onprogress = function() {
        //     console.log("stuff happening")
        // }

        // request.onabort = function () {
        //     console.log("stuff failed")
        // }

        // request.onreadystatechange = function () {
        //     console.log("asdf");
        // }

        fetch(url)
            .then(
                response => response.text() // .json(), etc.
                // same as function(response) {return response.text();}
            ).then(
                html => console.log(html)
            ).catch(error => console.log(error));
    }


    render() {
        return (
            <div>
                <Container className="TopPanel">
                    <Form>
                        <Form.Group>
                            <h3>Restaurant Search</h3>
                            <Form.Control id="SearchText" className="SearchBar" type="textarea" placeholder="Search for a Charlottesville restaurant" />
                        </Form.Group>
                    </Form>
                    <Button onClick={this.getData}
                    > Search</Button>
                </Container>
            </div >
        )
    }
}