import axios from "axios";
import { CHANGE_DEVICES } from "../constants/action_types";
import { 
    URL_PROD_REGISTERED_DEVICES,
    URL_DEV_REGISTERED_DEVICES 
} from "../constants/rest_api";
import { BUILD_VAR, BUILD_PROD } from "../constants/env_vars";


const dispatchDevices = payload => (
    { type: CHANGE_DEVICES, payload }
);

export function changeDevices() {
    return function (dispatch) {
        let payload = [];
        const url = BUILD_VAR === BUILD_PROD ? URL_PROD_REGISTERED_DEVICES : 
                                                URL_DEV_REGISTERED_DEVICES;
                                                
        return axios.get(url)
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
            });
    }
};