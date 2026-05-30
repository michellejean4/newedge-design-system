import './Input.css';
import { useId } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Label shown above the field. */
  label?: string;
  /** Helper text shown below the field. */
  hint?: string;
  /** Error message — switches the field to its error state. */
  error?: string;
  /** Optional leading adornment (icon, currency symbol…). */
  prefix?: ReactNode;
  /** Use the monospace face — good for figures, tickers, IDs. */
  mono?: boolean;
}

/** Single-line text field built on NewEdge tokens (radius `md`). */
export function Input({
  label,
  hint,
  error,
  prefix,
  mono = false,
  className = '',
  id,
  ...rest
}: InputProps) {
  const reactId = useId();
  const inputId = id ?? reactId;
  const describedBy = error
    ? `${inputId}-error`
    : hint
      ? `${inputId}-hint`
      : undefined;

  return (
    <div className={`ne-field ${className}`}>
      {label && (
        <label className="ne-field__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <div
        className={[
          'ne-field__control',
          error ? 'ne-field__control--error' : '',
          rest.disabled ? 'ne-field__control--disabled' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {prefix && <span className="ne-field__prefix">{prefix}</span>}
        <input
          id={inputId}
          className={`ne-field__input ${mono ? 'ne-mono' : ''}`}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          {...rest}
        />
      </div>
      {error ? (
        <p id={`${inputId}-error`} className="ne-field__msg ne-field__msg--error">
          {error}
        </p>
      ) : hint ? (
        <p id={`${inputId}-hint`} className="ne-field__msg">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export default Input;
