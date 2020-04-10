import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


class DatePicker extends React.Component {

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
      })
    }

    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  //disableToolbar
                  //variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id={this.props.id}
                  label={this.props.title}
                  value={this.state.selectedDate}
                  onChange={this.updateDate}
                  
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
        );
    }
}

export default DatePicker;