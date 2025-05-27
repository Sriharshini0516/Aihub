import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  content,
  avatarUrl,
}) => {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 shadow-xl mx-4">
      <div className="flex items-start mb-6">
        <div className="mr-4 relative">
          <img 
            src={avatarUrl} 
            alt={name} 
            className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
          />
          <div className="absolute -bottom-2 -right-2 p-1 bg-blue-500 rounded-full">
            <Quote size={12} className="text-white" />
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white">{name}</h4>
          <p className="text-gray-400 text-sm">{role}, {company}</p>
        </div>
      </div>
      
      <blockquote className="relative">
        <Quote size={40} className="absolute -top-4 -left-2 text-blue-500/20" />
        <p className="text-lg text-gray-300 relative z-10 pl-4">
          {content}
        </p>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;