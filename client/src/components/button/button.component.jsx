import React from "react";

import styles from "./button.module.scss";

const Button = ({
  label,
  ghost,
  isLoading,
  buttonType,
  disabled,
  ...otherProps
}) => {
  const spinClass = () => {
    if (buttonType === "submit" && isLoading) {
      return styles.spin;
    } else {
      return "";
    }
  };

  const ghostClass = ghost ? styles.ghost : "";

  return (
    <button
      type={otherProps.type}
      className={`${spinClass()} ${ghostClass} `}
      {...otherProps}
      disabled={isLoading || disabled}
    >
      {label}
      {buttonType === "submit" ? <span className={styles.spinner}></span> : ""}
    </button>
  );
};

export default Button;
