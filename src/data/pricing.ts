interface PricingData {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export const pricingData: PricingData[] = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects",
    monthlyPrice: 29,
    yearlyPrice: 23,
    features: [
      "5 AI projects",
      "1,000 AI generations per month",
      "Basic analytics",
      "3 team members",
      "24-hour support response",
      "Standard API access"
    ],
    ctaText: "Start Free Trial"
  },
  {
    name: "Professional",
    description: "Ideal for growing teams and businesses",
    monthlyPrice: 79,
    yearlyPrice: 63,
    features: [
      "20 AI projects",
      "5,000 AI generations per month",
      "Advanced analytics",
      "10 team members",
      "4-hour support response",
      "Premium API access",
      "Custom AI training"
    ],
    isPopular: true,
    ctaText: "Start Free Trial"
  },
  {
    name: "Enterprise",
    description: "For organizations with advanced needs",
    monthlyPrice: 199,
    yearlyPrice: 159,
    features: [
      "Unlimited AI projects",
      "25,000 AI generations per month",
      "Enterprise analytics",
      "Unlimited team members",
      "1-hour support response",
      "Dedicated account manager",
      "Custom AI model development",
      "Advanced security features"
    ],
    ctaText: "Contact Sales"
  }
];