import './Alert.css';
import type { ReactNode } from 'react';

export type AlertTone = 'info' | 'positive' | 'warning' | 'negative';

export interface AlertProps {
  tone?: AlertTone;
  title?: string;
  children?: ReactNode;
  /** Show a close button and call this when clicked. */
  onDismiss?: () => void;
}

const ICONS: Record<AlertTone, string> = {
  info: 'ⓘ',
  positive: '✓',
  warning: '!',
  negative: '✕',
};

/** Inline message banner (radius `md`) with a tone-colored accent. */
export function Alert({ tone = 'info', title, children, onDismiss }: AlertProps) {
  return (
    <div className={`ne-alert ne-alert--${tone}`} role="status">
      <span className="ne-alert__icon" aria-hidden="true">
        {ICONS[tone]}
      </span>
      <div className="ne-alert__content">
        {title && <p className="ne-alert__title">{title}</p>}
        {children && <div className="ne-alert__body">{children}</div>}
      </div>
      {onDismiss && (
        <button className="ne-alert__close" onClick={onDismiss} aria-label="Dismiss">
          ✕
        </button>
      )}
    </div>
  );
}

export default Alert;
