const localAddress = 'http://localhost:7071'
const remoteAddress = 'https://pullairmonitordata.azurewebsites.net'

export const URL_PROD_REGISTERED_DEVICES = remoteAddress + '/api/registered-devices';
export const URL_PROD_SUMMARY_DATA = (deviceName) => {
    const url = remoteAddress + '/api/summary-data?device-name=' + deviceName;
    return url;
}
export const URL_PROD_DEVICE_DATA = (deviceName, startDate, endDate) => {
    const url = remoteAddress + '/api/device-data?device-name='
                + deviceName + '&from=' + startDate + '&to=' + endDate;
    return url;
};

export const URL_DEV_REGISTERED_DEVICES = localAddress + '/api/registered-devices';
export const URL_DEV_SUMMARY_DATA = (deviceName) => {
    const url = localAddress + '/api/summary-data?device-name=' + deviceName;
    return url;
}
export const URL_DEV_DEVICE_DATA = (deviceName, startDate, endDate) => {
    const url = localAddress + '/api/device-data?device-name='
                + deviceName + '&from=' + startDate + '&to=' + endDate;
    return url;
};