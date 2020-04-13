import React from "react";
import logo from "../images/logo.svg";
import CustomMap from "./leaflet_map";


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.goToDevInfo = this.goToDevInfo.bind(this)
    }

    goToDevInfo() {
        this.props.history.push('/deviceInfo')
    }

    render() {
        return (
            <div className="root">
                <div className="header">
                    <img className="header-logo" src={logo} />
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
                            clickOnDev={this.goToDevInfo}
                            showPopup="true"
                        >    
                        </CustomMap>
                        <div className="map-image__hover">
                            <h2 className="map-image__hover__text">
                                Click on a device on map to begin
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home