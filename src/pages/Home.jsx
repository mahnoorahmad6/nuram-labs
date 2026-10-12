import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import useFadeIn from '../hooks/useFadeIn';
import './Home.css';
import './AIDetail.css';

function CtaBand() {
  const ref = useFadeIn();
  return (
    <section className="cta-band">
      <div className="container">
        <h2 className="fade-up visible">Ready to start your next project?</h2>
        <p className="fade-up visible">
          Let's talk about what your business needs — no obligation,
          just a conversation.
        </p>
        <Link to="/contact" className="ai-contact">
          Let's Talk
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const heroRef = useFadeIn();
  const statsRef = useFadeIn();
  const servicesRef = useFadeIn();

  return (
    <>
      <section className="hero">
        <div className="container hero-grid" ref={heroRef}>
          <div className="hero-text fade-up visible">
            <p className="eyebrow">Digital Solutions</p>
            <h1>Technology That <em>Moves</em> Your Business Forward</h1>
            <p className="hero-sub">
              We build custom digital solutions that fit seamlessly into your brand, helping you solve problems, streamline operations, and turn ideas into scalable products.
            </p>
            <div className="hero-btns">
              <Button to="/services" variant="sand">View Our Services</Button>
              <Button to="/about" variant="outline">About Us</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="core-services">
        <div className="container" ref={servicesRef}>
          <div className="section-head fade-up visible">
            <p className="eyebrow">What We Do</p>
            <h2 className="section-title">Our Core Services</h2>
          </div>

          <div className="services-grid">
            <Link to="/services" className="service-card fade-up visible">
              <div className="service-icon">◆</div>
              <h3>MVP Development</h3>
              <p>We help leadership teams clarify vision, define priorities, and build the roadmaps that drive long-term growth.</p>
            </Link>

            <Link to="/services" className="service-card fade-up visible">
              <div className="service-icon">◎</div>
              <h3>AI Development</h3>
              <p>Streamline workflows, reduce friction, and implement systems that scale with your organization.</p>
            </Link>

            <Link to="/services" className="service-card fade-up visible">
              <div className="service-icon">◐</div>
              <h3>Mobile App Development</h3>
              <p>From technology audits to full implementation, we guide your transition to modern digital infrastructure.</p>
            </Link>

            <Link to="/services" className="service-card fade-up visible">
              <div className="service-icon">◐</div>
              <h3>Industry Specific Development</h3>
              <p>From technology audits to full implementation, we guide your transition to modern digital infrastructure.</p>
            </Link>
          </div>

          <div className="services-cta fade-up visible">
            <Button to="/services" variant="outline-dark">See All Services →</Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}