import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({
  children,
  type = "button",
  disabled,
}: ButtonProps) {
  return (
    <button type={type} className={styles.buttonStyle} disabled={disabled}>
      {children}
    </button>
  );
}
