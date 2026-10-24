import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import useFadeIn from '../hooks/useFadeIn';
import './Home.css';
import './AIDetail.css';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>About Us | Nuram Labs</title>
        <meta
          name="description"
          content="Learn about Nuram Labs, our team, and our approach to digital solutions."
        />
      </Helmet>
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
  <Link to="/services#mvp-development" className="service-card fade-up visible">
    <div className="service-icon">◆</div>
    <h3>MVP Development</h3>
    <p>We help businesses turn ideas into functional MVPs through rapid prototyping, core feature development, and hands-on engineering to bring products to life</p>
  </Link>

  <Link to="/services#ai-development" className="service-card fade-up visible">
    <div className="service-icon">◎</div>
    <h3>AI Development</h3>
    <p>Automate workflows, integrate machine learning models, and deploy scalable AI solutions that optimize business operations.</p>
  </Link>

  <Link to="/services#industry-development" className="service-card fade-up visible">
    <div className="service-icon">◐</div>
    <h3>Industry Specific Development</h3>
    <p>We engineer tailored software solutions around your industry's unique workflows, business requirements, and operational challenges.</p>
  </Link>

  <Link to="/services#mobile-development" className="service-card fade-up visible">
    <div className="service-icon">⌘</div>
    <h3>Mobile App Development</h3>
    <p>We build intuitive, high-performance mobile applications with seamless user experiences, robust functionality, and scalable architecture for iOS and Android</p>
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