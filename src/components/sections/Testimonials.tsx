import React, { useState, useEffect } from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonialData } from '../../data/testimonials';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from professionals who have transformed their workflow with our AI tools
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialData.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <TestimonialCard 
                    name={testimonial.name}
                    role={testimonial.role}
                    company={testimonial.company}
                    content={testimonial.content}
                    avatarUrl={testimonial.avatarUrl}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonialData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-blue-500 w-6' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center transition-colors"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center transition-colors"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;