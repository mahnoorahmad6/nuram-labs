import React from 'react';
import Button from '../components/Button';
import './About.css';
import linkedinLogo from '../assets/linkedin.svg';
import './AIDetail.css';
import { Link } from 'react-router-dom';
import woman from '../assets/woman.jpeg';
import umair from '../assets/umair.jpg';
import { Helmet } from 'react-helmet-async';
const team = [
  { name: 'Umair Ahmed', role: 'Founder', img: umair ,linkedin: 'http://linkedin.com/in/umairahmedtoor/'},
  { name: 'Mahnoor Ahmad', role: 'Co-Founder', img: woman ,linkedin: 'https://www.linkedin.com/in/mahnoor-ahmad-47b169225/'},
];

const values = [
  { icon: '◆', title: 'Innovation With Purpose', text: "We use technology to solve real business problems, not just to follow trends" },
  { icon: '◎', title: 'Build For Impact', text: "We create solutions that are practical, scalable, and designed to deliver measurable value" },
  { icon: '⌬', title: 'Partnership Over Process', text: "We don't believe in one-size-fits-all solutions. We take the time to understand your needs, collaborate closely, and turn your ideas into outcomes that create meaningful value" },
];

export default function About() {
  return (
    <>
     <Helmet>
        <title>About Us | Nuram Labs</title>
        <meta
          name="description"
          content="Learn about Nuram Labs, our team, and our approach to digital solutions."
        />
      </Helmet>

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About Us</p>
          <h1>Built On Trust, Driven By Results</h1>
          <p>Since 2023, Nuram Labs has partnered with organizations of all sizes to solve complex business challenges through innovative technology, intelligent automation, and scalable software solutions.</p>
        </div>
      </section>

      <section className="story">
        <div className="container story-grid">
          <div className="story-img fade-up visible">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Team meeting around a table" />
          </div>
          <div className="story-text fade-up visible">
            <p className="eyebrow">Our Story</p>
            <h2 className="section-title">Building Technology That Moves Businesses Forward</h2>
            <p> Nuram Labs is a technology company focused on building practical digital
  solutions that help businesses work smarter, move faster, and grow with
  confidence. From modern web applications to custom software and AI-powered
  solutions, we turn ideas and business challenges into technology that works. We believe great software should be simple, scalable, and built around the
  people who use it.</p>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <div className="section-head fade-up visible">
            <p className="eyebrow">What Drives Us</p>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div className="value-card fade-up visible" key={v.title}>
                <div className="service-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <div className="section-head fade-up visible">
            <p className="eyebrow">Leadership</p>
            <h2 className="section-title">Meet The Team</h2>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card fade-up visible" key={member.name}>
                <img src={member.img} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                 <a
  href={member.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="linkedin-link"
  aria-label={`${member.name}'s LinkedIn profile`}
>
  <img src={linkedinLogo} alt="LinkedIn" />
</a>
                
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </>
  );
}