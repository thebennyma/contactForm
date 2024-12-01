import styles from "./Checkbox.module.css";

type CheckboxProps = {
  label: string;
  name: string;
  checked: boolean;
  onChange: (name: string, value: boolean) => void;
};

export default function Checkbox({
  label,
  name,
  checked,
  onChange,
}: CheckboxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.checked);
  };

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
        className={styles.container__check}
      />
      <label className={styles.container__titleText}>{label}</label>
    </div>
  );
}
