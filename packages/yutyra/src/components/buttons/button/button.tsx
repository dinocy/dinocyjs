import { ComponentPropsWithoutRef, forwardRef } from "react";

import styles from "./button.module.scss";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "solid", size = "md", ...rest }: ButtonProps, ref) => {
    return (
      <button
        className={styles.button}
        data-variant={variant}
        data-size={size}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
