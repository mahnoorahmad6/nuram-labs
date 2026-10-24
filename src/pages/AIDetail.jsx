import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './AIDetail.css';
import { Helmet } from 'react-helmet-async';
const aiData = {
  chatbots: {
    title: 'AI Chatbots',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a',
    intro:
      'AI Chatbots Built for Support, Sales, and Everyday Business Needs',
    sections: [
      {
        heading: 'Beyond scripted bots',
        text: 'The chatbots most people remember from a decade ago followed rigid decision trees : one wrong phrase and the conversation dead-ended. Modern AI chatbots understand intent and context, not just keywords, so a customer can ask a question in their own words and still get a useful answer. That means fewer frustrated hand-offs to a human agent and more issues resolved in the first interaction.',
      },
      {
        heading: 'Trained on what you already know',
        text: 'Instead of starting from a blank slate, we train your chatbot on your actual documentation, product catalog, past support tickets, and FAQs. It answers the way your best support rep would — because it\'s pulling from the same knowledge your team already relies on, kept current as your content changes.',
      },
      {
        heading: 'A safety net, not a wall',
        text: 'Not every conversation should end with a bot. We build in clear handoff points — when a request is too sensitive, too complex, or the customer explicitly asks for a person — so the chatbot escalates smoothly to your team with full conversation context, instead of forcing customers to repeat themselves.',
      },
    ],
    steps: [
      { title: 'Audit your content', text: 'We review your existing docs, FAQs, and support history to see what the bot can already draw from.' },
      { title: 'Define its scope', text: 'We agree on what the bot should handle directly and what should route to a human.' },
      { title: 'Build & train', text: 'We connect the bot to your content and tune its responses against real example conversations.' },
      { title: 'Test with real questions', text: 'We run it against edge cases and awkward phrasing before it ever talks to a real customer.' },
      { title: 'Launch & monitor', text: 'We deploy it live and track resolution rates, escalation patterns, and where it still struggles.' },
    ],
    features: [
      'Trained on your documentation, catalog, or support history',
      'Handles FAQs, order status, and basic troubleshooting',
      'Escalates to a human agent with full conversation context',
      'Works across your website, app, or messaging channels',
      '24/7 coverage without adding headcount',
    ],
  },

  automation: {
    title: 'AI Automation',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    intro:
      'AI automation handles repetitive tasks like data entry, document processing, and request sorting, saving your team hours of manual work.',
    sections: [
      {
        heading: 'Where rules-based tools fall short',
        text: 'Traditional automation is great at "if this exact thing happens, do that exact thing" — but it breaks the moment a task requires reading, interpreting, or classifying something that doesn\'t fit a rigid pattern. Reading a contract, summarizing an email thread, or deciding which department a request belongs to are all tasks that used to require a human, every time.',
      },
      {
        heading: 'Judgment at scale',
        text: 'AI automation picks up exactly where rules-based tools stop working. It can read unstructured documents and extract the fields that matter, understand the gist of a long email and route it correctly, or flag which invoices look unusual and need a second look — the kind of judgment calls that don\'t reduce cleanly to an if/then statement.',
      },
      {
        heading: 'Built around your actual workflow',
        text: 'We don\'t hand you a generic tool and walk away. We map your specific process first — where the bottleneck actually is, what the inputs and outputs look like — and build the automation to fit that workflow, with clear checkpoints where a human still reviews before anything final happens.',
      },
    ],
    steps: [
      { title: 'Map the workflow', text: 'We walk through the process step by step to find where time is actually being lost.' },
      { title: 'Identify the judgment calls', text: 'We pinpoint which decisions genuinely need AI versus which are simple enough for basic rules.' },
      { title: 'Build the pipeline', text: 'We connect data extraction, classification, and routing into one working system.' },
      { title: 'Add human checkpoints', text: 'We decide together where a person should still review output before it\'s final.' },
      { title: 'Roll out & refine', text: 'We deploy gradually, watching accuracy closely, and tune the system as real cases come in.' },
    ],
    features: [
      'Document processing and structured data extraction',
      'Intelligent request triage and routing',
      'Automated summarization of long documents or threads',
      'AI-assisted report generation from raw data',
      'Human-in-the-loop checkpoints for anything high-stakes',
    ],
  },

  'voice-agents': {
    title: 'AI Voice Agents',
    image: 'https://images.unsplash.com/photo-1590650046871-92c887180603',
    intro:
      'AI voice agents handle natural phone conversations for customer support, scheduling, sales, and other business needs—without rigid phone menus or long wait times.',
    sections: [
      {
        heading: 'Conversation, not a phone tree',
        text: 'Press-1-for-billing systems force callers to navigate a menu built around your org chart, not their problem. A voice agent lets someone explain what they need in their own words, ask a follow-up mid-sentence, or change direction — the same way a conversation with a person actually works.',
      },
      {
        heading: 'Tasks completed, not just calls routed',
        text: 'These agents don\'t just answer questions — they can look up an order, reschedule an appointment, take a payment, or update account details in real time, connected directly to your existing systems. A caller can finish what they needed without ever reaching a human queue.',
      },
      {
        heading: 'Works both ways',
        text: 'Beyond inbound support, voice agents handle outbound calling too — appointment reminders, payment follow-ups, or satisfaction check-ins — freeing your team from repetitive call lists while keeping the tone consistent and on-brand every time.',
      },
    ],
    steps: [
      { title: 'Define call scenarios', text: 'We identify the specific call types the agent should handle, and which should route to a person.' },
      { title: 'Connect your systems', text: 'We integrate the agent with your CRM, scheduling, or payment tools so it can actually take action.' },
      { title: 'Script the conversation logic', text: 'We design how the agent responds, clarifies, and escalates across realistic call flows.' },
      { title: 'Test with real call scenarios', text: 'We run it against messy, interrupted, and off-script conversations before launch.' },
      { title: 'Launch & monitor call outcomes', text: 'We track completion rates and listen for where callers get stuck, then refine.' },
    ],
    features: [
      'Natural, interruption-tolerant conversation',
      'Inbound support: order lookups, rescheduling, troubleshooting',
      'Outbound calling: reminders, follow-ups, satisfaction checks',
      'Direct integration with your CRM and scheduling systems',
      'Seamless handoff to a live agent when needed',
    ],
  },

  'video-content': {
    title: 'AI Video Content',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279',
    intro:
      'AI-powered video tools help create marketing, training, and product content faster and at scale.',
    sections: [
      {
        heading: 'Content at a pace teams can\'t match manually',
        text: 'Recording, editing, captioning, and localizing a single video the traditional way can take days. AI tooling compresses that timeline dramatically — turning a script into a finished, captioned video in a fraction of the time, so your team can produce ten pieces of content in the time it used to take to make one.',
      },
      {
        heading: 'From script to finished video',
        text: 'We build pipelines that take a written script or outline and carry it through voice generation, visual assembly, and editing with minimal manual work at each stage — so your team\'s time goes into what the video should say, not the mechanics of producing it.',
      },
      {
        heading: 'Ready for every audience',
        text: 'Automated captioning and localization mean the same piece of content can reach viewers who watch on mute, who need accessibility support, or who speak a different language — without redoing the production work for each version.',
      },
    ],
    steps: [
      { title: 'Define the content need', text: 'We identify what recurring video content actually drains your team\'s time — training, product, or marketing.' },
      { title: 'Build the script-to-video pipeline', text: 'We set up the tools that turn a script into a structured video draft.' },
      { title: 'Add captioning & localization', text: 'We automate subtitles and translated versions as part of the same pipeline.' },
      { title: 'Template the format', text: 'We build reusable templates so future videos in the same series are fast to produce.' },
      { title: 'Review & refine output quality', text: 'We tune the pipeline based on the first few real videos it produces.' },
    ],
    features: [
      'Script-to-video generation pipelines',
      'Automated captioning for accessibility and silent viewing',
      'Multi-language localization without re-shooting',
      'Reusable templates for recurring content series',
      'Built for training, product, and marketing content alike',
    ],
  },

  'custom-assistants': {
    title: 'Custom AI Assistants',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998',
    intro:
      'Custom AI assistants use your business data and knowledge to provide relevant answers, support decisions, and help teams work more efficiently.',
    sections: [
      {
        heading: 'An assistant that knows your business',
        text: 'Generic AI tools don\'t know your internal docs, policies, or decision history — every answer requires you to translate it into your specific context. A custom assistant is grounded in your own data from the start, so answers already reflect how your organization actually operates.',
      },
      {
        heading: 'Faster research and drafting',
        text: 'Whether it\'s pulling together background on a client, drafting a first version of a report in your team\'s tone, or answering "have we dealt with this before?", a custom assistant turns tasks that used to mean digging through folders and old emails into a direct, immediate answer.',
      },
      {
        heading: 'Connected, not isolated',
        text: 'We connect the assistant to the systems your team already works in — internal wikis, shared drives, CRMs, ticketing systems — so it\'s drawing from live, current information rather than a one-time snapshot that goes stale within weeks.',
      },
    ],
    steps: [
      { title: 'Identify the use case', text: 'We pin down exactly what research, drafting, or lookup task is eating the most time.' },
      { title: 'Connect your knowledge sources', text: 'We ground the assistant in your internal docs, drives, or databases.' },
      { title: 'Tune tone & templates', text: 'We calibrate how it drafts and responds so it matches how your team actually writes.' },
      { title: 'Test against real questions', text: 'We run it through the kinds of questions your team asks daily before rollout.' },
      { title: 'Roll out & expand access', text: 'We launch to an initial team, then extend based on what proves useful.' },
    ],
    features: [
      'Grounded in your internal docs, wikis, and drives',
      'Drafts in your team\'s existing tone and templates',
      'Connected to live systems, not a one-time data dump',
      'Speeds up research, first drafts, and internal lookups',
      'Scoped access so sensitive data stays properly controlled',
    ],
  },

  integrations: {
    title: 'AI Integrations',
    image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387',
    intro:
      'Integrate AI into your existing software and workflows to add intelligent capabilities without replacing the tools your team already uses.',
    sections: [
      {
        heading: 'You don\'t need a new platform',
        text: 'Most teams don\'t need to replace their stack to get value from AI — they need it embedded into the tools they already use daily. Ripping out a system your team knows well, just to get AI features, usually costs more in retraining and disruption than the AI itself is worth.',
      },
      {
        heading: 'Features embedded where work happens',
        text: 'We build AI capabilities directly into your existing CRM, support tool, or internal dashboard — smart suggestions in a ticket queue, auto-generated summaries on a customer record, predictive fields in a form your team already fills out. The AI shows up inside the workflow, not as a separate tool to remember to open.',
      },
      {
        heading: 'API-level connections that hold up',
        text: 'Beyond UI-level features, we integrate at the API level with leading AI providers — building the underlying connections that let your systems talk to AI models reliably, securely, and with proper error handling, not a fragile prototype that breaks the first time a request times out.',
      },
    ],
    steps: [
      { title: 'Audit your current stack', text: 'We identify which existing tools would benefit most from embedded AI features.' },
      { title: 'Scope the integration', text: 'We define exactly what the AI should do inside each specific tool.' },
      { title: 'Build the API connections', text: 'We wire up reliable, properly handled connections to the relevant AI providers.' },
      { title: 'Embed the feature in-workflow', text: 'We surface the AI capability exactly where your team already works, not in a separate tab.' },
      { title: 'Test & harden', text: 'We stress-test for failure cases so the integration holds up under real, messy usage.' },
    ],
    features: [
      'AI features embedded directly into your CRM or support tools',
      'API-level integration with leading AI providers',
      'No disruptive replacement of systems your team already knows',
      'Built with proper error handling, not a fragile prototype',
      'Scoped to the specific workflows that benefit most',
    ],
  },
};

export default function AIDetail() {
  const { id } = useParams();
  const ai = aiData[id];

  if (!ai) {
    return (
      <section className="ai-content">
        <div className="container">
          <h1>AI Service Not Found</h1>
          <Link to="/services">Back to Services</Link>
        </div>
      </section>
    );
  }

  return (
    <>
     <Helmet>
        <title>{`${ai.title} | Nuram Labs`}</title>
  <meta name="description" content={ai.intro} />
    </Helmet>

      <section className="ai-hero">
        <div className="container">
          <p className="eyebrow">AI Development</p>
          <h1>{ai.title}</h1>
          <p>{ai.intro}</p>
        </div>
      </section>

      <section className="ai-content">
        <div className="container">
          <img src={ai.image} alt={ai.title} className="ai-image" />

          {ai.sections.map((section) => (
            <div className="ai-section" key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.text}</p>
            </div>
          ))}

          {ai.features && (
            <div className="ai-section">
              <h2>What's Included</h2>
              <ul className="ai-features">
                {ai.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {ai.steps && (
            <div className="ai-section">
              <h2>How It Works</h2>
              <div className="ai-steps">
                {ai.steps.map((step, index) => (
                  <div className="ai-step" key={step.title}>
                    <div className="ai-step-number">{String(index + 1).padStart(2, '0')}</div>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Link to="/contact" className="ai-contact">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}