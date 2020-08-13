import React from "react";
import classes from "./FormControl.module.css";

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
  return (
    <div>
      <div>
        <textarea {...input} {...props} />
      </div>
      <div className={classes.error}>
        {touched && error && <span className={classes.error}> {error} </span>}
      </div>
    </div>
  );
};
export const Input = ({ input, meta: { touched, error }, ...props }) => {
  return (
    <div>
      <div>
        <input {...input} {...props} />
      </div>
      <div className={classes.error}>
        {touched && error && <span> {error} </span>}
      </div>
    </div>
  );
};

