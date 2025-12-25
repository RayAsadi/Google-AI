
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Dr. James Miller",
      role: "Miller Family Dental",
      content: "Since installing ROIDentalAgency.com AI, we've recovered at least 15 potential new patients every month that used to just hang up when they reached our voicemail. The ROI was instant.",
      image: "https://picsum.photos/seed/doc1/100/100"
    },
    {
      name: "Sarah Jenkins",
      role: "Office Manager, BrightSmile",
      content: "The front desk team used to be overwhelmed with basic scheduling calls. Now they can focus on the patients physically in the office while the AI handles the phones. It's like having a second receptionist from ROIDentalAgency.com.",
      image: "https://picsum.photos/seed/staff1/100/100"
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Pediatric Dentistry Specialists",
      content: "I was skeptical about 'AI' sounds, but the voice is remarkably human. Patients actually thank the bot for its help. ROIDentalAgency.com has been a game changer for our emergency triage.",
      image: "https://picsum.photos/seed/doc2/100/100"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Clients Are Saying</h2>
        <div className="flex justify-center items-center space-x-1 text-yellow-400 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
            <p className="text-slate-600 italic mb-8">"{t.content}"</p>
            <div className="flex items-center space-x-4">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-blue-100" />
              <div>
                <div className="font-bold text-slate-900">{t.name}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
