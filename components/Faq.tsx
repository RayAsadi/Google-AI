
import React, { useState } from 'react';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    {
      q: "Does ROIDentalAgency.com AI actually sound like a human?",
      a: "Yes. We use the latest generative voice technology that replicates human inflection, pauses, and tone. Most patients don't realize they're speaking with an AI agent. Call 916-382-2516 to hear a live sample."
    },
    {
      q: "Which Dental Practice Management Softwares do you support?",
      a: "We integrate directly with over 40+ systems, including Dentrix (G4-G7), Open Dental, Eaglesoft, Curve, and Denticon. If your system has an API, we can connect to it."
    },
    {
      q: "Is ROIDentalAgency.com AI HIPAA compliant?",
      a: "Absolutely. Security and patient privacy are our top priorities. All data transmission is encrypted, and we strictly follow BAA protocols required for healthcare providers."
    },
    {
      q: "What happens if the AI can't answer a complex question?",
      a: "Sarah is trained to recognize when she's out of her depth. In those cases, she will offer to take a message for a human callback or transfer the call to your office staff immediately."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {questions.map((item, idx) => (
          <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
            >
              <span className="font-bold text-slate-900">{item.q}</span>
              <svg 
                className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-5 text-slate-600 animate-fade-in-down">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
