import axios from "axios";
import { CHANGE_SUMMARY_DATA } from "../constants/action_types";


const dispatchSummaryData = rows => (
    { type: CHANGE_SUMMARY_DATA, rows }
);

export function changeSummaryData(deviceName) {
    return function (dispatch) {
        let rows = [];
        return axios.get('http://localhost:7071/api/AirMonitorRest?request=getDeviceSummary&name=' + deviceName)
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
                dispatch(dispatchSummaryData(rows))
            })
            .catch(error => {
                console.log(error);
                dispatch(dispatchSummaryData(rows))
                // @TODO: handle error
            })
    }
};