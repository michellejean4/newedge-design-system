import './Card.css';
import type { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Small uppercase label above the title. */
  eyebrow?: string;
  /** Card title. */
  title?: ReactNode;
  /** Content placed in the top-right (e.g. a Badge or menu). */
  action?: ReactNode;
  /** Raise the card with a shadow + brighten on hover (for clickable cards). */
  interactive?: boolean;
  children?: ReactNode;
}

/** Surface container — radius `lg`, sits on bg-1 above the bg-0 canvas. */
export function Card({
  eyebrow,
  title,
  action,
  interactive = false,
  className = '',
  children,
  ...rest
}: CardProps) {
  const classes = [
    'ne-card',
    interactive ? 'ne-card--interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const hasHeader = eyebrow || title || action;

  return (
    <div className={classes} {...rest}>
      {hasHeader && (
        <div className="ne-card__header">
          <div className="ne-card__heading">
            {eyebrow && <span className="ne-card__eyebrow">{eyebrow}</span>}
            {title && <h3 className="ne-card__title">{title}</h3>}
          </div>
          {action && <div className="ne-card__action">{action}</div>}
        </div>
      )}
      {children && <div className="ne-card__body">{children}</div>}
    </div>
  );
}

export default Card;
