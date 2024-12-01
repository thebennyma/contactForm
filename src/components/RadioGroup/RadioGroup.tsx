import styles from "./RadioGroup.module.css";

type RadioGroupProps = {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (name: string, value: string) => void;
};

export default function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
}: RadioGroupProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <div className={styles.container}>
      <legend className={styles.container__titleText}>
        {label} <span className={styles.required}>*</span>
      </legend>
      <div className={styles.container__options}>
        {options.map((option) => (
          <label key={option} className={styles.container__options__item}>
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={handleChange}
              className={styles.inputStyle}
            />
            <span className={styles.text}>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
