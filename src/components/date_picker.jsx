import React from "react";
import DatePicker from "react-datepicker";

class DatePickerCustom extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date()
        }

        this.updateDate = this.updateDate.bind(this);
    }

    updateDate(date) {
        this.setState({
            selectedDate: date
        });
    }

    render() {
        return (
            <div className="date-picker-container">
                <div className="date-picker-title">
                    {this.props.title}
                </div>
                <div className="date-picker-input">
                    <DatePicker
                        className="date-picker"
                        selected={this.state.selectedDate}
                        onChange={this.updateDate}
                        maxDate={new Date()}
                        dateFormat="dd/MM/yyyy"
                    >
                    </DatePicker>
                    <svg className="calendar" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </div>
            </div>
        );
    }
}

export default DatePickerCustom;