import React from 'react';
import Button from './Button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  description: string;
  price: number;
  period: 'month' | 'year';
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  description,
  price,
  period,
  features,
  isPopular = false,
  ctaText,
}) => {
  return (
    <div 
      className={`h-full rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border ${
        isPopular ? 'border-blue-500 shadow-lg shadow-blue-500/10' : 'border-gray-800'
      } relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:scale-[1.02] hover:border-blue-500/40`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-lg shadow-lg">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 h-12 mb-6">{description}</p>
        
        <div className="mb-6">
          <div className="flex items-end">
            <span className="text-4xl font-bold text-white">${price}</span>
            <span className="text-gray-400 ml-2">/{period}</span>
          </div>
        </div>
        
        <div className="mb-8">
          <Button 
            variant={isPopular ? 'primary' : 'outline'} 
            className="w-full"
          >
            {ctaText}
          </Button>
        </div>
        
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;