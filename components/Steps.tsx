
import React from 'react';

const Steps: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Connect Your Calendar",
      description: "Integrate ROIDentalAgency.com with your existing practice management software in just two clicks. We support all major platforms."
    },
    {
      number: "02",
      title: "Define Your Rules",
      description: "Tell Sarah your office hours, preferred scheduling gaps, and common procedure prices so she can answer accurately."
    },
    {
      number: "03",
      title: "Forward Your Calls",
      description: "Enable conditional call forwarding. When your staff is busy or the office is closed, ROIDentalAgency.com takes over automatically."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Implementation is Effortless</h2>
        <p className="text-slate-600 max-w-xl mx-auto">Going live takes less than 30 minutes. Contact 916-382-2516 for setup assistance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step, idx) => (
          <div key={idx} className="relative group">
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-full w-full h-[2px] bg-slate-200 -z-0"></div>
            )}
            <div className="relative z-10 bg-white rounded-2xl p-8 border border-slate-100 shadow-sm group-hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-black text-blue-100 mb-6 group-hover:text-blue-200 transition-colors">{step.number}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
