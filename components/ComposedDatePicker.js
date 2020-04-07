import React, { useState } from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

function ComposedDatePicker(props) {
  const [dateState, setDateState] = useState(null);

  const handleDateChange = date => {
    setDateState(date);
    if ("hoist" in props) {
      props.hoist(date);
    }
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label={props.label ? props.label : "Unlabeled Picker"}
        openTo="year"
        value={dateState}
        views={["year", "month", "date"]}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
      />
    </MuiPickersUtilsProvider>
  );
}

export default ComposedDatePicker;
