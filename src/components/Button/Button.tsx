import './Button.css';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';
export type ButtonSize = 'sm' | 'md';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis of the button. */
  variant?: ButtonVariant;
  /** Control height / padding. */
  size?: ButtonSize;
  /** Stretch to fill the container width. */
  fullWidth?: boolean;
  /** Optional leading icon (any node). */
  iconStart?: ReactNode;
  /** Optional trailing icon (any node). */
  iconEnd?: ReactNode;
  children?: ReactNode;
}

/**
 * Primary action control for the NewEdge system.
 * Built entirely from NewEdge tokens (radius `md`, Inter Medium label).
 */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  iconStart,
  iconEnd,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    'ne-btn',
    `ne-btn--${variant}`,
    `ne-btn--${size}`,
    fullWidth ? 'ne-btn--block' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...rest}>
      {iconStart && <span className="ne-btn__icon">{iconStart}</span>}
      {children && <span className="ne-btn__label">{children}</span>}
      {iconEnd && <span className="ne-btn__icon">{iconEnd}</span>}
    </button>
  );
}

export default Button;
