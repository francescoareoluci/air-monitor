import React from "react";
import positionImage from "../../images/maps.png"
import {withRouter} from 'react-router-dom'

class DeviceInfo extends React.Component {
    constructor(props) {
        super(props);

        this.goToHome = this.goToHome.bind(this)
    }

    goToHome() {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="home">
                <div className="header">
                    <div className="header__text">
                        <h2 onClick={this.goToHome}>
                            Air Monitor
                        </h2>
                    </div>
                </div>
                <div className="dev-name-card">
                    <h2 className="dev-name-card__device-name-text">Device Name</h2>
                    <h2 className="dev-name-card__device-name">SMART09</h2>
                </div>
                <div className="home-map-card">
                    <h2 className="card-title">
                        Device Position
                    </h2>
                    <img className="map-image" src={positionImage} />
                </div>
                <div className="home-map-card">
                    <h2 className="card-title">
                        Data Summary
                    </h2>
                </div>
                <div className="home-map-card">
                    <h2 className="card-title">
                        Data Analysis
                    </h2>
                </div>
            </div>
        );
    }
}

export default DeviceInfo;
