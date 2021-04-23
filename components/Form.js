import React from "react";
import Button from "./Button";

export function Form({
  onSubmit,
  loading,
  buttonText = "SEND",
  children,
  ...rest
}) {
  return (
    <form onSubmit={onSubmit} {...rest}>
      {children}
      <span className="d-block mb-3"></span>
      <div className="p-3 p-md-0">
        <div className="d-grid d-md-block text-end">
          <Button loading={loading} type="submit" purpose="success">
            {buttonText}
          </Button>
        </div>
        <span className="d-block mb-3"></span>
      </div>
    </form>
  );
}

export function Section({ children }) {
  return (
    <div className="p-3 p-md-32px bg-white border rounded">{children}</div>
  );
}

export function Label({ children, ...rest }) {
  return (
    <label className="form-label m-0 p-0 d-block" {...rest}>
      {children}
    </label>
  );
}

export function Input({ isInvalid, register = () => {}, ...rest }) {
  return (
    <input
      {...rest}
      ref={register({ required: true })}
      className={`form-control ${isInvalid ? "invalid-input" : ""}`}
    />
  );
}

export function ErrorMessage({ children }) {
  return <div className="invalid-feedback d-block">{children}</div>;
}

export function Select({
  type = "",
  options = [],
  isInvalid = false,
  register = () => {},
  ...rest
}) {
  return (
    <select
      {...rest}
      className={`form-select ${isInvalid ? "invalid-input" : ""}`}
      ref={register({ required: true })}
    >
      <option value={""} defaultValue>
        {type}
      </option>
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export function TextArea({ register = () => {}, ...rest }) {
  return <textarea {...rest} ref={register} className="form-control" />;
}