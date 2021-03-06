import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import DataPlot from "./data_plot";
import Select from 'react-select';

import { changePlotType } from "../js/actions/change_plot_type";
import { changeDataPlot } from "../js/actions/change_data_plot";
import { changeDataPlotLoading } from "../js/actions/change_data_plot_loading";


function mapDispatchToProps(dispatch) {
    return {
        changePlotType: (value) => dispatch(changePlotType(value)),
        changeDataPlot: (deviceName, startDate, endDate) => dispatch(changeDataPlot(deviceName, startDate, endDate)),
        changeDataPlotLoading: (isDataPlotLoading) => dispatch(changeDataPlotLoading(isDataPlotLoading))
    };
}

const mapStateToProps = (state) => {
    return { 
        plotType: state.plotType,
        startingSelectedDate: state.startingSelectedDate,
        endingSelectedDate: state.endingSelectedDate,
        dataPlot: state.dataPlot,
        isDataPlotLoading: state.isDataPlotLoading,
        selectedDevice: state.selectedDevice,
        isDataPlotFailed: state.isDataPlotFailed
    };
};

const plotTypes = [
    {value: "temperature", label:"Temperature"},
    {value: "co2", label:"CO2"},
    {value: "rad", label:"RAD"},
    {value: "pm25", label:"PM2.5"},
    {value: "pm10", label:"PM10"},
    {value: "ds18", label: "DS18"},
    {value: "voc", label:"VOC"},
    {value: "no2", label:"NO2"}
];

class DataPlotWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDataAvailable: false,
        }

        this.updateTypeSelection = this.updateTypeSelection.bind(this);
        this.getIndexById = this.getIndexById.bind(this);
    }

    updateTypeSelection(type) {
        this.props.changePlotType(type.value);
    }

    getIndexById(id) {
        for (let i = 0; i < plotTypes.length; i += 1) {
            if (id == plotTypes[i].value) {
                return i;
            }
        }
        // Fallback
        return 0;   
    }

    componentWillMount() {
        this.props.changeDataPlotLoading(true);
        this.props.changeDataPlot(this.props.selectedDevice.name, this.props.startingSelectedDate, this.props.endingSelectedDate);
    }

    componentWillReceiveProps(nextProps) {
        if ((nextProps.startingSelectedDate !== this.props.startingSelectedDate) ||
            (nextProps.endingSelectedDate !== this.props.endingSelectedDate)) {
                this.props.changeDataPlotLoading(true);
                this.props.changeDataPlot(this.props.selectedDevice.name, nextProps.startingSelectedDate, nextProps.endingSelectedDate);
        }
        if (nextProps.dataPlot !== this.props.dataPlot) {
            if (nextProps.dataPlot.date == null) {
                return;
            }

            let dataAvailable = nextProps.dataPlot.date.length == 0 ? false : true;
            this.setState({
                isDataAvailable: dataAvailable
            })
        }
    }

    // A tricky way to disable keyboard on mobile devices
    componentDidMount() {
        let select = document.getElementById("react-select-2-input");
        if (select !== null) {
            select.setAttribute("readOnly", true);
        }
    };

    render() {
        return (
            <div className="data-plot-wrapper">
                <div className="data-plot-types">
                    {plotTypes.map((type) => (
                        <h2 
                            key={type.value}
                            className={this.props.plotType == type.value ? "plot-type plot-selected" : "plot-type"} 
                            onClick={() => this.updateTypeSelection(type)}>
                            {type.label}
                        </h2>
                    ))}
                </div>
                <div className="data-plot-type-select">
                    <h2 className="data-plot-select-title">
                        Choose a data type:
                    </h2>
                    <Select 
                        options={plotTypes}
                        defaultValue={plotTypes[this.getIndexById(this.props.plotType)]}
                        isSearchable="false"
                        className="data-plot-select"
                        onChange={this.updateTypeSelection}
                        theme={(theme) => ({
                            ...theme,
                            colors: {
                            ...theme.colors,
                              primary25: '#E4F3FF',
                              primary: '#51A9FF',
                            },
                        })}
                    />
                </div>
                <div className="data-plot-container">
                    {this.props.isDataPlotLoading &&
                        <div className="lds-ring-wrapper">
                            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                        </div>
                    }
                    {!this.props.isDataPlotLoading && 
                    this.props.isDataPlotFailed &&
                        <div className="data-plot-not-available">
                            <h2 className="data-not-available-label">
                                Unable to contact the server to get requested data.
                                Please try again later.
                            </h2>
                        </div>
                    }
                    {!this.props.isDataPlotLoading && 
                    !this.state.isDataAvailable && 
                    !this.props.isDataPlotFailed &&
                        <div className="data-plot-not-available">
                            <h2 className="data-not-available-label">
                                Data not available for the selected days.
                                Please select a different time range.
                            </h2>
                        </div>
                    }
                    {!this.props.isDataPlotLoading && 
                    this.state.isDataAvailable && 
                    !this.props.isDataPlotFailed &&
                        <DataPlot>
                        </DataPlot>
                    }
                </div>
            </div>
        );
    }
}

DataPlotWrapper.propTypes = {
    plotType: PropTypes.string,
    startingSelectedDate: PropTypes.instanceOf(Date),
    endingSelectedDate: PropTypes.instanceOf(Date),
    dataPlot: PropTypes.object,
    isDataPlotLoading: PropTypes.bool,
    selectedDevice: PropTypes.object,
    isDataPlotFailed: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(DataPlotWrapper);