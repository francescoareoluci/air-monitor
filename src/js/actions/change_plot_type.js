import { CHANGE_PLOT_TYPE } from "../constants/action_types";


export function changePlotType(payload) {
    return { type: CHANGE_PLOT_TYPE, payload }
};