import React from "react";

import styles from "./form-input.module.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className={styles.group}>
      {otherProps.type === "textArea"
        ? <textarea
          className={styles.form_input}
          onChange={handleChange}
          {...otherProps}
        />
        :
        <input
          className={styles.form_input}
          onChange={handleChange}
          {...otherProps}
        />}
      {label ? (
        <label
          className={`${otherProps.value && otherProps.value.length ? styles.shrink : ""} ${styles.form_input_label
            }`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
export default FormInput;
