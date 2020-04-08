import { CHANGE_SUMMARY_DATA } from "../constants/action_types";

export function changeSummaryData(payload) {
    return { type: CHANGE_SUMMARY_DATA, payload }
};