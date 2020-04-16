import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types"
import { changePlotType } from "../js/actions/change_plot_type"
import DataPlot from "./data_plot";
import Select from 'react-select';

function mapDispatchToProps(dispatch) {
    return {
        changePlotType: (value) => dispatch(changePlotType(value))
    };
}

const mapStateToProps = (state) => {
    return { 
        plotType: state.plotType,
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
    {value: "no3", label:"NO3"}
];

class DataPlotWrapper extends React.Component {
    constructor(props) {
        super(props);

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
                    <DataPlot></DataPlot>
                </div>
            </div>
        );
    }
}

DataPlotWrapper.propTypes = {
    plotType: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(DataPlotWrapper);