import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import Select from 'react-select'
import { addDays } from "date-fns";


import { updateCheckoutData } from "store/customer/customer-actions";

import FormInput from "components/form-input/form-input.component";

import { ReactComponent as CalendarIcon } from "assets/images/calendar-icon.svg";
import { ReactComponent as TimeIcon } from "assets/images/time-icon.svg";

import styles from "./checkout-steps.module.scss";
import { reactSelectStyles } from "helpers/style-helpers";
import "react-datepicker/dist/react-datepicker.css";

import { timeOptions, daysOptions } from "helpers/options"

const ScheduleStep = (props) => {
    // console.log(props);
    const [state, setState] = useState({
        startDate: new Date(),
        endDate: "",
        startTime: null,
        period: {},
        numberOfTimes: null
    });

    const dispatch = useDispatch();

    const ref = React.createRef();

    const handleChange = (label, data) => {
        setState({ ...state, [label]: data });
    }

    useEffect(() => {
        dispatch(updateCheckoutData(state))
    }, [state])

    const StartDateInput = React.forwardRef((props, ref) => {
        return (
            <div className={styles.date_input} onClick={props.onClick} ref={ref}>
                <FormInput type="text" label="Start Date" value={props.value} onChange={() => null} />
                <CalendarIcon className={styles.input_icon} />
            </div>
        )
    });

    const EndDateInput = React.forwardRef((props, ref) => {
        return (
            <div className={styles.date_input} onClick={props.onClick} ref={ref}>
                <FormInput type="text" label="End Date" value={props.value} onChange={() => null} />
                <CalendarIcon className={styles.input_icon} />
            </div>
        )
    });

    const TimeInput = React.forwardRef((props, ref) => {
        return (
            <div className={styles.date_input} onClick={props.onClick} ref={ref}>
                <FormInput type="text" label="Start Time" value={props.value} onChange={() => null} />
                <TimeIcon className={styles.input_icon} />
            </div>
        )
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Schedule</div>
            <div className={styles.two_cols}>
                <div className={styles.col_one}>
                    <DatePicker
                        selected={state.startDate}
                        onChange={date => handleChange("startDate", date)}
                        startDate={state.startDate}
                        endDate={state.endDate}
                        selectsStart
                        minDate={new Date()}
                        customInput={<StartDateInput ref={ref} />}
                    />
                </div>
                <div className={styles.col_two}>
                    <DatePicker
                        selected={state.endDate}
                        onChange={date => handleChange("endDate", date)}
                        startDate={state.startDate}
                        endDate={state.endDate}
                        selectsEnd
                        minDate={addDays(state.startDate, 1)}
                        customInput={<EndDateInput ref={ref} />}
                    />
                </div>

            </div>
            <div className={styles.two_cols}>
                <div className={styles.col_one}>
                    <DatePicker
                        selected={state.startTime}
                        onChange={time => handleChange("startTime", time)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={60}
                        // timeCaption="Time"
                        dateFormat="h:mm aa"
                        customInput={<TimeInput ref={ref} />}
                    />
                </div>

                <div className={styles.col_two}>
                    <Select
                        options={timeOptions}
                        styles={reactSelectStyles}
                        isClearable={true}
                        isSearchable={true}
                        placeholder="Choose Time"
                        onChange={(selectedOptions) => handleChange("period", selectedOptions)}
                    />
                </div>
            </div>

            <Select
                options={daysOptions}
                isMulti
                styles={reactSelectStyles}
                isClearable={true}
                isSearchable={true}
                placeholder="Choose Days"
                onChange={(selectedOptions) => handleChange("numberOfTimes", selectedOptions)}
            />

        </div>
    )
}

export default ScheduleStep;