import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { render } from "@testing-library/react";
import PropTypes from "prop-types";


// const scrollToRef = (ref) => window.scrollTo(0,ref.current.offsetTop)

// ({this.props.restaurant, this.props.restaurants, this.props.setDisplayIndex, displaythis.props.restaurantIndex}) 

class ListEntry extends Component {
    static contextTypes = {
        scroll: PropTypes.object,
    }

    componentDidMount() {
        this.context.scroll.register(this.props.name, this._element);
    }
    componentWillUnmount() {
        this.context.scroll.unregister(this.props.name);
    }

    render() {
        return <Card key={this.props.restaurant.id} ref={ref => this._element = ref}>
            <Card.Header>
                <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey={this.props.restaurants.indexOf(this.props.restaurant).toString()}
                    onClick={(e) => { this.props.setDisplayIndex(this.props.restaurants.indexOf(this.props.restaurant)) }}
                >
                    {this.props.restaurant.name} {this.props.restaurant.price_level != null ? "- " + "$".repeat(this.props.restaurant.price_level) : ""}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={this.props.restaurants.indexOf(this.props.restaurant).toString()}>
                <Card.Body>
                    Rating - {this.props.restaurant.rating}
                    <br />Location - {this.props.restaurant.vicinity}
                    <br />{(this.props.restaurant.opening_hours !== null && this.props.restaurant.opening_hours !== undefined) ?
                        this.props.restaurant.opening_hours ? "Open now" : "Currently closed" : ""}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    }
}

export default ListEntry;