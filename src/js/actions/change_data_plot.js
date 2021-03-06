import axios from "axios";
import { CHANGE_DATA_PLOT } from "../constants/action_types";
import { CHANGE_DATA_PLOT_FAIL } from "../constants/action_types";
import {
    URL_PROD_DEVICE_DATA,
    URL_DEV_DEVICE_DATA
} from "../constants/rest_api";
import { BUILD_VAR, BUILD_PROD } from "../constants/env_vars";


function formatDate(date) {
    let d = [date.getFullYear(), ('0' + (date.getMonth() + 1)).slice(-2), ('0' + date.getDate()).slice(-2) ].join('-');
    return d;
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

const dispatchDataPlot = payload => (
    { type: CHANGE_DATA_PLOT, payload }
);

const dispatchDataPlotFailed = state => (
    { type: CHANGE_DATA_PLOT_FAIL, state }
);

export function changeDataPlot(deviceName, startDate, endDate) {
    if (deviceName == null || startDate == null || endDate == null) {
        dispatchDataPlotFailed(true)    
        return    
    }

    return function (dispatch) {
        let payload = {}
        startDate = formatDate(startDate);
        endDate = formatDate(endDate);

        const url = BUILD_VAR === BUILD_PROD ? URL_PROD_DEVICE_DATA(deviceName, startDate, endDate) :
                                                URL_DEV_DEVICE_DATA(deviceName, startDate, endDate);

        return axios.get(url)
            .then(result => {
                let days = [];
                let temperatures = [];
                let pm25Arr = [];
                let pm10Arr = [];
                let co2Arr = [];
                let radArr = [];
                let ds18Arr = [];
                let vocArr = [];
                let no2Arr = [];

                result.data.samples.map((sample) => {
                    // Format date
                    let formattedTime = sample.time.replace(/-/g, "/");
                    formattedTime = formattedTime.replace("_", " h");
                    formattedTime = formattedTime.substring(5);

                    days.push(formattedTime);
                    // Sensors can have missing data,
                    // pushing null data in our arrays
                    // will let the plot handle these misses
                    if (sample.missingData == "false") {
                        temperatures.push(sample.avgTemp);
                        pm25Arr.push(sample.avgPm2_5);
                        pm10Arr.push(sample.avgPm10);
                        co2Arr.push(sample.avgCo2);
                        radArr.push(sample.avgRad);
                        ds18Arr.push(sample.avgDs18);
                        vocArr.push(sample.avgVoc);
                        no2Arr.push(sample.avgNo2);
                    }
                    else {
                        temperatures.push(null);
                        pm25Arr.push(null);
                        pm10Arr.push(null);
                        co2Arr.push(null);
                        radArr.push(null);
                        ds18Arr.push(null);
                        vocArr.push(null);
                        no2Arr.push(null);
                    }
                });

                payload = {
                    date: days,
                    plotTypes: {
                        "temperature": temperatures,
                        "pm25"       : pm25Arr,
                        "pm10"       : pm10Arr,
                        "co2"        : co2Arr,
                        "rad"        : radArr,
                        "ds18"       : ds18Arr,
                        "voc"        : vocArr,
                        "no2"        : no2Arr,
                    }
                }
                dispatch(dispatchDataPlot(payload));
            })
            .catch(error => {
                console.log(error);
                dispatch(dispatchDataPlotFailed(true));
            })
    }
}