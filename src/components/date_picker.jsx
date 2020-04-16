import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import { changeStartingDate } from "../js/actions/change_starting_date"
import { changeEndingDate } from "../js/actions/change_ending_date"

function mapDispatchToProps(dispatch) {
    return {
        changeStartingDate: (date) => dispatch(changeStartingDate(date)),
        changeEndingDate: (date) => dispatch(changeEndingDate(date))
    };
  }
  
const mapStateToProps = (state) => {
    return { 
        startingSelectedDate: state.startingSelectedDate,
        endingSelectedDate: state.endingSelectedDate
    };
};
    

class DatePickerCustom extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startingSelectedDate: new Date(),
            endingSelectedDate: new Date(),
        }

        this.updateDate = this.updateDate.bind(this);
        this.handleDateChangeRaw = this.handleDateChangeRaw.bind(this);
    }

    updateDate(date) {
        if (this.props.isStartPicker) {
            this.props.changeStartingDate(date);
        }
        else {
            this.props.changeEndingDate(date);
        }
    }

    handleDateChangeRaw(event) {
        event.preventDefault();
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
                        selected={this.props.isStartPicker ? this.props.startingSelectedDate : this.props.endingSelectedDate}
                        onChange={this.updateDate}
                        minDate={this.props.isStartPicker ? new Date("2020", "01", "01") : this.props.startingSelectedDate}
                        maxDate={this.props.isStartPicker ? this.props.endingSelectedDate : new Date()}
                        dateFormat="dd/MM/yyyy"
                        onChangeRaw={this.handleDateChangeRaw}
                    >
                    </DatePicker>
                    <svg className="calendar" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </div>
            </div>
        );
    }
}

DatePickerCustom.propTypes = {
    startingSelectedDate: PropTypes.date,
    endingSelectedDate: PropTypes.date,
    isStartPicker: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(DatePickerCustom);