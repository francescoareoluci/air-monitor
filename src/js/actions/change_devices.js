import axios from "axios";
import { CHANGE_DEVICES } from "../constants/action_types";


const dispatchDevices = payload => (
    { type: CHANGE_DEVICES, payload }
);

export function changeDevices() {
    return function (dispatch) {
        let payload = [];
        return axios.get('http://localhost:7071/api/AirMonitorRest?request=getAllDevices')
            .then(result => {
                result.data.devices.map((dev) => {
                    let device = {
                        name: dev.deviceName,
                        latitude: dev.latitude,
                        longitude: dev.longitude
                    }
                    payload.push(device);
                });
                dispatch(dispatchDevices(payload))
            })
            .catch(error => {
                console.log(error);
                dispatch(dispatchDevices(payload))
                // @TODO: handle error
            });
    }
};