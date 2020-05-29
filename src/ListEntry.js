import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ListEntry = ({restaurant, restaurants, setDisplayIndex}) => {
    return <Card key={restaurant.id}>
        <Card.Header>
            <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey={restaurants.indexOf(restaurant).toString()}
                onClick={(e) => { setDisplayIndex(restaurants.indexOf(restaurant)) }}
            >
                {restaurant.name} {restaurant.price_level != null ? "- " + "$".repeat(restaurant.price_level) : ""}
            </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={restaurants.indexOf(restaurant).toString()}>
            <Card.Body>
                Rating - {restaurant.rating}
                <br />Location - {restaurant.vicinity}
                <br />{(restaurant.opening_hours !== null && restaurant.opening_hours !== undefined) ?
                    restaurant.opening_hours ? "Open now" : "Currently closed" : ""}
            </Card.Body>
        </Accordion.Collapse>
    </Card>
}

export default ListEntry;