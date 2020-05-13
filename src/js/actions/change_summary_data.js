import { CHANGE_SUMMARY_DATA } from "../constants/action_types";

function createData(date, temp, co2, pm10, pm25) {
    return { date, temp, co2, pm10, pm25 };
}

export function changeSummaryData() {
    const rows = [
        createData('2020/02/07', 20, 6.0, 24, 4.0),
        createData('2020/02/06', 23, 9.0, 37, 4.3),
        createData('2020/02/05', 19, 16.0, 24, 6.0),
        createData('2020/02/04', 22, 3.7, 67, 4.3),
        createData('2020/02/02', 24, 16.0, 49, 3.9),
        createData('2020/02/01', 20, 12.0, 40, 5.6),
        createData('2020/01/30', 18, 5.3, 21, 4.4),
        createData('2020/01/29', 25, 4.6, 32, 5.2),
        createData('2020/01/28', 22, 13.0, 27, 3.2),
        createData('2020/01/27', 21, 4.8, 60, 5.8),
        createData('2020/01/26', 26, 11.3, 43, 4.2),
        createData('2020/01/25', 18, 14.2, 52, 4.7),
        createData('2020/01/24', 17, 11.2, 35, 3.8),
        createData('2020/01/23', 20, 5.7, 45, 5.2),
        createData('2020/01/22', 21, 14.1, 34, 5.9),
        createData('2020/01/21', 23, 10.4, 56, 2.6),
        createData('2020/01/20', 21, 4.6, 42, 3.4)
    ];
    return { type: CHANGE_SUMMARY_DATA, rows }
};