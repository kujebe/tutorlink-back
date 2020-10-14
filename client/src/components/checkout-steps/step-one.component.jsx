import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from 'react-select'
import { format, addDays, differenceInCalendarMonths } from "date-fns";

import FormInput from "components/form-input/form-input.component";

import { ReactComponent as CalendarIcon } from "assets/images/calendar-icon.svg";
import { ReactComponent as TimeIcon } from "assets/images/time-icon.svg";

import styles from "./checkout-steps.module.scss";
import "react-datepicker/dist/react-datepicker.css";

const StepOne = (props) => {
    // console.log(props)
    const [state, setState] = useState({
        startDate: new Date(),
        enDate: "",
        startTime: "",
        period: {},
        numberOfTimes: null
    });

    const ref = React.createRef();
    const timeOptions = [
        { value: '1', label: '1 Hour' },
        { value: '2', label: '2 Hour' },
        { value: '3', label: '3 Hour' },
        { value: '4', label: '4 Hour' },
        { value: '5', label: '5 Hour' },
        { value: '6', label: '6 Hour' },
        { value: '7', label: '7 Hour' },
        { value: '8', label: '8 Hour' },
        { value: '8', label: '8 Hour' },
        { value: '10', label: '9 Hour' },
    ];
    const daysOptions = [
        { value: 'Monday', label: 'Monday' },
        { value: 'Tuesday', label: 'Tuesday' },
        { value: 'Wednesday', label: 'Wednesday' },
        { value: 'Thursday', label: 'Thursday' },
        { value: 'Friday', label: 'Friday' },
        { value: 'Saturday', label: 'Saturday' },
        { value: 'Sunday', label: 'Sunday' },
    ];

    const selectStyles = {
        control: (styles) => (
            {
                ...styles,
                margin: "20px 0",
                borderTop: "none",
                borderRight: "none",
                borderBottom: "1px solid #aaaaaa",
                borderLeft: "none",
                borderRadius: "none",
                boxShadow: "none"
            }
        )
    }

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
            <div className={styles.two_cols}>
                <div className={styles.col_one}>
                    <DatePicker
                        selected={state.startDate}
                        onChange={date => setState({ ...state, startDate: date })}
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
                        onChange={date => setState({ ...state, endDate: date })}
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
                        onChange={date => setState({ ...state, startTime: date })}
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
                        styles={selectStyles}
                        isClearable={true}
                        isSearchable={true}
                        placeholder="Choose Time"
                        onChange={(selectedOptions) => setState({ ...state, period: selectedOptions })}
                    />
                </div>
            </div>

            <Select
                options={daysOptions}
                isMulti
                styles={selectStyles}
                isClearable={true}
                isSearchable={true}
                placeholder="Choose Days"
                onChange={(selectedOptions) => setState({ ...state, numberOfTimes: selectedOptions })}
            />

        </div>
    )
}

export default StepOne;