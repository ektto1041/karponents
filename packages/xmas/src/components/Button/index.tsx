import { ButtonHTMLAttributes } from "react";
import { Size } from "../../types/style";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  backgroundColor?: string;
  fullWidth?: boolean;
  bold?: boolean;
  size?: Size;
}

export const Button = ({
  fullWidth,
  color = "#0000FF",
  backgroundColor = "#FFFFFF",
  bold,
  size = "md",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${styles.container} ${
        fullWidth ? styles["full-width"] : ""
      } ${bold ? styles.bold : ""} ${styles[`size-${size}`]}`}
      style={{
        color,
        borderColor: color,
        backgroundColor,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
