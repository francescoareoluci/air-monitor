import { CHANGE_DEVICES_LOADING } from "../constants/action_types";

export function changeDevicesLoading(payload) {
    return { type: CHANGE_DEVICES_LOADING, payload }
};