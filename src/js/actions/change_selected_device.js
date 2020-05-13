import { CHANGE_SELECTED_DEVICE } from "../constants/action_types";

export function changeSelectedDevice(device) {
    const payload = device;
    return { type: CHANGE_SELECTED_DEVICE, payload }
};