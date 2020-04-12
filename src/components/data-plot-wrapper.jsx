import React from "react";
import DataPlot from "./data_plot";
import Select from 'react-select';

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
        this.state = {
            selectedType: plotTypes[0].value
        }

        this.updateTypeSelection = this.updateTypeSelection.bind(this);
    }

    updateTypeSelection(id) {
        this.setState({
            selectedType: id
        });
    }

    render() {
        return (
            <div className="data-plot-wrapper">
                <div className="data-plot-types">
                    {plotTypes.map((type) => (
                        <h2 
                            key={type.value}
                            className={this.state.selectedType == type.value ? "plot-type plot-selected" : "plot-type"} 
                            onClick={() => this.updateTypeSelection(type.value)}>
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
                        defaultValue={plotTypes[0]}
                        isSearchable="false"
                        className="data-plot-select"
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

export default DataPlotWrapper;