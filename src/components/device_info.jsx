import React, { Suspense } from "react";
import { Accordion } from 'react-accessible-accordion';
import { connect } from "react-redux";
import { changeSelectedDevice } from "../js/actions/change_selected_device";
import PropTypes from 'prop-types';

import AccordionCard from "./accordion_card";
import CustomMap from "./leaflet_map";
import SummaryTable from "./summary_table";
import DatePickerCustom from "./date_picker";
import DataPlotWrapper from "./data-plot-wrapper";
import backHome from "../images/backHome.svg";


function mapDispatchToProps(dispatch) {
    return {
        changeSelectedDevice: (device) => dispatch(changeSelectedDevice(device))
    };
}


const mapStateToProps = (state) => {
    return { 
        isDeviceLoading: state.isDeviceLoading,
        selectedDevice: state.selectedDevice
    };
};


class DeviceInfo extends React.Component {
    constructor(props) {
        super(props);

        this.goToHome = this.goToHome.bind(this);
    }

    goToHome() {
        this.props.history.push('/')
    }

    renderTable() {
        return <SummaryTable></SummaryTable>;
    }

    renderPlotCard() {
        return (
            <div className="plot-card">
                <div className="date-picker-wrapper">
                    <DatePickerCustom
                        isStartPicker={true}
                    >
                    </DatePickerCustom>
                    <DatePickerCustom
                        isStartPicker={false}
                    >
                    </DatePickerCustom>
                </div>
                    <DataPlotWrapper>
                    </DataPlotWrapper>
            </div>
        );
    }

    isObjectEmpty(obj) {
        for(let key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    componentWillMount() {
        if (this.isObjectEmpty(this.props.selectedDevice)) {
            // Trying to get info from a previous save
            const deviceName = localStorage.getItem('selectedDeviceName');
            const deviceLatitude = localStorage.getItem('selectedDeviceLatitude');
            const deviceLongitude = localStorage.getItem('selectedDeviceLongitude');
            const selectedDevice = {
                name: deviceName,
                latitude: deviceLatitude,
                longitude: deviceLongitude
            };

            if (this.isObjectEmpty(selectedDevice)) {
                this.goToHome();
            }
            else {
                this.props.changeSelectedDevice(selectedDevice);
            }
        }
        else {
            // Saving state in localstorage to avoid losing it on page refresh
            localStorage.setItem('selectedDeviceName', this.props.selectedDevice.name);
            localStorage.setItem('selectedDeviceLatitude', this.props.selectedDevice.latitude);
            localStorage.setItem('selectedDeviceLongitude', this.props.selectedDevice.longitude);
        }
    }

    render() {
        //console.log(this.props.selectedDevice);
        //const isDeviceAvailable = !this.isObjectEmpty(this.props.selectedDevice);

        return (
            <div className="page-root">
                <div className="header">
                    <img 
                        className="header-logo-back"
                        src={backHome} 
                        onClick={this.goToHome} 
                        alt="header-logo-back" />
                    <div className="header__text">
                        <h2 onClick={this.goToHome}>
                            Air Monitor
                        </h2>
                    </div>
                </div>
                {this.props.isDeviceLoading &&
                    <div className="dev-loading">
                    </div>
                }
                {!this.props.isDeviceLoading && 
                <div className="dev-name-card">
                    <h2 className="dev-name-card__device-name-text">Device Name</h2>
                    <h2 className="dev-name-card__device-name">{this.props.selectedDevice.name}</h2>
                </div>
                }
                {!this.props.isDeviceLoading && 
                <Accordion 
                allowMultipleExpanded="true" 
                allowZeroExpanded="true"
                preExpanded={['collapsable-card-1',
                                'collapsable-card-2',
                                'collapsable-card-3']}
                >
                    <AccordionCard 
                        uuid="collapsable-card-1" 
                        headerTitle="Device Position" 
                        content={<CustomMap 
                                    zoom={17}
                                    devices={[this.props.selectedDevice]}
                                >
                                </CustomMap>}
                    >
                    </AccordionCard>

                    <AccordionCard 
                        uuid="collapsable-card-2" 
                        headerTitle="Data Summary" 
                        content={this.renderTable()}
                    >
                    </AccordionCard>
        
                    <AccordionCard 
                        uuid="collapsable-card-3" 
                        headerTitle="Data Analysis" 
                        content={this.renderPlotCard()}
                    >
                    </AccordionCard>
                </Accordion>
                }
            </div>
        );
    }
}

DeviceInfo.propTypes = {
    isDeviceLoading: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceInfo);