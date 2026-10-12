import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export default function Button({ to, href, variant = 'sand', children, onClick, type = 'button' }) {
  const className = `btn btn-${variant}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}