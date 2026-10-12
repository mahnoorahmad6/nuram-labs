import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import './ServiceLifecycle.css';
import './AIDetail.css';

const lifecycleData = {

  // =========================
  // MVP DEVELOPMENT
  // =========================

  mvp: {
    title: 'Mobile App MVP Development',
    description:
      'A fast, focused first release to validate your mobile app idea before investing further.',
    steps: [
      {
        number: '01',
        title: 'Idea Validation',
        text: 'We stress-test the concept against real user needs before committing engineering time.',
        bullets: [
          'Discuss the core problem your app is meant to solve.',
          'Identify your target users and their daily pain points.',
          'Research existing apps already solving this problem.',
          'Assess demand through quick user conversations or surveys.',
          'Confirm the idea is worth building before writing code.',
        ],
      },
      {
        number: '02',
        title: 'Feature Prioritization',
        text: 'Features get sorted into must-have vs. later, keeping the first release lean and shippable.',
        bullets: [
          'List every feature you imagine the app eventually having.',
          'Separate must-haves for launch from nice-to-haves for later.',
          'Score each feature by effort versus user impact.',
          'Lock a minimal feature set that still proves the concept.',
          'Document what is deliberately excluded from this release.',
        ],
      },
      {
        number: '03',
        title: 'Rapid Prototyping',
        text: 'A working prototype is built fast so you can put it in front of real users within weeks, not months.',
        bullets: [
          'Sketch core screens and user flows quickly.',
          'Build a clickable prototype, not production code.',
          'Test the flow internally before showing outside users.',
          'Gather first reactions on navigation and clarity.',
          'Revise the flow based on early friction points.',
        ],
      },
      {
        number: '04',
        title: 'Build & Integrate',
        text: 'Core screens, APIs, and third-party integrations (payments, auth, analytics) come together.',
        bullets: [
          'Build out the prioritized screens from the prototype.',
          'Connect authentication and user account handling.',
          'Integrate payments or other required third-party services.',
          'Wire up analytics so usage can be measured post-launch.',
          'Keep the build scoped strictly to the agreed feature set.',
        ],
      },
      {
        number: '05',
        title: 'Testing & Bug Bash',
        text: 'A focused QA pass on the critical path ensures the app is stable enough for real users.',
        bullets: [
          'Test the primary user journey end to end.',
          'Check behavior across a handful of real devices.',
          'Fix crashes and blocking bugs before anything else.',
          'Confirm core flows work on both weak and strong connections.',
          'Sign off only once the critical path is stable.',
        ],
      },
      {
        number: '06',
        title: 'Launch & Learn',
        text: 'We ship to a small user group first, then expand based on what the data tells us.',
        bullets: [
          'Release to a small initial group of real users.',
          'Monitor crash reports and usage data closely.',
          'Collect direct feedback from early adopters.',
          'Identify what is and is not working as intended.',
          'Use findings to plan the next development cycle.',
        ],
      },
    ],
  },

  // =========================
  // SOFTWARE MVP
  // =========================

  software: {
    title: 'Software MVP Development',
    description:
      'We transform your software idea into a functional MVP that can be tested, validated, and launched.',
    steps: [
      {
        number: '01',
        title: 'Discovery & Idea Validation',
        text: 'We begin by understanding your product idea and determining whether it is worth developing into an MVP.',
        bullets: [
          'Discuss your product idea, business model, and long-term goals.',
          'Identify your target users and understand their needs and pain points.',
          'Define the core problem your product is intended to solve.',
          'Research competitors and existing solutions in the market.',
          'Evaluate the technical and business feasibility of the concept.',
          'Define the MVP vision, objectives, and initial product direction.',
        ],
      },
      {
        number: '02',
        title: 'Requirements & Feature Planning',
        text: 'We identify the essential features needed for your MVP and prioritize them based on business value.',
        bullets: [
          'Translate the product vision into concrete feature requirements.',
          'Separate must-have functionality from later-phase additions.',
          'Prioritize features by business value and implementation effort.',
          'Define acceptance criteria for each core feature.',
          'Document the final MVP scope for sign-off.',
        ],
      },
      {
        number: '03',
        title: 'UI/UX Design',
        text: 'We design intuitive user experiences and interfaces that make the product easy to use.',
        bullets: [
          'Map primary user flows through the product.',
          'Wireframe key screens before visual design begins.',
          'Design a clean, consistent interface aligned to your brand.',
          'Validate flows against usability best practices.',
          'Prepare design assets for handoff to development.',
        ],
      },
      {
        number: '04',
        title: 'MVP Development',
        text: 'Our development team builds the core product using technologies suited to your requirements.',
        bullets: [
          'Set up the technical architecture and project foundation.',
          'Build features in prioritized order, starting with the core.',
          'Integrate any required third-party services or APIs.',
          'Conduct regular internal reviews against the agreed scope.',
          'Keep development tightly aligned to the defined MVP features.',
        ],
      },
      {
        number: '05',
        title: 'Testing & Quality Assurance',
        text: 'We test the application, identify issues, and ensure the MVP works reliably.',
        bullets: [
          'Run functional testing across all core features.',
          'Test across supported browsers and devices.',
          'Identify and prioritize bugs by severity.',
          'Re-test fixes to confirm issues are fully resolved.',
          'Confirm stability before sign-off for launch.',
        ],
      },
      {
        number: '06',
        title: 'Deployment & Launch',
        text: 'We deploy the MVP and prepare it for real users.',
        bullets: [
          'Prepare the production environment for launch.',
          'Deploy the application and verify it runs correctly live.',
          'Set up monitoring to catch issues after launch.',
          'Prepare onboarding materials for early users.',
          'Coordinate go-live timing with your team.',
        ],
      },
      {
        number: '07',
        title: 'Feedback & Iteration',
        text: 'We use user feedback and product data to identify improvements and future features.',
        bullets: [
          'Collect structured feedback from early users.',
          'Review usage data to see how the product is actually used.',
          'Identify friction points and unmet needs.',
          'Prioritize the next round of improvements.',
          'Plan the roadmap beyond the MVP based on real evidence.',
        ],
      },
    ],
  },

  // =========================
  // MOBILE APP MVP (older separate entry)
  // =========================

  mobile: {
    title: 'Mobile App MVP Development',
    description:
      'Launch your mobile product quickly with a focused MVP containing the features that matter most.',
    steps: [
      {
        number: '01',
        title: 'Idea Discovery',
        text: 'We understand your mobile app idea, target audience, and business objectives.',
        bullets: [
          'Clarify the problem your mobile app aims to solve.',
          'Identify your target audience and their mobile habits.',
          'Understand the business goals behind the app.',
          'Review comparable apps already in the market.',
          'Confirm the concept is ready to move into planning.',
        ],
      },
      {
        number: '02',
        title: 'Feature Planning',
        text: 'We define and prioritize the core features required for the first version of the application.',
        bullets: [
          'List candidate features for the first release.',
          'Prioritize by what proves the core value fastest.',
          'Cut anything not essential to the first version.',
          'Define how each feature should behave at a high level.',
          'Lock the scope before design begins.',
        ],
      },
      {
        number: '03',
        title: 'Mobile UI/UX Design',
        text: 'We create intuitive interfaces optimized for mobile users.',
        bullets: [
          'Design around mobile-first interaction patterns.',
          'Keep navigation simple for small screens.',
          'Design for both common device sizes and orientations.',
          'Review flows for thumb-friendly usability.',
          'Finalize screens ready for development handoff.',
        ],
      },
      {
        number: '04',
        title: 'App Development',
        text: 'We develop the core mobile application and integrate the required functionality.',
        bullets: [
          'Build out screens in priority order.',
          'Integrate core functionality and any required APIs.',
          'Implement authentication and user data handling.',
          'Keep builds scoped strictly to the agreed features.',
          'Review progress against the original plan regularly.',
        ],
      },
      {
        number: '05',
        title: 'Testing',
        text: 'We test the application across relevant devices and fix issues.',
        bullets: [
          'Test on a representative range of real devices.',
          'Check performance on both new and older hardware.',
          'Fix bugs affecting core functionality first.',
          'Verify the app behaves correctly offline and online.',
          'Confirm stability before moving to launch.',
        ],
      },
      {
        number: '06',
        title: 'Launch',
        text: 'We prepare and launch the MVP for your target users.',
        bullets: [
          'Prepare store listings and required assets.',
          'Submit the app for platform review where required.',
          'Coordinate launch timing with your team.',
          'Monitor the rollout closely in the first days.',
          'Be ready to respond quickly to early issues.',
        ],
      },
      {
        number: '07',
        title: 'Improve & Scale',
        text: 'We analyze feedback and continuously improve the application.',
        bullets: [
          'Gather feedback and usage data from real users.',
          'Identify the highest-impact improvements first.',
          'Plan and prioritize the next development cycle.',
          'Address performance or stability issues as they emerge.',
          'Scale features based on validated user demand.',
        ],
      },
    ],
  },

  // =========================
  // DESKTOP APP MVP
  // =========================

  desktop: {
    title: 'Desktop App MVP Development',
    description:
      'Build a powerful desktop MVP focused on your most important business requirements.',
    steps: [
      {
        number: '01',
        title: 'Discovery',
        text: 'We understand your business requirements and desktop application goals.',
        bullets: [
          'Understand the core workflow the app needs to support.',
          'Identify the primary users and their environment.',
          'Clarify the business problem the app addresses.',
          'Confirm target operating systems from the outset.',
          'Assess feasibility before scoping requirements.',
        ],
      },
      {
        number: '02',
        title: 'Requirements Planning',
        text: 'We define the essential functionality required for the MVP.',
        bullets: [
          'Break the core workflow into concrete requirements.',
          'Prioritize the functionality essential to the first release.',
          'Defer secondary features to a later phase.',
          'Define how the app should behave in key scenarios.',
          'Document and confirm the agreed scope.',
        ],
      },
      {
        number: '03',
        title: 'UI/UX Design',
        text: 'We design an intuitive desktop experience for your users.',
        bullets: [
          'Design around standard desktop interaction patterns.',
          'Plan menus, shortcuts, and multi-window behavior.',
          'Keep the interface consistent with the target OS conventions.',
          'Validate flows against how users actually work day to day.',
          'Finalize designs ready for development.',
        ],
      },
      {
        number: '04',
        title: 'Development',
        text: 'We develop the desktop application and implement its core functionality.',
        bullets: [
          'Select a framework suited to your target platforms.',
          'Build the core workflow first, before secondary features.',
          'Integrate any required local or cloud data storage.',
          'Keep the build tightly aligned to defined requirements.',
          'Review progress regularly against the agreed plan.',
        ],
      },
      {
        number: '05',
        title: 'Testing',
        text: 'We test functionality, performance, and compatibility.',
        bullets: [
          'Test core functionality thoroughly on each target OS.',
          'Check performance under realistic day-to-day use.',
          'Verify installer and update behavior works cleanly.',
          'Fix issues affecting core workflows first.',
          'Confirm stability before packaging for release.',
        ],
      },
      {
        number: '06',
        title: 'Deployment',
        text: 'We package and deploy the application for your users.',
        bullets: [
          'Package the application for each target platform.',
          'Set up a distribution or update delivery method.',
          'Verify installation works cleanly on a fresh machine.',
          'Prepare release notes and basic user guidance.',
          'Coordinate rollout timing with your team.',
        ],
      },
      {
        number: '07',
        title: 'Iteration',
        text: 'We improve the product based on feedback and future requirements.',
        bullets: [
          'Collect feedback from early users of the application.',
          'Monitor for issues that surface under real-world use.',
          'Prioritize fixes and improvements by impact.',
          'Plan additional functionality for future releases.',
          'Keep the app aligned with evolving business needs.',
        ],
      },
    ],
  },

  // =========================
  // MOBILE DEVELOPMENT
  // =========================

  native: {
    title: 'Native Mobile Development',
    description:
      'Build high-performance mobile applications specifically designed for iOS or Android.',
    steps: [
      {
        number: '01',
        title: 'Discovery',
        text: 'We understand your goals, users, and platform requirements.',
        bullets: [
          'Clarify your product goals and target audience.',
          'Confirm which platforms — iOS, Android, or both — are in scope.',
          'Understand any platform-specific requirements upfront.',
          'Review comparable native apps for reference.',
          'Align on success criteria before planning begins.',
        ],
      },
      {
        number: '02',
        title: 'Planning',
        text: 'We define the application architecture, features, and technology requirements.',
        bullets: [
          'Define the technical architecture for each platform.',
          'Scope the feature set for the first release.',
          'Identify required native APIs and device capabilities.',
          'Plan how shared logic and platform-specific code will split.',
          'Confirm the technical plan before development starts.',
        ],
      },
      {
        number: '03',
        title: 'UI/UX Design',
        text: 'We create platform-specific designs optimized for mobile users.',
        bullets: [
          'Design to each platform\u2019s native conventions.',
          'Follow Human Interface Guidelines for iOS.',
          'Follow Material Design principles for Android.',
          'Keep core flows consistent while respecting platform norms.',
          'Finalize screens ready for native development.',
        ],
      },
      {
        number: '04',
        title: 'Native Development',
        text: 'We develop the application using the appropriate native technologies.',
        bullets: [
          'Build the iOS app using Swift and native frameworks.',
          'Build the Android app using Kotlin and native frameworks.',
          'Integrate required device features and native APIs.',
          'Keep both platforms aligned on shared functionality.',
          'Review builds against the agreed feature set regularly.',
        ],
      },
      {
        number: '05',
        title: 'Testing',
        text: 'We test the application across supported devices and operating system versions.',
        bullets: [
          'Test across a range of device models per platform.',
          'Verify behavior across supported OS versions.',
          'Profile performance, memory, and battery usage.',
          'Fix platform-specific issues as they surface.',
          'Confirm stability before store submission.',
        ],
      },
      {
        number: '06',
        title: 'Launch',
        text: 'We prepare and publish the application to the relevant app store.',
        bullets: [
          'Prepare store listings and required screenshots.',
          'Submit each app for platform review.',
          'Address any review feedback promptly.',
          'Coordinate launch timing across both platforms.',
          'Monitor crash reports closely after release.',
        ],
      },
    ],
  },

  'cross-platform': {
    title: 'Cross-Platform Development',
    description: 'Build applications for multiple platforms using a shared codebase.',
    steps: [
      {
        number: '01',
        title: 'Requirement Analysis',
        text: 'We understand your product requirements and target platforms.',
        bullets: [
          'Clarify your product goals and target platforms.',
          'Confirm whether a shared codebase fits your needs.',
          'Identify any platform-specific requirements upfront.',
          'Review comparable cross-platform apps for reference.',
          'Align on success criteria before technology selection.',
        ],
      },
      {
        number: '02',
        title: 'Technology Selection',
        text: 'We select the most suitable cross-platform technology for your application.',
        bullets: [
          'Evaluate frameworks such as React Native and Flutter.',
          'Weigh performance needs against development speed.',
          'Confirm the chosen stack supports required native features.',
          'Assess your team\u2019s familiarity with the chosen tools.',
          'Finalize the technology decision before building.',
        ],
      },
      {
        number: '03',
        title: 'UI/UX Design',
        text: 'We design a consistent experience across supported platforms.',
        bullets: [
          'Design one core experience that adapts across platforms.',
          'Respect platform conventions where it matters most.',
          'Keep navigation and core flows consistent everywhere.',
          'Review designs for shared-component feasibility.',
          'Finalize screens ready for development handoff.',
        ],
      },
      {
        number: '04',
        title: 'Development',
        text: 'We build the application using a shared codebase.',
        bullets: [
          'Build core functionality once, shared across platforms.',
          'Bridge in native modules where true native performance is needed.',
          'Keep platform-specific code isolated and minimal.',
          'Review builds against the agreed feature set regularly.',
          'Maintain a single source of truth for shared logic.',
        ],
      },
      {
        number: '05',
        title: 'Testing',
        text: 'We test the application across different devices and platforms.',
        bullets: [
          'Test on real devices across each supported platform.',
          'Verify shared logic behaves consistently everywhere.',
          'Catch and fix platform-specific rendering quirks.',
          'Check performance is acceptable on both platforms.',
          'Confirm stability before release.',
        ],
      },
      {
        number: '06',
        title: 'Deployment',
        text: 'We prepare and launch the application on the required platforms.',
        bullets: [
          'Prepare store listings for each target platform.',
          'Submit apps for review where required.',
          'Coordinate a unified launch across platforms.',
          'Set up shared analytics and monitoring post-launch.',
          'Monitor early usage closely across all platforms.',
        ],
      },
    ],
  },
};

export default function ServiceLifecycle() {
  const { id } = useParams();
  const service = lifecycleData[id];

  // Tracks which step numbers are currently expanded — multiple can be open at once.
  const [openSteps, setOpenSteps] = useState({});

  function toggleStep(number) {
    setOpenSteps((current) => ({
      ...current,
      [number]: !current[number],
    }));
  }

  if (!service) {
    return (
      <section className="lifecycle-page">
        <div className="container">
          <h1>Service Not Found</h1>
          <Link to="/services">Back to Services</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Our Process</p>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="lifecycle-section">
        <div className="container">
          <h2>Our Development Lifecycle</h2>

          <div className="lifecycle">
            {service.steps.map((step) => {
              const isOpen = !!openSteps[step.number];

              return (
                <div className="lifecycle-step" key={step.number}>
                  <div className="step-number">{step.number}</div>

                  <div className="step-content">
                    <button
                      type="button"
                      className="step-trigger"
                      onClick={() => toggleStep(step.number)}
                      aria-expanded={isOpen}
                    >
                      <h3>{step.title}</h3>
                      <span className={`step-caret ${isOpen ? 'step-caret--open' : ''}`}>▾</span>
                    </button>

                    <div className={`step-body ${isOpen ? 'step-body--open' : ''}`}>
                      <div className="step-body-inner">
                        <p>{step.text}</p>

                        {step.bullets && (
                          <ul className="step-bullets">
                            {step.bullets.map((bullet, index) => (
                              <li key={index}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Link to="/contact" className="ai-contact">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}