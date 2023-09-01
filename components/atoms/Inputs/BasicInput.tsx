import React from "react";
import "./BasicInput.scss";
type InputType = "text" | "number" | "email" | "password";

interface BasicInputProps {
  type?: InputType;
  name?: string;
  title?: string;
  value?: string | number;
  placeholder?: string;
  className?: string;
  inputValue?: (data: { name: string; value: string }) => void;
}

const BasicInput: React.FC<BasicInputProps> = ({
  type = "text",
  name = "",
  title = "",
  value = "",
  placeholder = "",
  inputValue,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (inputValue) {
      inputValue({ name, value: newValue });
    }
  };

  return (
    <div className="basic-input">
      <label>{title}</label>
      <input
        type={type}
        name={name}
        value={value.toString()}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default BasicInput;
