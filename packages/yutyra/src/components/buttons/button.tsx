import { ComponentPropsWithoutRef, forwardRef } from "react";

import styles from "./styles.module.scss";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children }: ButtonProps, ref) => {
    return <button className={styles.button} ref={ref}>{children}</button>;
  }
);
