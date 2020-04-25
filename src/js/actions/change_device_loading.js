import { CHANGE_DEVICE_LOADING } from "../constants/action_types";

export function changeDeviceLoading(payload) {
    return { type: CHANGE_DEVICE_LOADING, payload }
};