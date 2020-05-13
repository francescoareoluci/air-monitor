import { CHANGE_DEVICES } from "../constants/action_types";

export function changeDevices() {
    let payload = [
        {
            name: "SMART09",
            latitude: 43.788113,
            longitude: 11.2242957
        }
    ];
    return { type: CHANGE_DEVICES, payload }
};