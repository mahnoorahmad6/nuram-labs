import React, { useState } from 'react';
import './Contact.css';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
  { label: 'Instagram', Icon: FaInstagram, href: 'https://instagram.com/noorumlabs' },
  { label: 'LinkedIn', Icon: FaLinkedinIn, href: 'https://linkedin.com/company/nuramlabs' }
];

export default function Contact() {
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://formsubmit.co/ajax/ahmadmahnoor.06@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Get In Touch</p>
          <h1>Let's Start A Conversation</h1>
          <p>Have a project in mind or just want to learn more? Fill out the form below and our team will get back to you within one business day.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">

          <div className="contact-info fade-up visible">
            <h2 className="section-title">Contact Information</h2>
            <p className="contact-lead">Reach out directly, or use the form: every message comes straight to our team.</p>

            <div className="info-item">
              <div className="info-icon">✉</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:hello@noorumlabs.com">hello@noorumlabs.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">☎</div>
              <div>
                <h4>WhatsApp</h4>
                <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer">+92 300 1234567</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>Pakistan Office</h4>
                <p>Near Doctor's Hospital, Johar Town, Lahore, Pakistan</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>U.S. Office</h4>
                <p>479 Half Hollow Rd, Dix Hills, NY 11746, USA</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">🔗</div>
              <div>
                <h4>Follow Us</h4>
                <div className="social-links-row">
    {socialLinks.map(({ label, Icon, href }) => (
      <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact-social-icon" aria-label={label}>
        <Icon />
      </a>
    ))}
  
              </div>
            </div>

  
  
</div>
          </div>

          <form className="contact-form fade-up visible" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name*</label>
                <input
                  type="text" id="name" name="name" required
                  value={formData.name} onChange={handleChange}
                  placeholder="Jane Smith"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address*</label>
                <input
                  type="email" id="email" name="email" required
                  value={formData.email} onChange={handleChange}
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel" id="phone" name="phone"
                  value={formData.phone} onChange={handleChange}
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject*</label>
                <input
                  type="text" id="subject" name="subject" required
                  value={formData.subject} onChange={handleChange}
                  placeholder="Project Inquiry"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message" name="message" rows="6" required
                value={formData.message} onChange={handleChange}
                placeholder="Tell us about your business needs..."
              />
            </div>

            <button type="submit" className="btn btn-sand submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="form-status success">Thanks, your message has been sent. We'll be in touch soon.</p>
            )}
            {status === 'error' && (
              <p className="form-status error">Something went wrong. Please try again or email us directly.</p>
            )}
          </form>

        </div>
      </section>
    </>
  );
}