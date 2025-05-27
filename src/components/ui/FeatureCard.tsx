import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  iconColor,
  delay = 0,
}) => {
  return (
    <div 
      className="feature-card opacity-0 translate-y-8 transition-all duration-700 ease-out"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="h-full p-8 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-blue-500/30 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group relative overflow-hidden">
        {/* Glass effect */}
        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <div className="relative z-10">
          <div className={`${iconColor} p-3 rounded-lg inline-block mb-4 bg-opacity-20`}>
            <Icon className="h-8 w-8" />
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
            {description}
          </p>
        </div>
        
        {/* Hover glow effect */}
        <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>
  );
};

export default FeatureCard;