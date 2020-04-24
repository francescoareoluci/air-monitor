import { CHANGE_DATA_PLOT } from "../constants/action_types";

export function changeDataPlot(startDate, endDate) {
    let rand = Math.floor(Math.random() * (20 - 10 + 1) + 10);
    let payload = {
        date: ["01/01/20", "02/01/20", "03/01/20", "04/01/20", "05/01/20", "06/01/20"],
        plotTypes: {
            "temperature": [rand, 13, 14, 15, 20, 22],
            "pm25"       : [20, 22, 54, 32, 32, 43],
            "pm10"       : [90, 89, 56, 72, 80, 74],
            "co2"        : [23, 23, 56, 43, 32, 45],
            "rad"        : [12, 20, 32, 24, 18, 15],
            "ds18"       : [43, 12, 78, 32, 40, 43],
            "voc"        : [45, 40, 56, 50, 37, 45],
            "no3"        : [32, 54, 32, 34, 40, 36],
        }
    };
    return { type: CHANGE_DATA_PLOT, payload }
};