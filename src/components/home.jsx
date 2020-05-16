import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import logo from "../images/logo.svg";
import CustomMap from "./leaflet_map";

import { changeDevices } from "../js/actions/change_devices";
import { changeDevicesLoading } from "../js/actions/change_devices_loading";
import { changeSelectedDevice } from "../js/actions/change_selected_device";


function mapDispatchToProps(dispatch) {
    return {
        changeDevices: () => dispatch(changeDevices()),
        changeDevicesLoading: (areLoading) => dispatch(changeDevicesLoading(areLoading)),
        changeSelectedDevice: (device) => dispatch(changeSelectedDevice(device))
    };
}

const mapStateToProps = (state) => {
    return { 
        devices: state.devices,
        areDevicesLoading: state.areDevicesLoading,
        selectedDevice: state.selectedDevice
    };
};

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.handleSelectedDevice = this.handleSelectedDevice.bind(this)
    }

    handleSelectedDevice(device) {
        this.props.changeSelectedDevice(device);
    }

    componentWillMount() {
        this.props.changeDevicesLoading(true);
        this.props.changeDevices();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedDevice !== this.props.selectedDevice) {
            this.props.history.push('/deviceInfo')
        }
    }

    render() {
        return (
            <div className="page-root">
                <div className="header">
                    <img className="header-logo" src={logo} alt="header-logo"/>
                    <div className="header__text">
                        <h2>
                            Air Monitor
                        </h2>
                    </div>
                </div>
                <div className="intro-card">
                    <h1 className="intro-card__title">
                        Air Monitor
                    </h1> 
                    <h3 className="intro-card__subtitle">
                        An open data air quality monitoring application
                    </h3>
                </div>
                <div className="home-map-card">
                    <h2 className="card-title">
                        Devices
                    </h2>
                    <div className="map-image-wrapper">
                        <CustomMap
                            zoom={6}
                            handleSelectedDevice={this.handleSelectedDevice}
                            showPopup="true"
                            devices={this.props.devices}
                        >    
                        </CustomMap>
                        {!this.props.areDevicesLoading &&
                            <div className="map-image__hover">
                                <h2 className="map-image__hover__text">
                                    Click on a device on map to begin
                                </h2>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    devices: PropTypes.array,
    areDevicesLoading: PropTypes.bool,
    selectedDevice: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)