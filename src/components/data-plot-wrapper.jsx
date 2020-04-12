import React from "react";
import DataPlot from "./data_plot";

const plotTypes = ["Temperature", "CO2", "RAD", "PM2.5", "PM10", "DS18", "VOC", "NO3"];

class DataPlotWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedType: plotTypes[0]
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
                            key={type}
                            className={this.state.selectedType == type ? "plot-type plot-selected" : "plot-type"} 
                            onClick={() => this.updateTypeSelection(type)}>
                            {type}
                        </h2>
                    ))}
                </div>
                <div className="data-plot-container">
                    <DataPlot></DataPlot>
                </div>
            </div>
        );
    }
}

export default DataPlotWrapper;