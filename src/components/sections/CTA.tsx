import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Workflow with AI?
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Join thousands of professionals who are saving time, boosting productivity, and creating better results with our AI platform.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="primary" size="lg" className="group">
              Get Started Today
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </Button>
            
            <Button variant="outline" size="lg">
              Schedule a Demo
            </Button>
          </div>
          
          <p className="mt-8 text-gray-400 text-sm">
            No credit card required. Start with a 14-day free trial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;