
import React from 'react';
import { Sprout, ShoppingBag, CreditCard, Package } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Sprout className="h-12 w-12 text-white" />,
      title: 'Farmers List Produce',
      description: 'Verified farmers list their fresh produce with details, pricing, and availability.',
      color: 'bg-farmse-leaf',
      number: '01'
    },
    {
      icon: <ShoppingBag className="h-12 w-12 text-white" />,
      title: 'Customers Shop Online',
      description: 'Browse through a wide variety of fresh, farm-direct products and add to cart.',
      color: 'bg-secondary',
      number: '02'
    },
    {
      icon: <CreditCard className="h-12 w-12 text-white" />,
      title: 'Secure Checkout',
      description: 'Choose payment method and complete transaction with escrow protection.',
      color: 'bg-farmse-soil',
      number: '03'
    },
    {
      icon: <Package className="h-12 w-12 text-white" />,
      title: 'Doorstep Delivery',
      description: 'Fresh produce is delivered right to your doorstep, maintaining quality and freshness.',
      color: 'bg-primary',
      number: '04'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-primary/5 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-secondary/5 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 right-1/4 w-32 h-32 rounded-full bg-farmse-wheat/10 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            How FarmSE <span className="text-primary">Works</span>
          </h2>
          <p className="text-gray-600">
            Our streamlined process connects farmers directly with customers, ensuring freshness,
            quality, and fair pricing for everyone involved.
          </p>
        </div>
        
        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 z-10"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary font-bold">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className={`w-20 h-20 ${step.color} rounded-2xl shadow-lg flex items-center justify-center mb-6`}>
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-serif font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional Information */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pr-8">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                AI-Powered Recommendations & Insights
              </h3>
              <p className="text-gray-600 mb-6">
                Our platform uses artificial intelligence to provide personalized recommendations to customers and 
                valuable market insights to farmers, creating a smarter ecosystem for everyone.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mr-2">
                    <div className="w-2 h-2 rounded-full bg-primary m-1"></div>
                  </div>
                  <span className="text-sm text-gray-700">Crop Recommendations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mr-2">
                    <div className="w-2 h-2 rounded-full bg-primary m-1"></div>
                  </div>
                  <span className="text-sm text-gray-700">Weather Forecasts</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mr-2">
                    <div className="w-2 h-2 rounded-full bg-primary m-1"></div>
                  </div>
                  <span className="text-sm text-gray-700">Market Trends</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mr-2">
                    <div className="w-2 h-2 rounded-full bg-primary m-1"></div>
                  </div>
                  <span className="text-sm text-gray-700">Pricing Analytics</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <div className="relative w-48 h-48 rounded-full bg-white shadow-xl border border-primary/20 flex items-center justify-center">
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '15s' }}></div>
                <div className="z-10 text-center">
                  <div className="font-serif font-bold text-5xl text-primary">AI</div>
                  <div className="text-sm text-gray-500 mt-1">Powered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
