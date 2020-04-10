import React from "react";
import mapImg from "../../images/gpsMap.png"
import {withRouter} from 'react-router-dom'


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
            <div className="home">
                <div className="header">
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
                    <div className="map-image-wrapper" onClick={this.goToDevInfo}>
                        <img className="map-image" src={mapImg} />
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