import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class List extends Component {
    arrangeList = (field) => {
        if (field === "Prominence") {
            return this.props.restaurants;
        }
        if (field === "Open now") {
            return this.props.restaurant.filter(place => place.opening_hours.open_now)
        }
        let sortFunc;
        switch (field) {
            case "Price":
                sortFunc = (place, place2) => {
                    // console.log("sorting")
                    let price1 = parseInt(place.price_level) || 1000;
                    let price2 = parseInt(place2.price_level) || 1000
                    // console.log(i + " " + i2);
                    return price1 - price2 // low price first
                }
                break;
            case "Rating":
                sortFunc = (place, place2) => {
                    let rating1 = parseFloat(place.rating) || -10;
                    let rating2 = parseFloat(place2.rating) || -10;
                    return -(rating1 - rating2); // highest comes first
                }
                break;
        }

        return this.props.restaurants.sort(sortFunc);
    }
    render() {
        const restaurants = this.props.restaurants;
        let count = 0;

        return <div style={{ textAlign: "left" }}>
            <Accordion >
                {this.arrangeList(this.props.sortField)
                    .map(restaurant => {
                        return (
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey={count + ""}>
                                        {restaurant.name} {restaurant.price_level != null ? "- " + "$".repeat(restaurant.price_level) : ""}
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={count++ + ""}>
                                    <Card.Body>
                                        Rating - {restaurant.rating}
                                        <br></br>Location - {restaurant.vicinity}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        )
                    })}
            </Accordion>
        </div>
    }
}