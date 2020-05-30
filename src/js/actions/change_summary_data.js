import axios from "axios";
import { CHANGE_SUMMARY_DATA } from "../constants/action_types";
import { CHANGE_SUMMARY_DATA_FAIL } from "../constants/action_types";
import {
    URL_PROD_SUMMARY_DATA,
    URL_DEV_SUMMARY_DATA
} from "../constants/rest_api";
import { BUILD_VAR, BUILD_PROD } from "../constants/env_vars";


const dispatchSummaryData = rows => (
    { type: CHANGE_SUMMARY_DATA, rows }
);

const dispatchSummaryDataFailed = state => (
    { type: CHANGE_SUMMARY_DATA_FAIL, state }
);

export function changeSummaryData(deviceName) {
    return function (dispatch) {
        let rows = [];
        const url = BUILD_VAR === BUILD_PROD ? URL_PROD_SUMMARY_DATA(deviceName) : 
                                                URL_DEV_SUMMARY_DATA(deviceName);

        return axios.get(url)
            .then(result => {
                result.data.samples.map((sample) => {
                    const formattedTime = sample.time.replace(/-/g, "/");
                    const row = {
                        date: formattedTime,
                        temp: sample.avgTemp,
                        co2: sample.avgCo2,
                        pm10: sample.avgPm10,
                        pm25: sample.avgPm2_5
                    }
                    rows.push(row);
                });
                rows.reverse();
                dispatch(dispatchSummaryData(rows));
            })
            .catch(error => {
                console.log(error);
                dispatch(dispatchSummaryDataFailed(true));
            })
    }
};