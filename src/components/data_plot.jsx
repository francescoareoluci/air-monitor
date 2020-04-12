import React from "react";
import ReactEcharts from "echarts-for-react";

const date = ["2020/01/01", "2020/01/02", "2020/01/03", "2020/01/04"];
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
                }
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
                }
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
            ]
        };
    }
    
    render() {
        return (
            <div className="plot-chart">
                <ReactEcharts 
                    option={this.getOption()}  
                />
            </div>
        );
    }
}

export default DataPlot;