import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const text = textElement.innerText;
    textElement.innerHTML = '';
    
    text.split('').forEach((char, index) => {
      setTimeout(() => {
        textElement.innerHTML += char;
      }, 80 * index);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Single dynamic background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent animate-pulse"></div>
      
      <div className="container mx-auto px-4 pt-24 z-10 text-center">
        <h1 
          ref={textRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Unleash the Power of AI in One Platform
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-200 mb-10 max-w-3xl mx-auto">
          Harness AI for data analysis, video editing, content creation, and automation — all in one seamless dashboard.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button variant="primary" size="lg" className="group">
            Get Started Today
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
          </Button>
          
          <Button variant="outline" size="lg">
            View Demo
          </Button>
        </div>
        
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 h-16 bottom-0 left-0 right-0"></div>
          <div className="relative z-0 p-4 rounded-lg shadow-2xl max-w-5xl mx-auto border border-gray-800 bg-gray-900/70 backdrop-blur-md">
            <img 
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="AI Platform Dashboard" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;