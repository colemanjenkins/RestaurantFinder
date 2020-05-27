import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown'

import './TopPanel.css';

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
console.log(GOOGLE_API_KEY)

export default class TopPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchPhrase: "",
        }
        this.updateSearchPhrase = this.updateSearchPhrase.bind(this);
    }

    updateSearchPhrase = (phrase) => {
        this.setState({
            searchPhrase: phrase
        });
    }

    componentDidMount = () => {
        this.getData();
    }

    getData = () => {
        console.log("test");
        const query = this.state.searchPhrase;
        console.log(query);
        // console.log(process.env.REACT_APP_GOOGLE_API_KEY)
        const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${GOOGLE_API_KEY}&radius=100000&location=38.0293,-78.4767&type=restaurant&keyword=${query}`;

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

        fetch(url)
            .then(
                response => response.json()
            ).then(
                data => {
                    console.log(data);
                    this.props.setData(data);
                }
            ).catch(error => console.log(error));

    }

    passSearchInput = (SearchText) => {
        console.log(SearchText);
        this.setState(() => {
            return {
                SearchText: document.getElementById("SearchText").value

            };
        });
    }

    render() {
        const sortVars = ["Prominence",
            "Price (Lowest to Highest)",
            "Price (Highest to Lowest)",
            "Rating",
            "Open Now"]
        return (
            <div>
                <Container className="TopPanel">
                    <Form>
                        <Form.Group>
                            <h3>Charlottesville Restaurant Search</h3>
                            <Form.Control
                                onChange={(e) => this.updateSearchPhrase(e.target.value)}
                                id="SearchText"
                                className="SearchBar"
                                type="textarea"
                                placeholder="Search for a Charlottesville restaurant" />
                        </Form.Group>
                    </Form>
                    <Button onClick={this.getData}>Search</Button>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">Sort by...</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {sortVars.map(field => {
                                return <Dropdown.Item onClick={() => this.props.setSort(field)}>{field}</Dropdown.Item>
                            })}

                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </div >
        )
    }
}