import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types"
import ReactEcharts from "echarts-for-react";


const plotLabels = {
    "temperature": "Temperature (°C)",
    "pm25"       : "PM2.5 (µg/m³)",
    "pm10"       : "PM10 (µg/m³)",
    "co2"        : "CO2 (ppm)",
    "rad"        : "RAD",
    "ds18"       : "DS18",
    "voc"        : "VOC",
    "no2"        : "NO2"
};

const mapStateToProps = (state) => {
    return { 
        plotType: state.plotType,
        dataPlot: state.dataPlot
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
                        title: {
                            zoom: 'Click to enable/disable zooming',
                            back: 'Click to restore zooming'
                        },
                        yAxisIndex: 'none'
                    },
                    saveAsImage: {title: 'Click to download plot'}
                },
                iconStyle: {
                    borderColor: '#90969C'
                }
            },
            xAxis: {
                type: 'category',
                data: this.props.dataPlot.date,
                axisLine: {
                    lineStyle: {
                        color: '#7F8082'
                    }
                },
                axisLabel: {
                    rotate: -30,
                    fontSize: 11,
                    margin: 12,
                },
                /*
                axisTick: {
                    alignWithLabel: true,
                },*/
                splitLine: {
                    show: true,       
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(250, 250, 250, 0.3)','rgba(235, 235, 235, 0.3)']
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}',
                    fontSize: 11
                },
                //min: 10,
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
                    data: this.props.dataPlot.plotTypes[this.props.plotType],
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
            },
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
    dataPlot: PropTypes.array
}

export default connect(mapStateToProps)(DataPlot);