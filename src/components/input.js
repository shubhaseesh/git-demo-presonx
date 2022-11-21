import React from "react";

const Input = (props) => {
  const { type, name, onChange, inputClass, placeholder, pattern } = props;
  return (
    <input
      pattern={pattern}
      required
      type={type}
      name={name}
      onChange={onChange}
      className={inputClass}
      placeholder={placeholder}
    />
  );
};

export default Input;
