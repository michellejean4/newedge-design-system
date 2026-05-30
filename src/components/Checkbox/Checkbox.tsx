import './Checkbox.css';
import { useId } from 'react';
import type { InputHTMLAttributes } from 'react';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

/** Checkbox with a NewEdge custom box (radius `xs`). */
export function Checkbox({ label, className = '', id, ...rest }: CheckboxProps) {
  const reactId = useId();
  const inputId = id ?? reactId;
  return (
    <label className={`ne-check ${rest.disabled ? 'ne-check--disabled' : ''} ${className}`} htmlFor={inputId}>
      <input id={inputId} type="checkbox" className="ne-check__input" {...rest} />
      <span className="ne-check__box" aria-hidden="true">
        <svg viewBox="0 0 16 16" className="ne-check__tick">
          <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {label && <span className="ne-check__label">{label}</span>}
    </label>
  );
}

export default Checkbox;
