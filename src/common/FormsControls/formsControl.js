import React from "react";
import styles from "./FormStyles.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={hasError ? styles.text : ""}>
      <textarea {...input} {...props}></textarea>
      {hasError && <span className={styles.Span}>{meta.error}</span>}
    </div>
  );
};

export const Inputarea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
  
    return (
      <div className={hasError ? styles.text : ""}>
        <input {...input} {...props}></input>
        {hasError && <span className={styles.Span}>{meta.error}</span>}
      </div>
    );
  };