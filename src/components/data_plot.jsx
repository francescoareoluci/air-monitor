import React from "react";
import ReactEcharts from "echarts-for-react";

const date = ["01/01/20", "02/01/20", "03/01/20", "04/01/20"];
const temps = [12, 13, 14, 15];

class DataPlot extends React.Component {
    constructor(props) {
        super(props);
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
                    name: 'Day Temp',
                    type: 'line',
                    data: temps,
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

export default DataPlot;