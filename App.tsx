
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import InteractiveDemo from './components/InteractiveDemo';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Automate your front desk with <span className="gradient-text">ROIDentalAgency.com</span>
                </h2>
                <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                  Our advanced AI voice agent handles appointments, answers common patient questions, and seamlessly integrates with your existing workflow.
                </p>
             </div>
             <FeatureGrid />
          </div>
        </section>

        <section id="how-it-works" className="py-24 bg-slate-50">
          <Steps />
        </section>

        <section id="demo" className="py-24 bg-white border-y border-slate-100">
          <InteractiveDemo />
        </section>

        <section id="testimonials" className="py-24 bg-slate-50">
          <Testimonials />
        </section>

        <section id="faq" className="py-24 bg-white">
          <Faq />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
