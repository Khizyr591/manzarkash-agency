import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { FiLoader } from "react-icons/fi";

import styles from "@/app/styles/styles";

type BaseProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  href?: string;
};

// Intersect button and anchor types based on whether href is present
export type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>;

export default function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  children,
  href,
  ...props
}: ButtonProps) {
  // Base classes for consistent sizing, rounded border, flex alignment, and micro-interactions
  const baseClasses =
    "inline-flex items-center justify-center rounded-full transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  // Variant classes
  const variantClasses = {
    primary:
      "bg-primary hover:bg-primary/95 text-white shadow-lg shadow-primary/10 hover:shadow-primary/20 border border-transparent",
    secondary:
      "bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-950 border border-transparent",
    outline:
      "border border-zinc-300 hover:border-black text-zinc-800 hover:text-black dark:border-zinc-700 dark:hover:border-white dark:text-zinc-200 dark:hover:text-white bg-transparent",
    ghost:
      "text-zinc-700 hover:bg-zinc-100/50 hover:text-black dark:text-zinc-300 dark:hover:bg-zinc-900/50 dark:hover:text-white bg-transparent",
  };

  // Size classes
  const sizeClasses = {
    sm: `px-4 py-2 gap-1.5 ${styles.button_text_sm} !normal-case`,
    md: `px-6 py-3 gap-2 ${styles.button_text_sm} !normal-case`,
    lg: `px-8 py-4 gap-2.5 ${styles.button_text} !normal-case`,
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={finalClasses}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span className="truncate">{children}</span>
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </a>
    );
  }

  return (
    <button
      className={finalClasses}
      disabled={disabled || isLoading}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {/* Loading Spinner */}
      {isLoading && (
        <FiLoader className="animate-spin -ml-1 mr-1 h-4 w-4 text-current" />
      )}

      {/* Left Icon (only visible when not loading) */}
      {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}

      {/* Button Content */}
      <span className="truncate">{children}</span>

      {/* Right Icon */}
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
