import React from "react";
import styles from "./TextInput.module.css";

type TextInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  type?: string;
};

export default function TextInput({
  label,
  name,
  value,
  onChange,
  type = "text",
}: TextInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.container__titleText}>
        {label} <span className={styles.required}>*</span>
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        className={styles.container__input}
      />
    </div>
  );
}
