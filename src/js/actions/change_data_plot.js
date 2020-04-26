import axios from "axios";
import { CHANGE_DATA_PLOT } from "../constants/action_types";

function formatDate(date) {
    let d = [('0' + date.getDate()).slice(-2), ('0' + (date.getMonth() + 1)).slice(-2), date.getFullYear()].join('/');

    return d.slice(0, d.length-2);
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(formatDate(new Date (currentDate)));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

function generateData(count) {
    let arr = [];
    count += 1;
    for (let i = 0; i < count; i += 1) {
        let rand = Math.floor(Math.random() * (20 - 10 + 1) + 10);
        arr.push(rand);
    }
    
    return arr;
}

export function changeDataPlot(startDate, endDate) {
    //axios.get(`https://jsonplaceholder.typicode.com/users`).then((result) => 
    //{
    //    const people = result.data;
    //    this.setState({ 
    //      people: people });
    //})

    const diffTime = Math.abs(endDate - startDate);
    const dateDiffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    //console.log(dateDiffDays);

    let start = formatDate(startDate);
    let end = formatDate(endDate);

    let days = getDates(startDate, endDate);
    //console.log(days);

    let temperatures = generateData(dateDiffDays);
    let pm25Arr = generateData(dateDiffDays);
    let pm10Arr = generateData(dateDiffDays);
    let co2Arr = generateData(dateDiffDays);
    let radArr = generateData(dateDiffDays);
    let ds18Arr = generateData(dateDiffDays);
    let vocArr = generateData(dateDiffDays);
    let no3Arr = generateData(dateDiffDays);

    let payload = {
        //date: ["01/01/20", "02/01/20", "03/01/20", "04/01/20", "05/01/20", "06/01/20"],
        date: days,
        plotTypes: {
            "temperature": temperatures,
            "pm25"       : pm25Arr,
            "pm10"       : pm10Arr,
            "co2"        : co2Arr,
            "rad"        : radArr,
            "ds18"       : ds18Arr,
            "voc"        : vocArr,
            "no3"        : no3Arr,
        }
    };
    return { type: CHANGE_DATA_PLOT, payload }
};