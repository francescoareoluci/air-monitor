import { CHANGE_ENDING_DATE } from "../constants/action_types";

export function changeEndingDate(payload) {
    return { type: CHANGE_ENDING_DATE, payload }
};