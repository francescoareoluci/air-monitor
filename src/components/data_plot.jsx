import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types"
import ReactEcharts from "echarts-for-react";

const date = ["01/01/20", "02/01/20", "03/01/20", "04/01/20", "05/01/20", "06/01/20"];
const plotTypes = {
    "temperature": [12, 13, 14, 15, 20, 22],
    "pm25"       : [20, 22, 54, 32, 32, 43],
    "pm10"       : [90, 89, 56, 72, 80, 74],
    "co2"        : [23, 23, 56, 43, 32, 45],
    "rad"        : [12, 20, 32, 24, 18, 15],
    "ds18"       : [43, 12, 78, 32, 40, 43],
    "voc"        : [45, 40, 56, 50, 37, 45],
    "no3"        : [32, 54, 32, 34, 40, 36],
};

const plotLabels = {
    "temperature": "Temperature (°C)",
    "pm25"       : "PM2.5 (µg/m³)",
    "pm10"       : "PM10 (µg/m³)",
    "co2"        : "CO2 (ppm)",
    "rad"        : "RAD",
    "ds18"       : "DS18",
    "voc"        : "VOC",
    "no3"        : "NO3"
};

const mapStateToProps = (state) => {
    return { 
        plotType: state.plotType,
    };
};

class DataPlot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedValues: []
        }
    }

    getOption() {
        return {
            tooltip: {
                trigger: 'axis'
            },
                
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        title: 'zoom',
                        yAxisIndex: 'none'
                    },
                    saveAsImage: {title: 'Download'}
                },
                iconStyle: {
                    borderColor: '#90969C'
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date,
                axisLine: {
                    lineStyle: {
                        color: '#7F8082'
                    }
                },
                axisLabel: {
                    rotate: 60
                },
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                },
                min: 10,
                axisLine: {
                    lineStyle: {
                        color: '#7F8082'
                    }
                },
            },
            series: [
                {
                    name: plotLabels[this.props.plotType],
                    type: 'line',
                    data: plotTypes[this.props.plotType],
                    markLine: {
                        data: [
                            {type: 'average', name: 'avg'}
                        ],
                        color: '#51A9FF'
                    },
                    color: '#51A9FF'
                }
            ],
            textStyle: {
                fontFamily: "montserrat-regular",
                fontSize: 10
            }
        };
    }
    
    render() {
        return (
            <div className="plot-chart">
                <ReactEcharts 
                    option={this.getOption()}  
                    style={{ height: "100%" }}
                />
            </div>
        );
    }
}

DataPlot.propTypes = {
    plotType: PropTypes.string,
}

export default connect(mapStateToProps)(DataPlot);