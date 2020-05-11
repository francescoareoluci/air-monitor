import { CHANGE_SUMMARY_DATA_LOADING } from "../constants/action_types";

export function changeSummaryDataLoading(isLoading) {
    return { type: CHANGE_SUMMARY_DATA_LOADING, isLoading }
};