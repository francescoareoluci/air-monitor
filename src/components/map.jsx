import React from 'react'
import positionImage from "../../images/maps.png"

class Map extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <img className="map-image" src={positionImage} />
        );
    }
}

export default Map;