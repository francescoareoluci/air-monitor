import { CHANGE_DEVICE } from "../constants/action-types";
import { CHANGE_DEVICE_POSITION } from "../constants/action_types";
import { CHANGE_SUMMARY_DATA } from "../constants/action-types";
import { CHANGE_STARTING_DATE } from "../constants/action-types";
import { CHANGE_ENDING_DATE } from "../constants/action-types";

const initialState = {
    deviceName = "",
    devicePosition = {
        latitude = 0,
        longitude = 0
    },
    summaryData = [],
    startingDate = "",
    endingDate = ""
};

function rootReducer(state = initialState, action) {
    
    // @TODO: depending on action type, change state
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
            summaryData: action.payload
        });
        return newState;
    }
    else if (action.type == CHANGE_STARTING_DATE) {
        // @TODO: add validation 
        const newState = Object.assign({}, state, {
            startingDate: action.payload
        });
        return newState;
    }
    else if (action.type == CHANGE_ENDING_DATE) {
        // @TODO: add validation 
        const newState = Object.assign({}, state, {
            endingDate: action.payload
        });
        return newState;
    }

    return state;
};

export default rootReducer;