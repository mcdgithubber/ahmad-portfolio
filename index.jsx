
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800';
  }, [darkMode]);

  return (
    <div className="min-h-screen p-6 md:p-12 transition-colors duration-300">
      <header className="mb-12 flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold text-purple-700 dark:text-purple-300">Ahmad Alzafiri</h1>
          <p className="text-lg mt-2">Technical Product Owner | IT Advisor | Problem Solver</p>
          <p className="mt-1">Auckland, New Zealand — <a href="mailto:ahmadalzafiri1@gmail.com" className="text-purple-600 underline">ahmadalzafiri1@gmail.com</a> | <a href="tel:+64210406887" className="text-purple-600 underline">+64 210 406 887</a></p>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 transition"
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mb-4">About Me</h2>
        <p>
          With 10+ years across development, digital transformation, and IT consulting, I bridge the gap between
          technology and people. I've built platforms, scaled real-world businesses, and led teams toward smarter,
          cleaner systems. Whether it’s product ownership, advisory, or full-scale solution delivery — I’m here
          to make things work better.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mb-4">Experience</h2>
        <ul className="space-y-4">
          <li>
            <strong>Freelance Technical Product Advisor</strong> (2018–Present)<br />
            Delivered bespoke platforms and integrations. Advised businesses on cloud, UX, automation, and CRM strategy.
          </li>
          <li>
            <strong>IT Advisor – Auckland City Council</strong> (2018–2020)<br />
            Supported internal teams with application enhancements, service mapping, and cross-department engagement.
          </li>
          <li>
            <strong>.NET Developer – AIA, Auckland</strong> (2016–2018)<br />
            Contributed to the design and maintenance of secure financial platforms and web-based tools for insurance operations.
            Collaborated across product and compliance teams to ensure systems met evolving user and regulatory requirements.
          </li>
          <li>
            <strong>Software Developer – Datacom</strong> (2014–2016)<br />
            Built full-stack web systems, internal dashboards, and collaborated closely with client delivery teams.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mb-4">Projects</h2>
        <ul className="space-y-4">
          <li>
            <strong>Martial Arts Academy Platform</strong><br />
            Designed and launched a full CRM, payment, and member management system — scaled from 5 to 400+ users.
          </li>
          <li>
            <strong>Client Dashboard Automation</strong><br />
            Created KPI dashboards and self-service reporting tools for SMEs using .NET, Blazor, and Azure functions.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mb-4">Hobbies & Interests</h2>
        <ul className="list-disc pl-6">
          <li>Reading — especially non-fiction, leadership, and personal development</li>
          <li>Martial Arts — black belt in multiple disciplines, coach, and active amateur kickboxer</li>
          <li>Mentoring — helping developers, business owners, and youth grow through tech</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mb-4">Contact</h2>
        <p>
          Want to work together or chat tech? Let’s connect: <a href="mailto:ahmadalzafiri1@gmail.com" className="text-purple-600 underline">ahmadalzafiri1@gmail.com</a>
        </p>
      </section>
    </div>
  );
}
