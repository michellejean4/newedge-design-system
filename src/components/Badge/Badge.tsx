import './Badge.css';
import type { HTMLAttributes, ReactNode } from 'react';

export type BadgeVariant =
  | 'neutral'
  | 'info'
  | 'positive'
  | 'negative'
  | 'warning';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  /** Show a small leading status dot. */
  dot?: boolean;
  children?: ReactNode;
}

/** Compact status label — pill radius, used for tags and metric deltas. */
export function Badge({
  variant = 'neutral',
  dot = false,
  className = '',
  children,
  ...rest
}: BadgeProps) {
  const classes = ['ne-badge', `ne-badge--${variant}`, className]
    .filter(Boolean)
    .join(' ');
  return (
    <span className={classes} {...rest}>
      {dot && <span className="ne-badge__dot" />}
      {children}
    </span>
  );
}

export default Badge;
