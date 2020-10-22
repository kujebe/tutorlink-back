import React, { Fragment } from "react";
import Select from 'react-select'

import FormInput from "components/form-input/form-input.component";

import styles from "./cutomer-child-form.module.scss";
import { reactSelectStyles } from "helpers/style-helpers";

import { goalOptions, curriculum, nigerianCurriculum, britishCurriculum, americanCurriculum, preSchoolSubjects, nurserySubjects, primarySubjects, lowerSecondarySubjects, upperSecondarySubjects } from "helpers/options";

const CustomerChildForm = ({ state, changeAction, handleSelectChange }) => {

    console.log(state);

    const selectClassOptions = () => {
        if (state.curriculum) {
            switch (state.curriculum.value) {
                case "British":
                    return britishCurriculum;
                case "American":
                    return americanCurriculum;
                default:
                    return nigerianCurriculum;
            }
        } else {
            return nigerianCurriculum;
        }
    }

    const selectSubjectOptions = () => {
        switch (state.class.value) {
            case "Pre Nursery":
                return preSchoolSubjects;
            case "Kindergarten":
            case "Nursery 1":
            case "Nursery 2":
                return nurserySubjects;
            case "Primary 1":
            case "Primary 2":
            case "Primary 3":
            case "Primary 4":
            case "Primary 5":
            case "Primary 6":
            case "Year 1":
            case "Year 2":
            case "Year 3":
            case "Year 4":
            case "Year 6":
            case "1st grade":
            case "2nd grade":
            case "3rd grade":
            case "4th grade":
            case "5th grade":
            case "6th grade":
                return primarySubjects;
            case "JSS 1":
            case "JSS 2":
            case "JSS 3":
            case "Year 7":
            case "Year 8":
            case "Year 9":
            case "7th grade":
            case "8th grade":
            case "9th grade":
                return lowerSecondarySubjects;
            case "SSS 1":
            case "SSS 2":
            case "SSS 3":
            case "Year 10":
            case "Year 11":
            case "10th grade":
            case "11th grade":
            case "12th grade":
                return upperSecondarySubjects;
            default:
                // return nigerianCurriculum;
                break;
        }
    }

    return (
        <Fragment>
            <FormInput
                type="text"
                name="fullname"
                value={state.fullname}
                onChange={changeAction}
                label="Child full name"
                required
            />
            <FormInput
                type="number"
                name="age"
                value={state.age}
                onChange={changeAction}
                label="Child age"
                required
            />
            <div className={styles.two_cols}>
                <div className={styles.col_1}>
                    <Select
                        options={curriculum}
                        styles={reactSelectStyles}
                        isClearable={true}
                        isSearchable={true}
                        placeholder="Curriculum"
                        defaultValue={curriculum[0]}
                        onChange={(selectedOptions) => handleSelectChange("curriculum", selectedOptions)}
                    />
                </div>
                <div className={styles.col_2}>
                    <Select
                        options={selectClassOptions()}
                        styles={reactSelectStyles}
                        isClearable={true}
                        isSearchable={true}
                        placeholder="Class"
                        defaultValue={nigerianCurriculum[0]}
                        onChange={(selectedOptions) => handleSelectChange("class", selectedOptions)}
                    />
                </div>
            </div>
            {state.class && <Select
                options={selectSubjectOptions()}
                styles={reactSelectStyles}
                isMulti
                isClearable={true}
                isSearchable={true}
                placeholder="Subjects"
                onChange={(selectedOptions) => handleSelectChange("subjects", selectedOptions)}
            />}
            <Select
                options={selectClassOptions()}
                styles={reactSelectStyles}
                isClearable={true}
                isSearchable={true}
                placeholder="Class"
                defaultValue={nigerianCurriculum[0]}
                onChange={(selectedOptions) => handleSelectChange("class", selectedOptions)}
            />
            <Select
                options={goalOptions}
                styles={reactSelectStyles}
                isClearable={true}
                isSearchable={true}
                placeholder="Goal for this child"
                onChange={(selectedOptions) => handleSelectChange("goal", selectedOptions)}
            />
            <FormInput
                type="text"
                name="school"
                value={state.school}
                onChange={changeAction}
                label="Child school"
                required
            />
            <FormInput
                type="text"
                name="gender"
                value={state.gender}
                onChange={changeAction}
                label="Child Gender"
                required
            />
            <FormInput
                type="textArea"
                name="more"
                value={state.more}
                onChange={changeAction}
                label="Tell us more about this child"
                required
            />
        </Fragment>
    )
}

export default CustomerChildForm;