import React from 'react';
import { connect } from "react-redux";
import { Modal } from 'react-responsive-modal';
import PropTypes from 'prop-types';

import 'react-responsive-modal/styles.css';
import scroll from '../images/expand.svg';
import scrollDisabled from '../images/expandDisabled.svg';
import helpIcon from '../images/helpOutline.svg'

import { changeSummaryData } from "../js/actions/change_summary_data";
import { changeSummaryDataLoading } from "../js/actions/change_summary_data_loading";


const displayableRows = 6;

function mapDispatchToProps(dispatch) {
    return {
        changeSummaryData: (deviceName) => dispatch(changeSummaryData(deviceName)),
        changeSummaryDataLoading: (isLoading) => dispatch(changeSummaryDataLoading(isLoading))
    };
}

const mapStateToProps = (state) => {
    return { 
        summaryData: state.summaryData,
        selectedDevice: state.selectedDevice,
        isSummaryDataLoading: state.isSummaryDataLoading,
        isSummaryDataFailed: state.isSummaryDataFailed
    };
};

class SummaryTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isNextScrollEnabled: false,
            isPreviousScrollEnabled: false,
            currentPage: 0,
            isModalOpen: [false, false, false],
            isSummaryDataAvailable: false
        };

        this.increasePage = this.increasePage.bind(this);
        this.decreasePage = this.decreasePage.bind(this);
    }

    increasePage() {
        if (this.props.summaryData == null) {
            return;
        }

        if (displayableRows * (this.state.currentPage + 1) > this.props.summaryData.length) {
            return;
        }

        const nextPage = this.state.currentPage + 1;
        const isNextPageAvailable = displayableRows * (nextPage + 1) >= this.props.summaryData.length ? false : true
        this.setState({
            currentPage: nextPage,
            isPreviousScrollEnabled: true,
            isNextScrollEnabled: isNextPageAvailable
        })
    }

    decreasePage() {
        if (this.state.currentPage === 0) {
            return;
        }

        const nextPage = this.state.currentPage - 1;
        const previousPageAvailable = nextPage === 0 ? false : true;
        this.setState({
            currentPage: nextPage,
            isPreviousScrollEnabled: previousPageAvailable,
            isNextScrollEnabled: true,
            displayRows: []
        })
    }

    onOpenModal(modalId) {
        let newModalState = this.state.isModalOpen;
        newModalState[modalId] = true;
        this.setState({ isModalOpen: newModalState });
    }
     
    onCloseModal(modalId) {
        let newModalState = this.state.isModalOpen;
        newModalState[modalId] = false;
        this.setState({ isModalOpen: newModalState });
    }

    componentDidMount() {
        this.props.changeSummaryDataLoading(true);
        this.props.changeSummaryData(this.props.selectedDevice.name);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.summaryData == null) {
            return;
        }

        if (nextProps.summaryData !== this.props.summaryData) {
            const isNextPageAvailable = displayableRows * (this.state.currentPage + 1) < nextProps.summaryData.length ? true : false;
            let dataAvailable = nextProps.summaryData.length == 0 ? false : true;

            this.setState({
                isNextScrollEnabled: isNextPageAvailable,
                isSummaryDataAvailable: dataAvailable
            });
        }
    }

    render (){
        const dataPageStart = displayableRows * this.state.currentPage;
        const dataPageEnd = displayableRows * (this.state.currentPage + 1);
        const displayRows = this.props.summaryData.slice(dataPageStart, dataPageEnd);

        return (
            <div className="table-header">
                {this.props.isSummaryDataLoading &&
                    <div className="table-alternative">
                        <div className="lds-ring-wrapper">
                            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                        </div>
                    </div>
                }
                {!this.props.isSummaryDataLoading && 
                this.props.isSummaryDataFailed &&
                    <div className="table-alternative">
                        <div className="data-not-available">
                            <h2 className="data-not-available-label">
                                Unable to contact the server to get requested data.
                                Please try again later.
                            </h2>
                        </div>
                    </div>
                }
                {!this.props.isSummaryDataLoading && 
                !this.state.isSummaryDataAvailable && 
                !this.props.isSummaryDataFailed &&
                    <div className="table-alternative">
                        <div className="data-not-available">
                            <h2 className="data-not-available-label">
                                Summary data not available for the selected device.
                            </h2>
                        </div>
                    </div>
                }
                {!this.props.isSummaryDataLoading && 
                this.state.isSummaryDataAvailable && 
                !this.props.isSummaryDataFailed &&
                <div className="table-wrapper">
                    <div className="table-row">
                        <div className="table-cell">
                            <h2 className="table-header-cell">
                                Day
                            </h2>
                        </div>
                        <div className="table-cell">
                            <h2 className="table-header-cell">
                                Temperature
                            </h2>
                        </div>
                        <Modal className="table-modal" open={this.state.isModalOpen[0]} onClose={() => this.onCloseModal(0)} center>
                            <h2 className="modal-content">
                            Carbon dioxide (CO2) is an important trace gas in Earth's atmosphere. 
                            It is an integral part of the carbon cycle, a biogeochemical cycle in which carbon 
                            is exchanged between the Earth's oceans, soil, rocks and the biosphere. 
                            CO2 absorbs and emits infrared radiation and consequently is a greenhouse gas 
                            that plays a significant role in influencing Earth's surface temperature through the greenhouse effect.
                            </h2>
                        </Modal>
                        <div className="table-cell">
                            <div className="table-header-cell clickable"
                                onClick={() => this.onOpenModal(0)}>
                                <h2 className="table-header-cell-text">
                                CO2
                                </h2>
                                <img className="help-icon" src={helpIcon} />
                            </div>
                        </div>
                        <Modal className="table-modal" open={this.state.isModalOpen[1]} onClose={() => this.onCloseModal(1)} center>
                            <h2 className="modal-content">
                            Particulates, also known as particulate matter (PM), are microscopic particles of solid or 
                            liquid matter suspended in the air. Sources of particulate matter can be natural or anthropogenic.
                            They have impacts on climate and precipitation that adversely affect human health, in ways additional 
                            to direct inhalation. Types of atmospheric particles include suspended particulate matter, 
                            thoracic and respirable particles, inhalable coarse particles, which are coarse particles 
                            with a diameter between 2.5 and 10 micrometers (μm) (PM10), fine particles with a diameter of 2.5 μm or less (PM2.5).
                            </h2>
                        </Modal>
                        <div className="table-cell">
                            <div className="table-header-cell clickable"
                                onClick={() => this.onOpenModal(1)}>
                                <h2 className="table-header-cell-text">
                                    PM10
                                </h2>
                                <img className="help-icon" src={helpIcon} />
                            </div>
                        </div>
                        <Modal className="table-modal" open={this.state.isModalOpen[2]} onClose={() => this.onCloseModal(2)} center>
                            <h2 className="modal-content">
                            Particulates, also known as particulate matter (PM), are microscopic particles of solid or 
                            liquid matter suspended in the air. Sources of particulate matter can be natural or anthropogenic.
                            They have impacts on climate and precipitation that adversely affect human health, in ways additional 
                            to direct inhalation. Types of atmospheric particles include suspended particulate matter, 
                            thoracic and respirable particles, inhalable coarse particles, which are coarse particles 
                            with a diameter between 2.5 and 10 micrometers (μm) (PM10), fine particles with a diameter of 2.5 μm or less (PM2.5).
                            </h2>
                        </Modal>
                        <div className="table-cell">
                            <div className="table-header-cell clickable"
                                onClick={() => this.onOpenModal(2)}>
                                <h2 className="table-header-cell-text">
                                PM2.5
                                </h2>
                                <img className="help-icon" src={helpIcon} />
                            </div>
                        </div>
                    </div>
                    <div className="table-body">
                    {displayRows.map((row) => (

                        <div className="table-row" key={row.name}>
                            <div className="table-cell">
                                <h2 className="table-body-cell">
                                    {row.date}
                                </h2>
                            </div>
                            <div className="table-cell">
                                <h2 className="table-body-cell">
                                    {row.temp}
                                </h2>
                            </div>
                            <div className="table-cell">
                                <h2 className="table-body-cell">
                                    {row.co2}
                                </h2>
                            </div>
                            <div className="table-cell">
                                <h2 className="table-body-cell">
                                    {row.pm10}
                                </h2>
                            </div>
                            <div className="table-cell">
                                <h2 className="table-body-cell">
                                    {row.pm25}
                                </h2>
                            </div>
                        </div>

                    ))}
                    </div>
                </div>
                }
                {!this.props.isSummaryDataLoading && this.state.isSummaryDataAvailable &&
                <div className="table-footer">
                        <div className="table-footer-row">
                            <div className="table-footer-cell">
                                <img className="scroll-right" 
                                    src={this.state.isNextScrollEnabled ? scroll : scrollDisabled} 
                                    onClick={this.increasePage} 
                                    alt="next-page" />
                            </div>
                            <div className="table-footer-cell">
                                <img className="scroll-left" 
                                    src={this.state.isPreviousScrollEnabled ? scroll : scrollDisabled} 
                                    onClick={this.decreasePage} 
                                    alt="previous-page" />
                            </div>
                        </div>
                </div>
                }
            </div>
        );
    }
}

SummaryTable.propTypes = {
    summaryData: PropTypes.array,
    selectedDevice: PropTypes.object,
    isSummaryDataLoading: PropTypes.bool,
    isSummaryDataFailed: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryTable);