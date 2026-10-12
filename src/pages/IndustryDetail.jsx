
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './IndustryDetail.css';

const industryData = {

  'project-management': {
    title: 'Project Management Solutions',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72',
    intro:
      'Project management solutions help organizations plan, coordinate, monitor, and complete projects more efficiently.',

    sections: [
      {
        heading: 'What is Project Management Software?',
        text:
          'Project management platforms provide teams with tools to organize tasks, assign responsibilities, track deadlines, monitor progress, manage resources, and collaborate effectively in one centralized system.'
      },
      {
        heading: 'Built Around Your Workflow',
        text:
          'Every organization manages projects differently. A customized solution can be designed around your team structure, approval processes, reporting requirements, and the way work moves from planning to completion.'
      },
      {
        heading: 'Better Visibility Across Projects',
        text:
          'Centralized project information makes it easier for managers and teams to understand what has been completed, what is currently in progress, and where delays or bottlenecks need attention.'
      }
    ],

    steps: [
      {
        title: 'Understand Project Workflows',
        text:
          'We identify how projects are currently planned, assigned, tracked, and reported across your organization.'
      },
      {
        title: 'Define Requirements',
        text:
          'We determine the features, user roles, dashboards, approvals, and reporting capabilities the platform needs.'
      },
      {
        title: 'Design the Platform',
        text:
          'We create an interface that makes project information, tasks, deadlines, and progress easy to manage.'
      },
      {
        title: 'Develop & Integrate',
        text:
          'We build the platform and connect it with the tools and systems your teams already use.'
      },
      {
        title: 'Test & Deploy',
        text:
          'We test workflows and user scenarios before deploying the system for real-world use.'
      }
    ],

    features: [
      'Task and project management',
      'Team assignments and responsibilities',
      'Deadline and milestone tracking',
      'Progress dashboards and reporting',
      'Project collaboration and communication'
    ]
  },


  'construction': {
    title: 'Construction Management Solutions',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
    intro:
      'Construction management software helps businesses coordinate projects, teams, materials, schedules, and field operations.',

    sections: [
      {
        heading: 'What is Construction Management Software?',
        text:
          'Construction management platforms centralize project information and help teams manage schedules, tasks, documentation, resources, contractors, and progress across different stages of a project.'
      },
      {
        heading: 'Connecting Office and Field Teams',
        text:
          'Construction projects often involve managers, supervisors, contractors, and workers operating across different locations. A centralized platform helps keep everyone aligned with the latest project information.'
      },
      {
        heading: 'Improving Project Visibility',
        text:
          'Real-time access to project updates, documentation, schedules, and work status makes it easier to identify delays, manage resources, and keep projects moving.'
      }
    ],

    steps: [
      {
        title: 'Map Construction Processes',
        text:
          'We review how projects are planned, managed, documented, and monitored from the office and field.'
      },
      {
        title: 'Define Project Requirements',
        text:
          'We identify the workflows, users, documentation, scheduling, and reporting features required.'
      },
      {
        title: 'Design the Solution',
        text:
          'We design a platform that makes project information accessible to managers and field teams.'
      },
      {
        title: 'Develop & Integrate',
        text:
          'We build the system and integrate relevant tools, data sources, and operational workflows.'
      },
      {
        title: 'Test & Launch',
        text:
          'We validate the platform against real construction workflows before deployment.'
      }
    ],

    features: [
      'Project and task tracking',
      'Construction schedules and milestones',
      'Document and file management',
      'Resource and contractor management',
      'Field progress tracking'
    ]
  },


  'field-service': {
    title: 'Field Service Management',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
    intro:
      'Field service management solutions help organizations coordinate employees, customer requests, schedules, and work performed in the field.',

    sections: [
      {
        heading: 'What is Field Service Management?',
        text:
          'Field service software helps organizations assign jobs, manage technicians, track work orders, maintain customer information, and monitor service activity from a centralized platform.'
      },
      {
        heading: 'Connect Field Teams with Management',
        text:
          'Field employees need access to the information required to complete their work, while managers need visibility into schedules, job status, and team performance. A centralized solution connects both sides.'
      },
      {
        heading: 'Manage Service Operations More Efficiently',
        text:
          'Automated scheduling, work-order tracking, customer records, and field updates can reduce administrative work and provide clearer visibility into daily service operations.'
      }
    ],

    steps: [
      {
        title: 'Understand Field Operations',
        text:
          'We map how service requests are received, assigned, completed, and reported.'
      },
      {
        title: 'Define Roles & Workflows',
        text:
          'We identify the responsibilities of technicians, supervisors, managers, and administrative teams.'
      },
      {
        title: 'Design the Solution',
        text:
          'We create interfaces for both field employees and management teams based on their specific needs.'
      },
      {
        title: 'Build & Integrate',
        text:
          'We develop the platform and connect it with relevant customer, scheduling, and business systems.'
      },
      {
        title: 'Test in Real Scenarios',
        text:
          'We validate scheduling, job assignments, field updates, and reporting before launch.'
      }
    ],

    features: [
      'Work order management',
      'Technician and employee scheduling',
      'Customer information management',
      'Field activity tracking',
      'Service reports and dashboards'
    ]
  },


  'lms': {
    title: 'Learning Management System',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
    intro:
      'Learning Management Systems provide a centralized platform for delivering, managing, and tracking learning and training programs.',

    sections: [
      {
        heading: 'What is an LMS?',
        text:
          'An LMS provides tools for managing courses, learning materials, assessments, users, progress, certifications, and training programs in one centralized environment.'
      },
      {
        heading: 'Designed for Different Learning Environments',
        text:
          'LMS platforms can support schools, universities, companies, professional training organizations, and other institutions with different learning structures and requirements.'
      },
      {
        heading: 'Track Learning Progress',
        text:
          'Centralized learner records make it easier to monitor course completion, assessment results, participation, and overall progress across training programs.'
      }
    ],

    steps: [
      {
        title: 'Understand Learning Requirements',
        text:
          'We identify your learners, instructors, courses, assessments, and training processes.'
      },
      {
        title: 'Plan the Learning Structure',
        text:
          'We define how courses, modules, lessons, assessments, and user roles should be organized.'
      },
      {
        title: 'Design the LMS',
        text:
          'We create an intuitive learning experience for students, instructors, and administrators.'
      },
      {
        title: 'Develop & Integrate',
        text:
          'We build the platform and integrate the systems and tools required for your learning environment.'
      },
      {
        title: 'Launch & Improve',
        text:
          'We deploy the LMS and refine the experience based on learner and administrator feedback.'
      }
    ],

    features: [
      'Course and lesson management',
      'Learning materials and resources',
      'Quizzes and assessments',
      'Learner progress tracking',
      'User and instructor management'
    ]
  },


  'cmms': {
    title: 'CMMS Solutions',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780',
    intro:
      'Computerized Maintenance Management Systems help organizations manage maintenance operations, assets, work orders, and equipment.',

    sections: [
      {
        heading: 'What is CMMS?',
        text:
          'A CMMS centralizes maintenance information and helps organizations schedule preventive maintenance, manage work orders, track equipment, and maintain detailed asset records.'
      },
      {
        heading: 'Centralize Maintenance Operations',
        text:
          'Instead of relying on spreadsheets, paperwork, or disconnected systems, teams can manage maintenance requests, equipment information, schedules, and records from one platform.'
      },
      {
        heading: 'Preventive Maintenance & Asset Visibility',
        text:
          'Maintenance teams can organize recurring maintenance activities, track equipment history, and maintain better visibility into the condition and service requirements of important assets.'
      }
    ],

    steps: [
      {
        title: 'Map Maintenance Processes',
        text:
          'We understand how assets, maintenance requests, work orders, and preventive maintenance are currently managed.'
      },
      {
        title: 'Define Asset Requirements',
        text:
          'We identify the equipment, locations, records, user roles, and maintenance information the system needs to manage.'
      },
      {
        title: 'Design the CMMS',
        text:
          'We design dashboards and workflows that make maintenance information easy to access and manage.'
      },
      {
        title: 'Develop & Integrate',
        text:
          'We build the platform and integrate relevant operational systems and data sources.'
      },
      {
        title: 'Test & Deploy',
        text:
          'We validate maintenance workflows and reporting before deploying the system.'
      }
    ],

    features: [
      'Asset and equipment management',
      'Work order tracking',
      'Preventive maintenance scheduling',
      'Maintenance history and records',
      'Maintenance dashboards and reports'
    ]
  },


  'legal': {
    title: 'Legal Solutions',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f',
    intro:
      'Legal technology solutions help law firms and legal departments organize cases, documents, clients, deadlines, and workflows.',

    sections: [
      {
        heading: 'Technology for Legal Teams',
        text:
          'Modern legal platforms can centralize case information, documents, deadlines, client communication, billing information, and internal workflows in one place.'
      },
      {
        heading: 'Organize Complex Legal Workflows',
        text:
          'Legal teams often manage large amounts of documentation and time-sensitive information. A centralized system can make it easier to organize records and keep important tasks on track.'
      },
      {
        heading: 'Improve Access to Information',
        text:
          'Structured case and client information allows teams to find relevant documents, track deadlines, and manage ongoing matters more efficiently.'
      }
    ],

    steps: [
      {
        title: 'Understand Legal Workflows',
        text:
          'We examine how cases, clients, documents, deadlines, and communication are currently managed.'
      },
      {
        title: 'Define System Requirements',
        text:
          'We identify the information, workflows, permissions, and reporting features required.'
      },
      {
        title: 'Design the Platform',
        text:
          'We create a clear interface for managing cases, documents, clients, and legal tasks.'
      },
      {
        title: 'Develop & Integrate',
        text:
          'We build the software and connect relevant systems and workflows.'
      },
      {
        title: 'Test & Deploy',
        text:
          'We test real legal workflows and user scenarios before launch.'
      }
    ],

    features: [
      'Case and matter management',
      'Client information management',
      'Document organization',
      'Deadline and task tracking',
      'Legal workflow management'
    ]
  },


  'hr': {
    title: 'Human Resource Solutions',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902',
    intro:
      'HR software helps organizations manage employees, recruitment, attendance, performance, and workforce processes.',

    sections: [
      {
        heading: 'What is HR Software?',
        text:
          'HR platforms provide centralized tools for managing employee information, recruitment, onboarding, attendance, leave, performance, and other workforce processes.'
      },
      {
        heading: 'Centralize Employee Information',
        text:
          'A centralized HR system gives organizations one place to manage employee records, organizational information, documents, and workforce activities.'
      },
      {
        heading: 'Streamline HR Workflows',
        text:
          'Automating repetitive HR processes can reduce administrative work while giving HR teams better visibility into recruitment, attendance, performance, and employee operations.'
      }
    ],

    steps: [
      {
        title: 'Understand HR Processes',
        text:
          'We map how recruitment, onboarding, attendance, employee records, and performance are currently handled.'
      },
      {
        title: 'Define Workforce Requirements',
        text:
          'We identify the HR workflows, employee roles, permissions, reports, and integrations required.'
      },
      {
        title: 'Design the HR System',
        text:
          'We create an intuitive platform for HR teams, managers, and employees.'
      },
      {
        title: 'Develop & Integrate',
        text:
          'We build the system and connect it with the tools your organization already uses.'
      },
      {
        title: 'Launch & Refine',
        text:
          'We deploy the platform and improve workflows based on real organizational usage.'
      }
    ],

    features: [
      'Employee information management',
      'Recruitment and applicant tracking',
      'Attendance and leave management',
      'Employee performance tracking',
      'HR reports and dashboards'
    ]
  },


  'facility-management': {
    title: 'Facility Management Solutions',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
    intro:
      'Facility management software helps organizations manage buildings, maintenance, resources, services, and daily facility operations.',

    sections: [
      {
        heading: 'What is Facility Management Software?',
        text:
          'Facility management platforms provide centralized tools for managing maintenance requests, assets, spaces, resources, vendors, and daily facility operations.'
      },
      {
        heading: 'Manage Facilities from One Platform',
        text:
          'A centralized facility management system gives teams better visibility into work requests, building assets, maintenance activities, and operational tasks.'
      },
      {
        heading: 'Improve Operational Visibility',
        text:
          'Organized facility information makes it easier to track requests, assign responsibilities, monitor work, and identify recurring operational issues.'
      }
    ],

    steps: [
      {
        title: 'Assess Facility Operations',
        text:
          'We review how maintenance requests, assets, spaces, vendors, and facility tasks are currently managed.'
      },
      {
        title: 'Define Requirements',
        text:
          'We identify the workflows, users, assets, reports, and integrations needed by the organization.'
      },
      {
        title: 'Design the Platform',
        text:
          'We create dashboards and workflows that make facility information easy to manage.'
      },
      {
        title: 'Develop & Integrate',
        text:
          'We build the solution and connect relevant systems, data, and operational tools.'
      },
      {
        title: 'Test & Launch',
        text:
          'We validate facility workflows and deploy the platform for real-world operations.'
      }
    ],

    features: [
      'Maintenance request management',
      'Asset and equipment tracking',
      'Space and facility management',
      'Vendor and service management',
      'Operational dashboards and reports'
    ]
  },


  'property-management': {
    title: 'Property Management Solutions',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
    intro:
      'Property management software helps organizations manage properties, tenants, leases, maintenance, and financial information.',

    sections: [
      {
        heading: 'What is Property Management Software?',
        text:
          'Property management platforms centralize information about properties, tenants, maintenance requests, leases, payments, and other property-related operations.'
      },
      {
        heading: 'Centralize Property Operations',
        text:
          'Managing multiple properties can involve large amounts of tenant information, maintenance requests, lease records, and financial data. A centralized platform keeps this information organized and accessible.'
      },
      {
        heading: 'Better Tenant & Property Management',
        text:
          'Property management software can help teams manage tenant interactions, track maintenance activities, monitor lease information, and maintain visibility across their properties.'
      }
    ],

    steps: [
      {
        title: 'Understand Property Operations',
        text:
          'We review how properties, tenants, leases, maintenance, and payments are currently managed.'
      },
      {
        title: 'Define Requirements',
        text:
          'We identify the properties, users, workflows, records, reports, and integrations required.'
      },
      {
        title: 'Design the Platform',
        text:
          'We create a system that makes property and tenant information easy to access and manage.'
      },
      {
        title: 'Develop & Integrate',
        text:
          'We build the platform and integrate relevant operational and financial systems.'
      },
      {
        title: 'Test & Deploy',
        text:
          'We validate property workflows and deploy the solution for everyday use.'
      }
    ],

    features: [
      'Property and unit management',
      'Tenant information management',
      'Lease tracking',
      'Maintenance request management',
      'Payment and property records'
    ]
  }

};


export default function IndustryDetail() {

  const { id } = useParams();

  const industry = industryData[id];

  if (!industry) {
    return (
      <section className="industry-content">
        <div className="container">
          <h1>Industry Not Found</h1>
          <Link to="/services">Back to Services</Link>
        </div>
      </section>
    );
  }

  return (
    <>

      <section className="industry-hero">
        <div className="container">

          <p className="eyebrow">
            Industry Solutions
          </p>

          <h1>
            {industry.title}
          </h1>

          <p>
            {industry.intro}
          </p>

        </div>
      </section>


      <section className="industry-content">

        <div className="container">

          <img
            src={industry.image}
            alt={industry.title}
            className="industry-image"
          />


          {industry.sections.map((section) => (

            <div
              className="industry-section"
              key={section.heading}
            >

              <h2>
                {section.heading}
              </h2>

              <p>
                {section.text}
              </p>

            </div>

          ))}


          {industry.features && (
            <div className="industry-section">

              <h2>
                What's Included
              </h2>

              <ul className="industry-features">

                {industry.features.map((feature, index) => (
                  <li key={index}>
                    {feature}
                  </li>
                ))}

              </ul>

            </div>
          )}


          {industry.steps && (
            <div className="industry-section">

              <h2>
                How It Works
              </h2>

              <div className="industry-steps">

                {industry.steps.map((step, index) => (

                  <div
                    className="industry-step"
                    key={step.title}
                  >

                    <div className="industry-step-number">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div>

                      <h3>
                        {step.title}
                      </h3>

                      <p>
                        {step.text}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>
          )}


          <Link
            to="/contact"
            className="industry-contact"
          >
            Contact Us
          </Link>

        </div>

      </section>

    </>
  );
}

