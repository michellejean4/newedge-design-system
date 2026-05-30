import './Toggle.css';
import { useId } from 'react';
import type { InputHTMLAttributes } from 'react';

export interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

/** On/off switch (pill radius). Wraps a native checkbox for accessibility. */
export function Toggle({ label, className = '', id, ...rest }: ToggleProps) {
  const reactId = useId();
  const inputId = id ?? reactId;
  return (
    <label className={`ne-toggle ${rest.disabled ? 'ne-toggle--disabled' : ''} ${className}`} htmlFor={inputId}>
      <input id={inputId} type="checkbox" role="switch" className="ne-toggle__input" {...rest} />
      <span className="ne-toggle__track" aria-hidden="true">
        <span className="ne-toggle__thumb" />
      </span>
      {label && <span className="ne-toggle__label">{label}</span>}
    </label>
  );
}

export default Toggle;
