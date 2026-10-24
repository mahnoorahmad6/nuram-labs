import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './AIDetail.css';
import './Services.css';


const services = [
  {
    icon: '◆',
    title: 'MVP Development',
    slug: 'mvp-development',
    text: 'Turn your idea into a functional, market-ready MVP. We help businesses validate concepts, launch quickly, and build a strong foundation for future growth.',
    items: [
      { title: 'Software MVP Development', link: '/services/mvp/software', text: 'Build and validate your software idea with a focused, functional MVP.' },
      { title: 'Mobile App MVP Development', link: '/services/mvp/mobile', text: 'Launch your mobile app idea with the essential features your users need.' },
      { title: 'Desktop App MVP Development', link: '/services/mvp/desktop', text: 'Develop a reliable desktop MVP focused on your core business requirements.' },
    ],
  },
  {
    icon: '◎',
    title: 'AI Development',
    slug: 'ai-development',
    text: 'Build intelligent AI-powered solutions that improve customer experiences, automate processes, and help your business work smarter.',
    items: [
      { title: 'AI Chatbots', link: '/services/ai/chatbots', text: 'Intelligent conversational assistants for your customers and teams.' },
      { title: 'AI Automation', link: '/services/ai/automation', text: 'Automate repetitive business processes using artificial intelligence.' },
      { title: 'AI Voice Agents', link: '/services/ai/voice-agents', text: 'AI-powered voice agents for customer service and business operations.' },
      { title: 'AI Video Content', link: '/services/ai/video-content', text: 'Create engaging video content using modern AI technologies.' },
      { title: 'Custom AI Assistants', link: '/services/ai/custom-assistants', text: 'AI assistants designed around your specific business requirements.' },
      { title: 'AI Integrations', link: '/services/ai/integrations', text: 'Integrate AI capabilities into your existing software and workflows.' },
    ],
  },
  {
    icon: '◐',
    title: 'Industry-Specific Development',
    slug: 'industry-development',
    text: 'Custom software solutions designed around the unique workflows and requirements of different industries.',
    items: [
      { title: 'Project Management', link: '/services/industry/project-management', text: 'Solutions that help teams plan, manage, and track projects.' },
      { title: 'Construction Management', link: '/services/industry/construction', text: 'Technology solutions for managing construction projects and field operations.' },
      { title: 'Field Service Management', link: '/services/industry/field-service', text: 'Manage field teams, schedules, tasks, and customer service efficiently.' },
      { title: 'Learning Management System', link: '/services/industry/lms', text: 'Digital platforms for managing learning, training, and educational content.' },
      { title: 'CMMS', link: '/services/industry/cmms', text: 'Computerized maintenance management solutions for organizations.' },
      { title: 'Legal', link: '/services/industry/legal', text: 'Technology solutions designed to streamline legal workflows.' },
      { title: 'Human Resources', link: '/services/industry/hr', text: 'Solutions for managing employees, recruitment, and HR operations.' },
      { title: 'Facility Management', link: '/services/industry/facility-management', text: 'Manage facilities, maintenance, resources, and daily operations.' },
      { title: 'Property Management', link: '/services/industry/property-management', text: 'Technology solutions for managing properties, tenants, and operations.' },
    ],
  },
  {
    icon: '⌘',
    title: 'Mobile App Development',
    slug: 'mobile-development',
    text: 'Create high-quality mobile applications that deliver seamless experiences across devices and platforms.',
    items: [
    
      { title: 'Native Development', link: '/services/mobile/native', text: 'Build high-performance applications specifically for iOS or Android.' },
      { title: 'Cross-Platform Development', link: '/services/mobile/cross-platform', text: 'Develop applications that work across multiple platforms from a single codebase.' },
    ],
  },
];

export default function Services() {
  const [openCategory, setOpenCategory] = useState(null);
  const location = useLocation();

  function toggleCategory(title) {
    setOpenCategory((current) => (current === title ? null : title));
  }

  // Runs whenever the URL hash changes (including navigating here from the
  // navbar dropdown while already on /services, or arriving fresh).
  useEffect(() => {
    if (!location.hash) return;

    const slug = location.hash.replace('#', '');
    const matched = services.find((s) => s.slug === slug);
    if (!matched) return;

    setOpenCategory(matched.title);

    // Wait for the accordion's expand transition (0.3s) to finish settling
    // the page's height before calculating scroll position, so we don't
    // scroll to where the row *used* to be before it expanded.
    const timer = setTimeout(() => {
      const el = document.getElementById(slug);
      if (!el) return;

      const header = document.querySelector('.site-header');
      const offset = header ? header.offsetHeight + 16 : 96;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: 'smooth' });
    }, 350);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
    <Helmet>
      <title>Our Services | Nuram Labs</title>
      <meta
        name="description"
        content="Explore MVP development, AI development, mobile apps, and industry-specific software solutions from Nuram Labs."
      />
    </Helmet>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">What We Offer</p>
          <h1>Services Built Around Your Growth</h1>
          <p>
            From MVP development to AI-powered solutions, we build
            technology that helps businesses move forward.
          </p>
        </div>
      </section>

      <section className="services-list">
        <div className="container services-list-grid">
          {services.map((s) => {
            const isOpen = openCategory === s.title;

            return (
              <div
                id={s.slug}
                className={`service-row ${isOpen ? 'service-row--open' : ''}`}
                key={s.title}
              >
                <button
                  type="button"
                  className="service-row__trigger"
                  onClick={() => toggleCategory(s.title)}
                  aria-expanded={isOpen}
                >
                  <div className="service-icon">{s.icon}</div>

                  <div className="service-content">
                    <h2>{s.title}</h2>
                    <p className="service-description">{s.text}</p>
                  </div>

                  <span className="service-row__chevron" aria-hidden="true">
                    ▾
                  </span>
                </button>

                <div
                  className="sub-services-wrapper"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="sub-services-inner">
                    <div className="sub-services">
                      {s.items.map((item) => (
                        <Link to={item.link} className="sub-service-card" key={item.title}>
                          <h3>{item.title}</h3>
                          <p>{item.text}</p>
                          <span className="learn-more">Learn More →</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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