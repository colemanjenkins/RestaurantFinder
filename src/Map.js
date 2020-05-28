import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import 

export default class RestaurantMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayRestaurant: null,
        }
    }

    changeDisplayRestaurant = (rest) => {
        this.setState({
            displayRestaurant: rest
        })
    }

    //map.setView(new L.LatLng(38.0293, -78.4767),9);
    render() {
        const restaurants = this.props.restaurants;
        return <Map className="map" center={[38.0293, -78.4767]} zoom={13} style={{ height: "75vh", width: "100%" }}>
            {this.state.displayRestaurant !== null && <Popup
                position={[
                    this.state.displayRestaurant.geometry.location.lat,
                    this.state.displayRestaurant.geometry.location.lng
                ]}
                onClose={() => {
                    this.changeDisplayRestaurant(null);
                }}
            >
                <h6>{this.state.displayRestaurant.name} {this.state.displayRestaurant.price_level != null ? "- " + "$".repeat(this.state.displayRestaurant.price_level) : ""}</h6>
                <p>{this.state.displayRestaurant.opening_hours.open_now ? "Open now" : "Currently closed"}
                    <br />Rating - {this.state.displayRestaurant.rating} <br />
                Location - {this.state.displayRestaurant.vicinity}</p></Popup>}
            {/* {activePark && (
                <Popup
                    position={[
                        activePark.geometry.coordinates[1],
                        activePark.geometry.coordinates[0]
                    ]}
                    onClose={() => {
                        setActivePark(null);
                    }}
                >} */}
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