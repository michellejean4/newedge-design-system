import './Avatar.css';

export type AvatarSize = 'sm' | 'md' | 'lg';

export interface AvatarProps {
  /** Image URL. If omitted, initials are shown. */
  src?: string;
  /** Full name — used for initials and the alt text. */
  name: string;
  size?: AvatarSize;
  /** Optional status indicator. */
  status?: 'online' | 'away' | 'offline';
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/** Circular identity token. Initials fall back when no image is given. */
export function Avatar({ src, name, size = 'md', status }: AvatarProps) {
  return (
    <span className={`ne-avatar ne-avatar--${size}`} title={name}>
      {src ? (
        <img className="ne-avatar__img" src={src} alt={name} />
      ) : (
        <span className="ne-avatar__initials" aria-label={name}>
          {initials(name)}
        </span>
      )}
      {status && <span className={`ne-avatar__status ne-avatar__status--${status}`} />}
    </span>
  );
}

export default Avatar;
