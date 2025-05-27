import React from 'react';
import FAQItem from '../ui/FAQItem';
import { faqData } from '../../data/faq';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, reach out to our support team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <FAQItem 
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Still have questions?
          </p>
          <a 
            href="#contact" 
            className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
          >
            Contact our support team
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;