import React from "react";
import styles from "./tags.module.scss";

const Tags = ({ taggables }) => (
  <>
    {taggables.map((taggable) => (
      <span key={taggable} className={styles.tag}>
        {taggable}
      </span>
    ))}
  </>
);

export default Tags;
