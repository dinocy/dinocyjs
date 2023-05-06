import { ComponentPropsWithoutRef, forwardRef } from "react";

import styles from "./button.module.scss";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "solid" | "outline";
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "solid",
      size = "md",
      color = "primary",
      ...rest
    }: ButtonProps,
    ref
  ) => {
    return (
      <button
        className={styles.button}
        data-variant={variant}
        data-size={size}
        data-color={color}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
