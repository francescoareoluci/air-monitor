import { CHANGE_SELECTED_DEVICE, CHANGE_SUMMARY_DATA_LOADING } from "../constants/action_types";
import { CHANGE_DEVICES } from "../constants/action_types";
import { CHANGE_SUMMARY_DATA } from "../constants/action_types";
import { CHANGE_STARTING_DATE } from "../constants/action_types";
import { CHANGE_ENDING_DATE } from "../constants/action_types";
import { CHANGE_PLOT_TYPE } from "../constants/action_types";
import { CHANGE_DATA_PLOT } from "../constants/action_types";
import { CHANGE_DATA_PLOT_LOADING } from "../constants/action_types";
import { CHANGE_DEVICES_LOADING } from "../constants/action_types";
import { CHANGE_SUMMARY_DATA_FAIL } from "../constants/action_types";
import { CHANGE_DATA_PLOT_FAIL } from "../constants/action_types";


// Initial plot start date: 8 days ago
let startDate = new Date();
let tmpStartDate = startDate.getDate() - 8;
startDate.setDate(tmpStartDate);

// Initial plot end date: yesterday
let endDate = new Date()
let tmpEndDate = endDate.getDate() - 1;
endDate.setDate(tmpEndDate);

const initialState = {
    devices: [],
    selectedDevice: {},
    summaryData: [],
    startingSelectedDate: startDate,
    endingSelectedDate: endDate,
    plotType: "temperature",
    dataPlot: {},
    isDataPlotLoading: false,
    areDevicesLoading: false,
    isSummaryDataLoading: false,
    isSummaryDataFailed: false,
    isDataPlotFailed: false
};

function rootReducer(state = initialState, action) {
    if (action.type == CHANGE_SELECTED_DEVICE) {
        // @TODO: add validation 
        const newState = Object.assign({}, state, {
            selectedDevice: action.payload
        });
        return newState;
    }
    else if (action.type == CHANGE_DEVICES) {
        // @TODO: add validation 
        const newState = Object.assign({}, state, {
            devices: action.payload,
            areDevicesLoading: false
        });
        return newState;
    }
    else if (action.type == CHANGE_SUMMARY_DATA) {
        // @TODO: add validation 
        const newState = Object.assign({}, state, {
            summaryData: action.rows,
            isSummaryDataLoading: false,
            isSummaryDataFailed: false
        });
        return newState;
    }
    else if (action.type == CHANGE_STARTING_DATE) {
        if (state.startingSelectedDate.getTime() !== action.payload.getTime()) {
            const newState = Object.assign({}, state, {
                startingSelectedDate: action.payload
            });
            return newState;
        }
    }
    else if (action.type == CHANGE_ENDING_DATE) {
        if (state.endingSelectedDate.getTime() !== action.payload.getTime()) {
            const newState = Object.assign({}, state, {
                endingSelectedDate: action.payload
            });
            return newState;
        }
    }
    else if (action.type == CHANGE_PLOT_TYPE) {
        // @TODO: add validation 
        const newState = Object.assign({}, state, {
            plotType: action.payload
        });
        return newState;
    }
    else if (action.type == CHANGE_DATA_PLOT) {
        // @TODO: add validation 
        const newState = Object.assign({}, state, {
            dataPlot: action.payload,
            isDataPlotLoading: false,
            isDataPlotFailed: false
        });
        return newState; 
    }
    else if (action.type == CHANGE_DATA_PLOT_LOADING) {
        // @TODO: add validation 
        const newState = Object.assign({}, state, {
            isDataPlotLoading: action.payload
        });
        return newState; 
    }
    else if (action.type == CHANGE_DEVICES_LOADING) {
        const newState = Object.assign({}, state, {
            areDevicesLoading: action.payload
        });
        return newState; 
    }
    else if (action.type == CHANGE_SUMMARY_DATA_LOADING) {
        const newState = Object.assign({}, state, {
            isSummaryDataLoading: action.isLoading
        });
        return newState; 
    }
    else if (action.type == CHANGE_SUMMARY_DATA_FAIL) {
        const newState = Object.assign({}, state, {
            isSummaryDataFailed: action.state,
            isSummaryDataLoading: false
        });
        return newState;
    }
    else if (action.type == CHANGE_DATA_PLOT_FAIL) {
        const newState = Object.assign({}, state, {
            isDataPlotFailed: action.state,
            isDataPlotLoading: false
        });
        return newState;
    }

    return state;
};

export default rootReducer;