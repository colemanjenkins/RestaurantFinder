import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class List extends Component {
    arrangeList = (field) => {
        if(field == "Prominence"){
            return this.props.restaurants;
        }
        if(field == "Open now"){
            return 
        }
        switch(field){
            case "Price":

                break;
        }
    }
    render() {
        const restaurants = this.props.restaurants;
        let count = 0;
        const sortFunctions = {
            "Price": (place, place2) => {
                console.log("sorting")
                let i = parseInt(place.price_level) || 1000;
                let i2 = parseInt(place2.price_level) || 1000
                console.log(i + " " + i2);
                return i-i2;
            }

        }
        const sortField = "Price";
        
        return <div style={{ textAlign: "left" }}>
            {this.props.sortField}
            <Accordion >
                {this.arrangeList(sortField)
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