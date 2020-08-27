import React from "react";

import FormInput from "components/form-input/form-input.component";
import { ReactComponent as SearcIcon } from "assets/images/search-icon.svg";

import styles from "./search-form.module.scss";

const SearchForm = () => {
  return (
    <div className={styles.wrapper}>
      <SearcIcon />
      <FormInput
        type="text"
        name="search"
        value=""
        // handleChange={handleChange}
        label="Search for teachers near you"
        required
      />
    </div>
  );
};

export default SearchForm;
