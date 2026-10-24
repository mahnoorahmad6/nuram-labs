import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaInstagram, FaLinkedinIn} from 'react-icons/fa6';
const socialLinks = [
  { label: 'LinkedIn', Icon: FaLinkedinIn, href: 'https://linkedin.com/company/nuramlabs' }
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <h3>Nuram Labs </h3>
          <p>White-label software agency helping businesses build, launch, and scale digital solutions.</p>
        </div>
        <div className="footer-col">
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
         <a href="mailto:sales@nuramlabs.com">
  sales@nuramlabs.com
</a>
         <a
  href="https://wa.me/923001234567"
  target="_blank"
  rel="noopener noreferrer"
>
  +92 300 1234567
</a>
  <div className="social-links-row">
    {socialLinks.map(({ label, Icon, href }) => (
      <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={label}>
        <Icon />
      </a>
    ))}
  
              </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Nuram Labs  All rights reserved.</p>
        
      </div>
    </footer>
  );
}