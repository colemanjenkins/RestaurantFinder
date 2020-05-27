import React, { Component } from 'react';
import './App.css';
import TopPanel from './TopPanel';
import List from "./List";
import RestaurantMap from "./Map";

import "bootstrap/dist/css/bootstrap.min.css";

const dummyData = {
  "html_attributions" : [],
  "results" : [
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 38.02989309999999,
              "lng" : -78.47547689999999
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 38.03116758029149,
                 "lng" : -78.47417291970849
              },
              "southwest" : {
                 "lat" : 38.0284696197085,
                 "lng" : -78.4768708802915
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id" : "e4e27f433db07955f9786c2afc40de52f394d9e0",
        "name" : "Guadalajara",
        "opening_hours" : {
           "open_now" : false
        },
        "photos" : [
           {
              "height" : 3036,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/108731974968542679979\"\u003eJason Gale\u003c/a\u003e"
              ],
              "photo_reference" : "CmRaAAAAwwtAAU146gIfkqirIA7whXbjcrOR_uFFeAXkRXNTjYaZAxk-Z7FTf9VRmLmI6nGcsS0BJlgJrkIvgstuoy1ANLLgE9Dm6pvZMDUFRajC4auvLuoNPsCy25CSm--XjkXNEhBCtfHPYLpPn-YYjys2UjD9GhQRt8vDRRXxFOI7G6pqzPfDWfMwSg",
              "width" : 4048
           }
        ],
        "place_id" : "ChIJTyKzYieGs4kREUCGOYLpk6c",
        "plus_code" : {
           "compound_code" : "2GHF+XR Charlottesville, Virginia, United States",
           "global_code" : "87C32GHF+XR"
        },
        "price_level" : 1,
        "rating" : 4.3,
        "reference" : "ChIJTyKzYieGs4kREUCGOYLpk6c",
        "scope" : "GOOGLE",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 430,
        "vicinity" : "805 East Market Street, Charlottesville"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 38.0295669,
              "lng" : -78.47796000000001
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 38.0312143802915,
                 "lng" : -78.4767912197085
              },
              "southwest" : {
                 "lat" : 38.0285164197085,
                 "lng" : -78.47948918029152
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id" : "faf20e6a2e1d1c1bdee9c0790ea640c51348a1ea",
        "name" : "Himalayan Fusion",
        "opening_hours" : {
           "open_now" : false
        },
        "photos" : [
           {
              "height" : 3024,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/115451595125996928003\"\u003eAndrew Nash\u003c/a\u003e"
              ],
              "photo_reference" : "CmRaAAAAOvF8pd70pFG6-QdhwcXz-lBcDtBhLDaEVC4-qjyhjlw73XSRQ5HULIOGQpnqV4gVR6QBKVr7-DtiVNyiPdGblaRtXtOd18Ez3CKyb8OxpPC6MWe9EBoZExbkxLCeJdzeEhBmOVBNGHf3DlIhwvS4uD2IGhQMqPl7o3ors_iMrW4eHBu9kEDlSg",
              "width" : 4032
           }
        ],
        "place_id" : "ChIJhWefHSeGs4kREuONhoJL21w",
        "plus_code" : {
           "compound_code" : "2GHC+RR Charlottesville, Virginia, United States",
           "global_code" : "87C32GHC+RR"
        },
        "price_level" : 2,
        "rating" : 4.4,
        "reference" : "ChIJhWefHSeGs4kREuONhoJL21w",
        "scope" : "GOOGLE",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 225,
        "vicinity" : "520 East Main Street, Charlottesville"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 38.0293059,
              "lng" : -78.47667810000002
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 38.0306548802915,
                 "lng" : -78.4753291197085
              },
              "southwest" : {
                 "lat" : 38.0279569197085,
                 "lng" : -78.47802708029151
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id" : "f8cf266a1becf5034ce18c9fa5c44bae5002699e",
        "name" : "Wood grill",
        "place_id" : "ChIJFTjpjE-Hs4kRYdAOnc-m1j8",
        "plus_code" : {
           "compound_code" : "2GHF+P8 Charlottesville, Virginia, United States",
           "global_code" : "87C32GHF+P8"
        },
        "reference" : "ChIJFTjpjE-Hs4kRYdAOnc-m1j8",
        "scope" : "GOOGLE",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "vicinity" : "Charlottesville"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 38.0293059,
              "lng" : -78.47667810000002
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 38.0306548802915,
                 "lng" : -78.4753291197085
              },
              "southwest" : {
                 "lat" : 38.0279569197085,
                 "lng" : -78.47802708029151
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id" : "ceef8f1f7080ab5a40a6fb9371b6380b1091a6c7",
        "name" : "Azteca",
        "place_id" : "ChIJpS2T_yaHs4kRJmEoIgiGNGA",
        "plus_code" : {
           "compound_code" : "2GHF+P8 Charlottesville, Virginia, United States",
           "global_code" : "87C32GHF+P8"
        },
        "reference" : "ChIJpS2T_yaHs4kRJmEoIgiGNGA",
        "scope" : "GOOGLE",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "vicinity" : "Charlottesville"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 38.0298817,
              "lng" : -78.4779606
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 38.0312800302915,
                 "lng" : -78.47679921970848
              },
              "southwest" : {
                 "lat" : 38.0285820697085,
                 "lng" : -78.4794971802915
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id" : "b293e1c62a7524b6ced92d156f9b9d1e08c5736b",
        "name" : "Bashir's",
        "opening_hours" : {
           "open_now" : false
        },
        "photos" : [
           {
              "height" : 3024,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/115451595125996928003\"\u003eAndrew Nash\u003c/a\u003e"
              ],
              "photo_reference" : "CmRaAAAA9EKZ-cLAG0GsgD9hZ3-ASAhywdZpm-vMs6AO2L0Dv8WYfF6hreCak0nz6JBX1ZBazTStBqrcsDRfpwfLda01_SG6JndRz2oprgxiRm0IMukHDZCWfUfDSKMSePQwegR6EhAENggLA5wPp28iWgS39PNXGhTiwI4IBqzbg3HMB2uGX236k6a5Lg",
              "width" : 4032
           }
        ],
        "place_id" : "ChIJHU0E4yaGs4kRuCzvGoFNmzI",
        "plus_code" : {
           "compound_code" : "2GHC+XR Charlottesville, Virginia, United States",
           "global_code" : "87C32GHC+XR"
        },
        "price_level" : 2,
        "rating" : 4.2,
        "reference" : "ChIJHU0E4yaGs4kRuCzvGoFNmzI",
        "scope" : "GOOGLE",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 42,
        "vicinity" : "507 East Main Street, Charlottesville"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 38.0303811,
              "lng" : -78.47693819999999
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 38.0316679302915,
                 "lng" : -78.4756239197085
              },
              "southwest" : {
                 "lat" : 38.0289699697085,
                 "lng" : -78.4783218802915
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id" : "6329a5f26091b592351081c47b690cdb3b5397aa",
        "name" : "Tin Whistle Pub",
        "opening_hours" : {
           "open_now" : false
        },
        "photos" : [
           {
              "height" : 3024,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/105509553038982717852\"\u003eAndrew Warren\u003c/a\u003e"
              ],
              "photo_reference" : "CmRaAAAAGCS3TraqnC3CIDkGsCl52g_Dp85S3ffR5Ud6PSkk2WU36UzY3eQTo9qXzgZlbjEOIaP6HJNA15WVN5QDF6T_bp6XJMGxI5t99ZvmyVT-u1_kEFWDBUS_MHHI8rWVdea7EhBerDVb9pXXYXdvC1d1Auk0GhT8diY4ya2pDkHQudkqLEzXnmqvDg",
              "width" : 4032
           }
        ],
        "place_id" : "ChIJsbbhByeGs4kRnOf5pBSDiCQ",
        "plus_code" : {
           "compound_code" : "2GJF+56 Charlottesville, Virginia, United States",
           "global_code" : "87C32GJF+56"
        },
        "price_level" : 2,
        "rating" : 4.5,
        "reference" : "ChIJsbbhByeGs4kRnOf5pBSDiCQ",
        "scope" : "GOOGLE",
        "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 221,
        "vicinity" : "609 East Market Street, Charlottesville"
     }
  ],
  "status" : "OK"
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [], // array (will be returned by request)
      SearchText: "",
      sortField: "Prominence" // default sort returned by Google API
    }
  }

//   componentDidMount = () => {
//     this.setData(dummyData);
//   }

  setData = (new_data) => {
    if (new_data.status === "OK") {
      this.setState({ restaurants: new_data.results })
    }
  }

  // debugging method, will delete
  test = () => {
    console.log(this.state.data)
  }

  setSort = (field) => {
    // console.log("button clicked");
    // console.log(field);
    this.setState({sortField: field})
  }

  render() {
    return (
      <div className="App">
        <TopPanel
          setData={this.setData}
          passSearchInput={this.passSearchInput} 
          setSort={this.setSort}/>
        <div className="display">
          <List restaurants={this.state.restaurants} 
          display={this.state.displayRestaurant} 
          sortField={this.state.sortField}/>
          <RestaurantMap restaurants={this.state.restaurants} changeDisplayRestaurant={this.changeDisplayRestaurant} />
          {/* <button onClick={this.test}>Print App.js data</button> */}
        </div>
      </div>
    );
  }
}