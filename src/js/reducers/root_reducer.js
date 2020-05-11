import { CHANGE_DEVICE, CHANGE_SUMMARY_DATA_LOADING } from "../constants/action_types";
import { CHANGE_DEVICE_POSITION } from "../constants/action_types";
import { CHANGE_SUMMARY_DATA } from "../constants/action_types";
import { CHANGE_STARTING_DATE } from "../constants/action_types";
import { CHANGE_ENDING_DATE } from "../constants/action_types";
import { CHANGE_PLOT_TYPE } from "../constants/action_types";
import { CHANGE_DATA_PLOT } from "../constants/action_types";
import { CHANGE_DATA_PLOT_LOADING } from "../constants/action_types";
import { CHANGE_DEVCE_LOADING } from "../constants/action_types";

// @TODO: remove these lines once the 
// application will get data from cloud
let startDate = new Date();
let tmpDate = startDate.getDate() - 7;
startDate.setDate(tmpDate);

const initialState = {
    deviceName: "",
    devicePosition: {
        latitude: 0,
        longitude: 0
    },
    summaryData: [],
    startingSelectedDate: startDate,
    endingSelectedDate: new Date(),
    plotType: "temperature",
    dataPlot: {},
    isDataPlotLoading: false,
    isDeviceLoading: false,
    isSummaryDataLoading: false,
};

function rootReducer(state = initialState, action) {
    if (action.type == CHANGE_DEVICE) {
        // @TODO: add validation 
        const newState = Object.assign({}, state, {
            deviceName: action.payload
        });
        return newState;
    }
    else if (action.type == CHANGE_DEVICE_POSITION) {
        // @TODO: add validation 
        const newState = Object.assign({}, state, {
            devicePosition: action.payload
        });
        return newState;
    }
    else if (action.type == CHANGE_SUMMARY_DATA) {
        // @TODO: add validation 
        const newState = Object.assign({}, state, {
            summaryData: action.rows,
            isSummaryDataLoading: false
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
            isDataPlotLoading: false
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
    else if (action.type == CHANGE_DEVCE_LOADING) {
        const newState = Object.assign({}, state, {
            isDeviceLoading: action.payload
        });
        return newState; 
    }
    else if (action.type == CHANGE_SUMMARY_DATA_LOADING) {
        const newState = Object.assign({}, state, {
            isSummaryDataLoading: action.isLoading
        });
        return newState; 
    }

    return state;
};

export default rootReducer;