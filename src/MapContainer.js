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

    displayAccidents = (props) => {
        return this.props.accidentList.map((accidents, index) => {
            const onMarkerClick = (evt) => {
                console.log(1);
            };

            return (
                <Marker
                    key={'accidents-' + index}
                    id={index}
                    position={{ lat: accidents.lat, lng: accidents.lng }}
                    description={accidents.name}
                    onClick={onMarkerClick}
                    icon={{ class: "accident-icon", url: 'https://i.imgur.com/bpAojnM.png', scaledSize: new this.props.google.maps.Size(60, 60) }}
                />
            );
        })
    }

    render() {
        const { editing, accidentList, peopleList } = this.props;
        return (
            <Map
                onClick={this.onMapClicked}
                zoom={14}
                initialCenter={{
                    lat: accidentList[0].lat,
                    lng: accidentList[0].lng
                }}
                google={this.props.google}
            >
                {this.displayAccidents()}
            </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDUx9sscMv5qGQCY4XGgGLqAlTld4qXElY'
})(MapContainer);