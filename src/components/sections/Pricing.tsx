import React, { useState } from 'react';
import PricingCard from '../ui/PricingCard';
import { pricingData } from '../../data/pricing';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the plan that's right for you and start transforming your workflow with AI
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 text-sm ${!isYearly ? 'text-white font-medium' : 'text-gray-400'}`}>
              Monthly
            </span>
            
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex items-center h-6 rounded-full w-12 transition-colors focus:outline-none"
              aria-pressed={isYearly}
              aria-label="Toggle pricing period"
            >
              <span 
                className={`${
                  isYearly ? 'bg-blue-600' : 'bg-gray-700'
                } absolute h-6 w-12 mx-auto rounded-full transition-colors`}
              />
              <span 
                className={`${
                  isYearly ? 'translate-x-6' : 'translate-x-0'
                } inline-block h-4 w-4 transform bg-white rounded-full transition-transform mx-1`}
              />
            </button>
            
            <span className={`ml-3 text-sm flex items-center ${isYearly ? 'text-white font-medium' : 'text-gray-400'}`}>
              Yearly
              <span className="ml-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs py-0.5 px-2 rounded-full">
                20% off
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingData.map((plan, index) => (
            <PricingCard 
              key={index}
              name={plan.name}
              description={plan.description}
              price={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              features={plan.features}
              isPopular={plan.isPopular}
              period={isYearly ? 'year' : 'month'}
              ctaText={plan.ctaText}
            />
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">All plans include:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Unlimited AI generations",
                "Access to all AI models",
                "24/7 technical support",
                "99.9% uptime guarantee",
                "Regular feature updates",
                "Basic analytics dashboard",
                "API access (rate limits apply)",
                "Community forum access"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;