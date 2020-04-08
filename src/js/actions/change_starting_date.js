import { CHANGE_STARTING_DATE } from "../constants/action_types";

export function changeStartingDate(payload) {
    return { type: CHANGE_STARTING_DATE, payload }
};