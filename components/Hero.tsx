
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
          Call us today: 916-382-2516
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto">
          The AI Receptionist That <span className="gradient-text">Never Misses a Patient</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12">
          ROIDentalAgency.com handles your scheduling, answers patient FAQs, and integrates directly with your EHR—available 24/7 so you never lose a patient to voicemail again.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Start Your Free Trial
          </button>
          <a href="tel:916-382-2516" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center">
            Call 916-382-2516
          </a>
        </div>

        {/* Hero Image/Mockup placeholder */}
        <div className="mt-20 relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-white p-2">
            <div className="bg-slate-900 rounded-xl aspect-[16/9] flex items-center justify-center overflow-hidden">
                <img 
                    src="https://picsum.photos/seed/dental/1200/675" 
                    alt="ROIDentalAgency.com AI Interface" 
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                </div>
            </div>
            
            {/* Floating stats badges */}
            <div className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-900">100% Booking Rate</div>
                        <div className="text-xs text-slate-500">During after-hours</div>
                    </div>
                </div>
            </div>
            <div className="absolute -top-6 -right-6 md:top-12 md:-right-12 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-900">Saved 40+ Hours</div>
                        <div className="text-xs text-slate-500">Per month/practice</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
