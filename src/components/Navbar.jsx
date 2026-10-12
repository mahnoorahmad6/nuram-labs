import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';
import logo from '../assets/logo.png';
const navItems = [
  {
    label: 'Home',
    to: '/',
    end: true,
    children: null,
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'MVP Development', to: '/services#mvp-development' },
    { label: 'AI Development', to: '/services#ai-development' },
    { label: 'Industry-Specific Development', to: '/services#industry-development' },
    { label: 'Mobile App Development', to: '/services#mobile-development' },
    ],
  },
  {
    label: 'Contact',
    to: '/contact',
   
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile hamburger
  const [activeDropdown, setActiveDropdown] = useState(null); // works for BOTH mobile and desktop now
  const navRef = useRef(null);

  const linkClass = ({ isActive }) => 'nav-link' + (isActive ? ' active' : '');

  function closeAll() {
    setOpen(false);
    setActiveDropdown(null);
  }

  function handleItemEnter(label) {
    // Desktop hover — only meaningful above the mobile breakpoint,
    // but harmless to set on mobile since click handles it there anyway
    setActiveDropdown(label);
  }

  function handleItemLeave() {
    setActiveDropdown(null);
  }

  function toggleDropdown(label) {
    setActiveDropdown((current) => (current === label ? null : label));
  }

  // Close any open dropdown if you click anywhere outside the nav entirely
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
       <Link to="/" className="logo" onClick={closeAll}>
  <img src={logo} alt="Nuram Labs " className="logo-image" />
</Link>

        <nav className={`main-nav ${open ? 'open' : ''}`} ref={navRef}>
          {navItems.map((item) => (
            <div
              className="nav-item"
              key={item.label}
              onMouseEnter={() => item.children && handleItemEnter(item.label)}
              onMouseLeave={() => item.children && handleItemLeave()}
            >
              <div className="nav-item-row">
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={linkClass}
                  onClick={closeAll}
                >
                  {item.label}
                </NavLink>

                {item.children && (
                  <button
                    type="button"
                    className="nav-caret-btn"
                    aria-label={`Toggle ${item.label} submenu`}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown(item.label);
                    }}
                  >
                    <span
                      className={`nav-caret ${activeDropdown === item.label ? 'nav-caret--open' : ''}`}
                    >
                      ▾
                    </span>
                  </button>
                )}
              </div>

              {item.children && (
                <div
                  className={`nav-dropdown-menu ${activeDropdown === item.label ? 'nav-dropdown-menu--open' : ''}`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.to}
                      onClick={closeAll}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="nav-cta">
          <Button to="/contact" variant="sand">Get in Touch</Button>
        </div>

        <button
          className="mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}