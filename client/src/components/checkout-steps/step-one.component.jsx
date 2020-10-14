import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format, addDays, differenceInCalendarMonths } from "date-fns";

import FormInput from "components/form-input/form-input.component";

import { ReactComponent as CalendarIcon } from "assets/images/calendar-icon.svg";

import styles from "./checkout-steps.module.scss";
import "react-datepicker/dist/react-datepicker.css";

const StepOne = (props) => {
    // console.log(props)
    const [state, setState] = useState({
        startDate: new Date(),
        enDate: addDays(new Date(), 1),
        fullname: "",
    });

    const ref = React.createRef();

    const handleChange = (e) => {
        // const { name, value } = e.target;
        // setState({ ...state, [name]: value });
    };

    const onDateChange = (dates) => {
        const [start, end] = dates;
        setState({
            ...state,
            startDate: start,
            endDate: end,
        });
    };

    const DateInput = React.forwardRef((props, ref) => {
        console.log(props)
        return (
            <div className={styles.date_input} onClick={props.onClick} ref={ref}>
                <FormInput type="text" label="Select Date" value={props.value} onChange={() => null} />
                <CalendarIcon className={styles.calendar_icon} />
            </div>
        )
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.two_cols}>
                <div className={styles.col_one}>
                    <DatePicker
                        selected={state.startDate}
                        onChange={date => setState({ ...state, startDate: date })}
                        startDate={state.startDate}
                        endDate={state.endDate}
                        selectsStart
                        minDate={new Date()}
                        customInput={<DateInput ref={ref} />}
                    />
                </div>
                <div className={styles.col_two}>
                    <DatePicker
                        selected={state.endDate}
                        onChange={date => setState({ ...state, endDate: date })}
                        startDate={state.startDate}
                        endDate={state.endDate}
                        selectsEnd
                        minDate={addDays(state.startDate, 1)}
                        customInput={<DateInput ref={ref} />}
                    />
                </div>

            </div>
            <div className={styles.two_cols}>
                <div className={styles.col_one}>
                    <FormInput
                        type="text"
                        name="fullname"
                        value={state.fullname}
                        onChange={handleChange}
                        label="Full name"
                        required
                    />
                </div>
            </div>

        </div>
    )
}

export default StepOne;