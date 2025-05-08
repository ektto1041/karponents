import { InputHTMLAttributes } from "react";
import { Size } from "../../types/style";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  width: string | "fullWidth";
  fontSize?: Size;
  shrink?: boolean;
  color?: string;
  backgroundColor?: string;
}

const InnerInput = ({
  label,
  width,
  fontSize = "md",
  shrink,
  color,
  backgroundColor,
  ...props
}: InputProps) => {
  return (
    <>
      <input
        {...props}
        className={`${styles.container} ${styles[`size-${fontSize}`]} ${
          width === "fullWidth" ? styles["full-width"] : ""
        }`}
        style={{
          color,
          backgroundColor,
          borderColor: color,
        }}
      />
    </>
  );
};

export const Input = ({
  label,
  width,
  fontSize = "md",
  shrink,
  color,
  backgroundColor,
  ...props
}: InputProps) => {
  return (
    <div
      className={`${styles.container}`}
      style={width !== "fullWidth" ? { width } : undefined}
    >
      {label ? (
        <label>
          <div
            style={{
              color,
            }}
          >
            {label}
          </div>
          <InnerInput
            label={label}
            width={width}
            fontSize={fontSize}
            shrink={shrink}
            {...props}
          />
        </label>
      ) : (
        <InnerInput
          label={label}
          width={width}
          fontSize={fontSize}
          shrink={shrink}
          color={color}
          backgroundColor={backgroundColor}
          {...props}
        />
      )}
    </div>
  );
};
