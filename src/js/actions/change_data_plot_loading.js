import { CHANGE_DATA_PLOT_LOADING } from "../constants/action_types";

export function changeDataPlotLoading(payload) {
    return { type: CHANGE_DATA_PLOT_LOADING, payload }
};