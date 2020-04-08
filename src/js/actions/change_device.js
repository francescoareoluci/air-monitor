import { CHANGE_DEVICE } from "../constants/action_types";

export function changeDevice(payload) {
    return { type: CHANGE_DEVICE, payload }
};