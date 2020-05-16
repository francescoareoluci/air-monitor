import React from 'react'
import { connect } from "react-redux";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


const mapStateToProps = (state) => {
    return { 
        areDevicesLoading: state.areDevicesLoading,
    };
}

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

class CustomMap extends React.Component {
    constructor(props) {
        super(props);
        // This state is used only to center the map 
        // when no device are available.
        // Should not occurr, it's a fallback
        this.state = {
            lat: 43.788113,
            lng: 11.2242957,
        }
    }

    isObjectEmpty(obj) {
        for(let key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    render() {
        let position = [];
        let deviceAvailable = false;
        if (this.props.devices.length === 0) {
            // Fallback
            position = [this.state.lat, this.state.lng];
        }
        else {
            if (!this.isObjectEmpty(this.props.devices[0])) {
                // @TODO: is it ok to center on the first device?
                position = [this.props.devices[0].latitude, this.props.devices[0].longitude]
                deviceAvailable = true;
            }
            else {
                // Fallback
                position = [this.state.lat, this.state.lng];
            }
        }

        return (
            <div className="map-wrapper">
                <div className="map-container">
                {this.props.areDevicesLoading &&
                    <div className="lds-ring-wrapper">
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>
                }
                {!deviceAvailable && !this.props.areDevicesLoading &&
                    <div className="data-not-available">
                        <h2 className="data-not-available-label">
                            Unable to get devices position
                        </h2>
                    </div>
                }
                {deviceAvailable && !this.props.areDevicesLoading &&
                    <Map center={position} zoom={this.props.zoom}>
                        <TileLayer
                            url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        />
        
                        <div className="popup-container">
                        {deviceAvailable && this.props.devices.map((device) => (
                        <Marker position={[device.latitude, device.longitude]}>
                            <Popup style="border-radius: 4px;">
                                    <div className="device-selector-description">
                                        <h2>Latitude: {device.latitude}</h2>
                                        <h2>Longitude: {device.longitude}</h2>
                                    </div>
                                    { this.props.showPopup &&   /* Render link to device page only on home page */
                                    <button className="device-selector-button" onClick={() => this.props.handleSelectedDevice(device)}>
                                        Go!
                                    </button>
                                    }
                            </Popup>
                        </Marker>
                        ))}
                        </div>
                    </Map>
                }
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(CustomMap);