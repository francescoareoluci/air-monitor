import { CHANGE_DEVICE_POSITION } from "../constants/action_types";

export function changeDevicePosition(payload) {
    return { type: CHANGE_DEVICE_POSITION, payload }
};