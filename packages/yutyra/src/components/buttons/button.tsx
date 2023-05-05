import { ComponentPropsWithoutRef, forwardRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children }: ButtonProps, ref) => {
    return <button ref={ref}>{children}</button>;
  }
);
