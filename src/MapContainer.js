import React from 'react';
import ReactDOM from 'react-dom';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { GOOGLE_MAPS_API_KEY } from './variables.js';
export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMarker: {},
            selectedPlace: {},
            markers: [
                {
                    name: "Initial position",
                    position: {
                        lat: 47.6062,
                        lng: -122.3321
                    }
                }
            ],
        };
    }
    // display all map markers, and provide a link to the marker's individual page
    displayMarkers = () => {
        return this.props.accidentList.map((accidents, index) => {
            return (
                <Marker
                    key={index}
                    id={index}
                    position={{ lat: accidents.lat, lng: accidents.long }}
                    description={accidents.name}
                    onClick={this.onMarkerClick}
                />
            );
        })
    }

    // displayGunshots = () => {
    //     return this.props.gunshotList.map((gunshots, index) => {
    //         return (
    //             <Marker
    //                 key={index}
    //                 id={index}
    //                 position={{ lat: gunshots.lat, lng: gunshots.long }}
    //                 description={gunshots.name}
    //                 onClick={this.onMarkerClick}
    //             />
    //         );
    //     })
    // }

    render() {
        const { editing, accidentList } = this.props; // props received from parents (app.js); put "gunshotList" within {}
        return (
            <Map
                onClick={this.onMapClicked}
                zoom={8}
                initialCenter={{ lat: accidentList[0].lat, lng: accidentList[0].long }}
            >          google={this.props.google}
                {this.displayMarkers()}
                {/* this.displayAccidentMarkers */}
            </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: GOOGLE_MAPS_API_KEY
})(MapContainer);