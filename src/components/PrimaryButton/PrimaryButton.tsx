'use client';

import './PrimaryButton.css';

type PrimaryButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
};

export default function PrimaryButton({
  children,
  href,
  onClick,
  type = 'button',
  className = '',
}: PrimaryButtonProps) {
  const classes = `primary-button ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
