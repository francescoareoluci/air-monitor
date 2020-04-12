import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


let DefaultIcon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow
        });
        L.Marker.prototype.options.icon = DefaultIcon;

//const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet

class CustomMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 43.788113,
            lng: 11.2242957,
          }

          this.log = this.log.bind(this);
    }

    log() {
        console.log("ciao");
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <Map center={position} zoom={this.props.zoom}>
                <TileLayer
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />

                <div className="popup-container">
                <Marker position={position}>
                    <Popup style="border-radius: 4px;">
                            <div className="device-selector-description">
                                <h2>Latitude: {this.state.lat}</h2>
                                <h2>Longitude: {this.state.lng}</h2>
                            </div>
                            { this.props.showPopup &&   /* Render link to device page only on home page */
                            <button className="device-selector-button" onClick={this.props.clickOnDev}>
                                Go!
                            </button>
                            }
                    </Popup>
                </Marker>
                </div>
            </Map>
        );
    }
}

export default CustomMap;