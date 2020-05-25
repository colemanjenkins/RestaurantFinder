import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const restaurants = [
    {
        name: "Blue Mountain Brewery",
        price: 2,
        rating: 4.5,
        location: "9519 Critzers Shop Road, Afton"
    },
    {
        name: "Crozet Pizza",
        price: 2,
        rating: 4.4,
        location: "5794 Three Notched Road, Crozet"
    }
];

export default class List extends Component {
    render() {
        let count = 0;
        return <div style={{ textAlign: "left" }}>
            <Accordion >
                {restaurants.map(restaurant => {
                    return (
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey={count + ""}>
                                    {restaurant.name} - {"$".repeat(restaurant.price)}
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={count++ + ""}>
                                <Card.Body>
                                    rating - {restaurant.rating}

                                    <br></br>location - {restaurant.location}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                })}
            </Accordion>
        </div>
    }
}