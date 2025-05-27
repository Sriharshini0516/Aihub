import React, { useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: "Connect Your Data",
    description: "Easily connect and import your data from multiple sources with secure integrations."
  },
  {
    number: 2,
    title: "Choose Your AI Tools",
    description: "Select from our suite of AI tools tailored to your specific needs and use cases."
  },
  {
    number: 3,
    title: "Transform & Create",
    description: "Let our AI analyze, transform, and generate valuable insights and content from your data."
  }
];

const HowItWorks: React.FC = () => {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const steps = document.querySelectorAll('.step-item');
    steps.forEach((step) => {
      observer.observe(step);
    });

    return () => {
      steps.forEach((step) => {
        observer.unobserve(step);
      });
    };
  }, []);

  return (
    <section id="how-it-works" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get started with AIHub in just three simple steps
          </p>
        </div>

        <div className="relative" ref={stepsRef}>
          {/* Connection Line */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-gray-800 hidden md:block">
            <div className="progress-bar h-full bg-gradient-to-r from-blue-500 to-purple-500 w-0 transition-all duration-1000"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="step-item opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-8 flex justify-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-900 border-2 border-blue-500 text-blue-500 text-xl font-bold z-10 relative">
                    {step.number}
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 transform translate-x-8">
                      <ArrowRight size={24} className="text-blue-500" />
                    </div>
                  )}
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                  
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center justify-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      <span className="text-gray-300 text-sm">Simple integration</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      <span className="text-gray-300 text-sm">No coding required</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;