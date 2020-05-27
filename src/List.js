import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class List extends Component {
    render() {
        const restaurants = this.props.restaurants;
        let count = 0;
        return <div style={{ textAlign: "left" }}>
            <Accordion >
                {restaurants.map(restaurant => {
                    return (
                        <Card key={restaurant.id}>
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