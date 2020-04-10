import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import AccordionCard from "./accordion_card";
import Map from "./map";
import SummaryTable from "./summary_table";
import DatePicker from "./date_picker";


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
            <div className="date-picker-wrapper">
                <div className="picker-container">
                    <DatePicker id="start-date-picker" title="Start Date" >
                    </DatePicker>
                </div>
                <div className="picker-container">
                    <DatePicker id="end-date-picker" title="End Date" >
                    </DatePicker>
                </div>
            </div>
        );
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
                        content={<Map></Map>}
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
