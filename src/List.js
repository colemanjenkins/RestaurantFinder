import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { findDOMNode } from "react-dom";
import scrollIntoView from "scroll-into-view"
import PropTypes from "prop-types";

import ListEntry from "./ListEntry"

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mutatedList: []
        }
    }

    // () => { console.log("scrolling to " + restaurant.name); this.scrollTo(restaurant.name) }

    componentDidUpdate(prevProps) {
        if (this.props.sortField !== prevProps.sortField) {
            this.arrangeList();
            console.log("changing sortfield")
        }
        if (this.props.restaurants !== prevProps.restaurants) {
            this.setState({ mutatedList: this.props.restaurants })
            console.log("changing data")
        }
        if (this.props.displayRestaurantIndex !== prevProps.displayRestaurantIndex) {
            const restaurant = this.props.restaurants[this.props.displayRestaurantIndex];
            try {
                console.log("scrolling to " + restaurant.name);
                this.scrollTo(restaurant.name)
            }
            catch(error) {
                console.log(error);
            }
        }
    }

    arrangeList = () => {
        let field = this.props.sortField;
        if (field === "Prominence") {
            this.setState({ mutatedList: this.props.restaurants });
        }
        else if (field === "Open Now") {
            this.setState({ mutatedList: this.props.restaurants.filter(place => place.opening_hours != null && place.opening_hours.open_now) })
        }
        else {
            let sortFunc;
            switch (field) {
                case "Price (Lowest to Highest)":
                    sortFunc = (place, place2) => {
                        // console.log("sorting")
                        let price1 = parseInt(place.price_level) || 1000;
                        let price2 = parseInt(place2.price_level) || 1000
                        // console.log(i + " " + i2);
                        return price1 - price2 // low price first
                    }
                    break;
                case "Price (Highest to Lowest)":
                    sortFunc = (place, place2) => {
                        // console.log("sorting")
                        let price1 = parseInt(place.price_level) || -10;
                        let price2 = parseInt(place2.price_level) || -10;
                        // console.log(i + " " + i2);
                        return -(price1 - price2) // high price first
                    }
                    break;
                case "Rating":
                    sortFunc = (place, place2) => {
                        let rating1 = parseFloat(place.rating) || -10;
                        let rating2 = parseFloat(place2.rating) || -10;
                        return -(rating1 - rating2); // highest comes first
                    }
                    break;
                default:
                    console.log("no sort possible")
            }
            this.setState({ mutatedList: this.props.restaurants.slice().sort(sortFunc) });
        }
    }

    static childContextTypes = {
        scroll: PropTypes.object,
    }
    elements = {};

    register = (name, ref) => {
        this.elements[name] = ref;
    }
    unregister = (name) => {
        delete this.elements[name];
    }
    getChildContext() {
        return {
            scroll: {
                register: this.register,
                unregister: this.unregister
            }
        }
    }

    scrollTo = (name) => {
        const node = findDOMNode(this.elements[name]);
        scrollIntoView(node, {
            time: 500,
            align: {
                top: 0
            }
        })
    }

    render() {
        let count = 0;
        return <div className="list" style={{ textAlign: "left" }}>
            {/* {this.state.mutatedList.map((restaurant) => { return <button onClick={}>{restaurant.name}</button> })} */}
            <Accordion activeKey={this.props.displayRestaurantIndex != null ? this.props.displayRestaurantIndex.toString() : null}>
                {this.state.mutatedList.map(restaurant => {
                    return (
                        <ListEntry restaurant={restaurant}
                            restaurants={this.props.restaurants}
                            setDisplayIndex={this.props.setDisplayIndex}
                            displayRestaurantIndex={this.props.displayRestaurantIndex}
                            name={restaurant.name} />
                    )
                })}
            </Accordion>
        </div>
    }
}