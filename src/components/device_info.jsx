import React from "react";
import {
    Accordion,
} from 'react-accessible-accordion';

import AccordionCard from "./accordion_card";
import Map from "./map";
import CustomMap from "./leaflet_map";
import SummaryTable from "./summary_table";
import DatePickerCustom from "./date_picker";
import DataPlotWrapper from "./data-plot-wrapper";
import logo from "../../images/logo.svg"

class DeviceInfo extends React.Component {
    constructor(props) {
        super(props);

        this.goToHome = this.goToHome.bind(this)
    }

    goToHome() {
        this.props.history.push('/')
    }

    renderTable() {
        return <SummaryTable></SummaryTable>;
    }

    renderDatePicker() {
        return (
            <div className="plot-card">
                <div className="date-picker-wrapper">
                    <DatePickerCustom
                        title="Start Date"
                    >
                    </DatePickerCustom>
                    <DatePickerCustom
                        title="End Date"
                    >
                    </DatePickerCustom>
                </div>
                <DataPlotWrapper>
                </DataPlotWrapper>
            </div>
        );
    }

    render() {
        return (
            <div className="home">
                <div className="header">
                    <img className="header-logo" src={logo} />
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
                        content={<CustomMap zoom={17}></CustomMap>}
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
                        content={this.renderDatePicker()}
                    >
                    </AccordionCard>

                </Accordion>
            </div>
        );
    }
}

export default DeviceInfo;
