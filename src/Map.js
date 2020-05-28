import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import 

export default class RestaurantMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // displayRestaurant: null,
        }
    }

    changeDisplayRestaurant = (rest) => {
        this.setState({
            displayRestaurant: rest
        })
        this.props.setDisplayIndex(this.props.restaurants.indexOf(rest))
    }

    //map.setView(new L.LatLng(38.0293, -78.4767),9);
    render() {
        const restaurants = this.props.restaurants;
        // console.log(this.props.displayRestaurant);
        return <Map className="map" center={[38.0293, -78.4767]} zoom={14} style={{ height: "85vh", width: "100%" }}>
            {this.props.displayRestaurant !== null && this.props.displayRestaurant !== undefined && <Popup
                position={[
                    this.props.displayRestaurant.geometry.location.lat,
                    this.props.displayRestaurant.geometry.location.lng
                ]}
                onClose={() => {
                    this.changeDisplayRestaurant(null);
                }}
            >
                <h6>{this.props.displayRestaurant.name} {this.props.displayRestaurant.price_level != null ? "- " + "$".repeat(this.props.displayRestaurant.price_level) : ""}</h6>
                <p>{this.props.displayRestaurant.opening_hours !== null && this.props.displayRestaurant.opening_hours !== undefined ? this.props.displayRestaurant.opening_hours.open_now ? "Open now" : "Currently closed" : ""}
                    <br />Rating - {this.props.displayRestaurant.rating} <br />
                Location - {this.props.displayRestaurant.vicinity}</p></Popup>}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {restaurants.map(restaurant => {
                return <Marker
                    key={restaurant.id}
                    position={
                        [
                            restaurant.geometry.location.lat,
                            restaurant.geometry.location.lng
                        ]}
                    onClick={() => {
                        this.changeDisplayRestaurant(restaurant);
                    }} />
            })}
        </Map>
    }
}