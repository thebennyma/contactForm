import styles from "./Textarea.module.css";

type TextareaProps = {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
};

export default function Textarea({
  label,
  name,
  value,
  onChange,
}: TextareaProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.container__titleText}>
        {label}
        <span className={styles.required}> *</span>
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className={styles.container__textArea}
      />
    </div>
  );
}
